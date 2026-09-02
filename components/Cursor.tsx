"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    if (!cursor) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let currentX = mouseX;
    let currentY = mouseY;

    let animationFrame: number;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      const target = event.target as HTMLElement;

      const interactive = Boolean(
        target.closest("a, button, [role='button']")
      );

      cursor.classList.toggle("is-hovering", interactive);
      cursor.classList.add("is-visible");
    };

    const handleMouseLeave = () => {
      cursor.classList.remove("is-visible");
    };

    const handleMouseEnter = () => {
      cursor.classList.add("is-visible");
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.18;
      currentY += (mouseY - currentY) * 0.18;

      cursor.style.left = `${currentX}px`;
      cursor.style.top = `${currentY}px`;

      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener(
      "mouseleave",
      handleMouseLeave
    );
    document.documentElement.addEventListener(
      "mouseenter",
      handleMouseEnter
    );

    animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
      document.documentElement.removeEventListener(
        "mouseenter",
        handleMouseEnter
      );

      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return <div ref={cursorRef} className="ink-cursor" />;
}