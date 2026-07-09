"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "shade-room-curtain-seen";

export function CurtainIntro() {
  const [shouldShow, setShouldShow] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    if (!window.localStorage.getItem(STORAGE_KEY)) {
      setShouldShow(true);
    }
  }, []);

  function dismissCurtain() {
    window.localStorage.setItem(STORAGE_KEY, "true");
    setIsLeaving(true);
  }

  if (!shouldShow) {
    return null;
  }

  return (
    <button
      aria-label="Enter The Shade Room"
      className={`curtain-intro${isLeaving ? " curtain-intro--leaving" : ""}`}
      onAnimationEnd={() => {
        if (isLeaving) {
          setShouldShow(false);
        }
      }}
      onClick={dismissCurtain}
      type="button"
    >
      <img src="/Images/Product/Curtain image.jpeg" alt="" />
    </button>
  );
}
