#!/bin/bash
# Prints the two MusTech OS guides to the PDFs that their "Download PDF" buttons serve.
# Run after any change to either guide: npm run guides:pdf, then build and deploy as usual.
set -euo pipefail
cd "$(dirname "$0")/.."
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
PORT=4785
npm run build >/dev/null
python3 -m http.server "$PORT" --directory out >/dev/null 2>&1 &
SERVER=$!
trap 'kill $SERVER' EXIT
sleep 1
for page in mustech-os:mustech-os-guide quick-start:mustech-os-quick-start; do
  src="${page%%:*}"; dst="${page##*:}"
  "$CHROME" --headless=new --disable-gpu --no-pdf-header-footer --virtual-time-budget=4000 \
    --print-to-pdf="public/jumpstart/$dst.pdf" "http://127.0.0.1:$PORT/jumpstart/$src.html" 2>/dev/null
  echo "public/jumpstart/$dst.pdf"
done
npm run build >/dev/null   # again, so out/ carries the new PDFs
