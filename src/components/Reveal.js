"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/cn";

export default function Reveal({ children, delay = 0, from = "up", className = "" }) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect(); } }, { threshold: 0.15 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={cn("reveal", from !== "up" && `reveal-${from}`, on && "in", className)} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}
