import React from "react";

export default function BoxColor({ r, g, b }) {
  return (
    <div
      className="colorBox"
      style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}
    >
      rgb ({r}, {g}, {b})
    </div>
  );
}
