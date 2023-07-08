import { useState } from "react";
import React from "react";

export const TrafficLight = () => {
  const [color, setColor] = useState("");

  return (
    <div className="traffic_light">
      <div
        className={color === "red" ? "red light glow" : "red light"}
        onClick={() => setColor("red")}
      ></div>
      <div
        className={color === "yellow" ? "yellow light glow" : "yellow light"}
        onClick={() => setColor("yellow")}
      ></div>
      <div
        className={color === "green" ? "green light glow" : "green light"}
        onClick={() => setColor("green")}
      ></div>
    </div>
  );
};
