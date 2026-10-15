import { useRef } from "react";

export function Current_color():string {
  const textRef = useRef<HTMLParagraphElement>(null);

  const checkColor = () => {
    if (textRef.current) {
      const color = window.getComputedStyle(textRef.current).color;
      alert(`Current text color is: ${color}`);
      return color
    }
    return "#000000"
  }
return checkColor()}