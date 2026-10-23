export const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const clamp01 = (n: number) => Math.min(1, Math.max(0, n));

export const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

type Read = () => (() => void) | void;

const subscribers = new Set<Read>();
let raf = 0;
let attached = false;

function frame() {
  raf = 0;
  // Read everything first, then write, so layout is measured once per frame.
  const writes: (() => void)[] = [];
  subscribers.forEach((read) => {
    const w = read();
    if (w) writes.push(w);
  });
  writes.forEach((w) => w());
}

function schedule() {
  if (!raf) raf = requestAnimationFrame(frame);
}

/**
 * One shared scroll and resize loop. Each subscriber measures in `read` and may return a function that applies
 * its writes. Returns an unsubscribe function. Runs once on subscribe so the first frame is correct.
 */
export function onScrollFrame(read: Read): () => void {
  subscribers.add(read);
  if (!attached) {
    attached = true;
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
  }
  schedule();
  return () => {
    subscribers.delete(read);
    if (subscribers.size === 0 && attached) {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      attached = false;
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
    }
  };
}
