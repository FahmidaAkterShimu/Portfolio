"use client";
import { useEffect, useRef, useState } from "react";

export default function Counter({ value }) {
  const m = String(value).match(/^(\d+)(.*)$/);
  const target = m ? +m[1] : 0, suffix = m ? m[2] : "";
  const [n, setN] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      if (matchMedia("(prefers-reduced-motion: reduce)").matches) { setN(target); return; }
      const t0 = performance.now();
      const tick = (t) => {
        const p = Math.min((t - t0) / 1200, 1);
        setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [target]);
  return <span ref={ref}>{n}{suffix}</span>;
}
