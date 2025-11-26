/**
 * ResizeIframes Component
 *
 * Automatically resizes iframes within the content to be responsive.
 * Uses a mutation observer to handle dynamically added iframes.
 */
"use client";

import { useEffect, useRef } from "react";

interface ResizeIframesProps {
  children: React.ReactNode;
}

export default function ResizeIframes({ children }: ResizeIframesProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const resizeIframes = () => {
      const iframes = containerRef.current?.querySelectorAll("iframe");
      iframes?.forEach((iframe) => {
        // Make iframes responsive
        const parent = iframe.parentElement;
        if (parent && !parent.classList.contains("iframe-wrapper")) {
          const wrapper = document.createElement("div");
          wrapper.className = "iframe-wrapper relative w-full aspect-video";
          iframe.className = "absolute inset-0 w-full h-full";
          parent.insertBefore(wrapper, iframe);
          wrapper.appendChild(iframe);
        }
      });
    };

    resizeIframes();

    // Observe for dynamically added iframes
    const observer = new MutationObserver(resizeIframes);
    observer.observe(containerRef.current, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  return <div ref={containerRef}>{children}</div>;
}
