"use client";
import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    const move = (e) => {
      el.style.setProperty("--cx", `${e.clientX}px`);
      el.style.setProperty("--cy", `${e.clientY}px`);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, []);
  return <div ref={ref} className="cursor-glow" aria-hidden="true" />;
}
