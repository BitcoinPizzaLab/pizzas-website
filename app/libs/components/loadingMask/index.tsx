"use client";

import Image from "next/image";
import "./index.css";
import { useState } from "react";
import loadingImg from "./asciiLogo.gif";

export const LoadingMask = () => {
  const [clicked, setClicked] = useState(false);

  if (clicked) return null;
  return (
    <div onClick={() => setClicked(true)} className="loadingMask">
      <p className="enterButton">Click to enter the Pizza Lab ...</p>
      <Image
        className="loadingImg"
        width={500}
        height={500}
        alt="logo"
        src={loadingImg}
      />
    </div>
  );
};
