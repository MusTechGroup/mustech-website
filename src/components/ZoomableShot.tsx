"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Maximize2, Minimize2 } from "lucide-react";

interface ZoomableShotProps {
  /** Still image. Also used as the poster when `video` is set. */
  src: string;
  alt: string;
  /** Classes for the inline frame (aspect ratio, border, background). */
  frameClassName: string;
  /** Classes for the inline image or video (object-fit, position). */
  mediaClassName?: string;
  sizes?: string;
  /** Optional looping walkthrough shown in place of the still. */
  video?: { webm: string; mp4: string };
}

/**
 * A screenshot that opens full screen on tap and closes on the next tap.
 *
 * The inline frame is a plain button, so a horizontal swipe still scrolls the
 * carousel and a vertical swipe still scrolls the page: the browser only fires
 * `click` for a tap that did not turn into a scroll. The overlay is portalled
 * to `document.body` because `position: fixed` breaks inside a transformed
 * ancestor (Reveal animates with transforms).
 */
export default function ZoomableShot({
  src,
  alt,
  frameClassName,
  mediaClassName = "object-contain object-top",
  sizes = "(max-width: 640px) 90vw, 260px",
  video,
}: ZoomableShotProps) {
  const [open, setOpen] = useState(false);
  const [shown, setShown] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }
    };
    window.addEventListener("keydown", onKeyDown);

    const frame = window.requestAnimationFrame(() => setShown(true));

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("keydown", onKeyDown);
      root.style.overflow = previousOverflow;
      setShown(false);
    };
  }, [open, close]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Enlarge: ${alt}`}
        className={`group/shot block cursor-zoom-in p-0 text-left ${frameClassName}`}
      >
        {video ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster={src}
            className={`block h-full w-full ${mediaClassName}`}
          >
            <source src={video.webm} type="video/webm" />
            <source src={video.mp4} type="video/mp4" />
          </video>
        ) : (
          <Image src={src} alt={alt} fill sizes={sizes} className={mediaClassName} />
        )}
        <span
          aria-hidden="true"
          className="absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-transform duration-200 group-hover/shot:scale-110"
        >
          <Maximize2 className="h-4 w-4" />
        </span>
      </button>

      {open &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={alt}
            onClick={close}
            className={`fixed inset-0 z-[1000] flex cursor-zoom-out items-center justify-center overscroll-contain bg-black/90 p-3 transition-opacity duration-200 motion-reduce:transition-none sm:p-8 ${
              shown ? "opacity-100" : "opacity-0"
            }`}
            style={{ height: "100dvh" }}
          >
            {video ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                poster={src}
                className="max-h-full max-w-full rounded-lg object-contain"
              >
                <source src={video.webm} type="video/webm" />
                <source src={video.mp4} type="video/mp4" />
              </video>
            ) : (
              // The full-resolution source file, not a resized copy.
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={src}
                alt={alt}
                className="max-h-full max-w-full rounded-lg object-contain"
              />
            )}
            <button
              type="button"
              autoFocus
              onClick={close}
              aria-label="Close enlarged view"
              className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm"
              style={{ marginTop: "env(safe-area-inset-top)" }}
            >
              <Minimize2 className="h-5 w-5" />
            </button>
          </div>,
          document.body,
        )}
    </>
  );
}
