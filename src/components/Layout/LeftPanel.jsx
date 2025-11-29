import React from "react";
import "./LeftPanel.css";
import illustration from "../../assets/illustration.png";

export default function LeftPanel() {
  return (
    <div className="left-panel">
      <img
        src={illustration}
        alt="welcome characters"
        className="illustration"
      />
    </div>
  );
}

