#!/bin/bash
# Prints the two MusTech OS one-pagers to the PDFs behind their download buttons, and fails unless each is one A4 page.
# Run after any change to either page: npm run guides:pdf, then build and deploy as usual.
set -euo pipefail
cd "$(dirname "$0")/.."
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
PORT=4785
npm run build >/dev/null
python3 -m http.server "$PORT" --directory out >/dev/null 2>&1 &
SERVER=$!
trap 'kill $SERVER' EXIT
sleep 1
for page in mustech-os:mustech-os-one-pager quick-start:mustech-os-quick-start; do
  src="${page%%:*}"; dst="${page##*:}"
  "$CHROME" --headless=new --disable-gpu --no-pdf-header-footer --virtual-time-budget=4000 \
    --print-to-pdf="public/jumpstart/$dst.pdf" "http://127.0.0.1:$PORT/jumpstart/$src.html" 2>/dev/null
  pages=$(python3 -c "import re,sys;print(len(re.findall(rb'/Type\s*/Page(?!s)',open(sys.argv[1],'rb').read())))" "public/jumpstart/$dst.pdf")
  echo "public/jumpstart/$dst.pdf: $pages page(s)"
  [ "$pages" = 1 ] || { echo "not one page: shorten the sheet" >&2; exit 1; }
done
npm run build >/dev/null   # again, so out/ carries the new PDFs
