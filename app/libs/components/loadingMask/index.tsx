/* eslint-disable @next/next/no-img-element */
"use client";

import "./index.css";
import { useState } from "react";

export const LoadingMask = () => {
  const [clicked, setClicked] = useState(false);

  if (clicked) return null;
  return (
    <div onClick={() => setClicked(true)} className="loadingMask">
      <p className="enterButton">Click to enter the Pizza Lab ...</p>
      <img
        className="loadingImg"
        width={500}
        height={500}
        alt="logo"
        src="images/asciiLogo.gif"
      />
    </div>
  );
};
