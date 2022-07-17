import React, { useState } from "react";

export default function (props) {
  const [color, setColor] = useState("hsl( 215, 75%, 90%)");
  const [border, setBorder] = useState("hsl( 215, 60%, 70%)");

  return (
    <div
      className="tile"
      style={{
        boxShadow: `-10px -10px 40px ${border} inset, 2px 2px 10px ${border} inset, -12px 4px 20px black inset, 4px 4px 16px black`,
        borderRadius: "20% 20% 60% 20%",
        backgroundColor: color,
        height: "200%",
        gridColumn: props.column,
        gridRow: props.row,
        transition: "color 500ms",
        transform: "rotate(30deg)",
        width: "100%",
        zIndex: 1000 - props.counter,
      }}
      onMouseEnter={mouseEnter}
    />
  );
  function mouseEnter() {
    const hue = Math.floor(Math.random() * 120) + 150;
    const saturation = Math.floor(Math.random() * 20) + 60;
    const lightness = Math.floor(Math.random() * 20) + 70;
    const newColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    setColor(`hsl(${hue}, ${saturation}%, ${lightness}%)`);
    setBorder(`hsl(${hue}, ${saturation / 2}%, ${lightness - 30}%)`);
  }
}