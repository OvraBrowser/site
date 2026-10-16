"use client";

import Image from "next/image";
import { useState } from "react";

// Real screenshots of Ovra's new tab page, one per built-in theme
const themes = [
  { id: "aurora", name: "Aurora", swatch: "linear-gradient(135deg,#5a68d6,#5a3590)" },
  { id: "forest-bloom", name: "Forest Bloom", swatch: "linear-gradient(135deg,#2f6b55,#1b3e36)" },
  { id: "icy-mist", name: "Icy Mist", swatch: "linear-gradient(135deg,#e0eafc,#cfdef3)" },
  { id: "midnight-blue", name: "Midnight Blue", swatch: "linear-gradient(135deg,#2a3f7a,#141d3d)" },
  { id: "velvet-dusk", name: "Velvet Dusk", swatch: "linear-gradient(135deg,#84406f,#3f1f4a)" },
];

export default function ThemeSwitcher() {
  const [active, setActive] = useState("forest-bloom");

  return (
    <div>
      <div className="relative mx-auto aspect-[7/4] w-full max-w-[880px]">
        {themes.map((theme) => (
          <Image
            key={theme.id}
            src={`/shots/theme-${theme.id}-gray.jpg`}
            alt={`Ovra with the ${theme.name} theme`}
            fill
            sizes="(max-width: 900px) 92vw, 880px"
            className={`object-contain transition-opacity duration-500 ${active === theme.id ? "opacity-100" : "opacity-0"}`}
          />
        ))}
      </div>

      <div role="radiogroup" aria-label="Theme" className="mt-8 flex flex-wrap justify-center gap-2">
        {themes.map((theme) => (
          <button
            key={theme.id}
            type="button"
            role="radio"
            aria-checked={active === theme.id}
            onClick={() => setActive(theme.id)}
            className={`flex items-center gap-2 rounded-full border px-3.5 py-2 text-[15px] transition-colors ${
              active === theme.id ? "border-ink bg-white text-ink" : "border-transparent text-steel hover:text-ink"
            }`}
          >
            <span aria-hidden className="h-4 w-4 rounded-full ring-1 ring-black/10" style={{ background: theme.swatch }} />
            {theme.name}
          </button>
        ))}
      </div>
    </div>
  );
}
