"use client";

import { useEffect, useState } from "react";

export default function Copyright() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date().toLocaleTimeString("en-US", {
        timeZone: "Asia/Makassar",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false, // set to true if you want 12-hour format with AM/PM
      });
      setTime(now);
    };

    updateTime(); // run immediately on mount
    const interval = setInterval(updateTime, 1000); // update every second

    return () => clearInterval(interval); // clean up on unmount
  }, []);

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between items-center w-full h-24 p-4 text-center gap-1">
        <span className="text-sm text-black/70">
            Copyright © {new Date().getFullYear()} Archetype Systems.
        </span>
        <span className="text-sm text-black/70">
            Time in Bali: {time}
        </span>
        <span className="text-sm text-black/70">
            Made with ❤️ by Archetype Systems
        </span>
    </div>

  );
}
