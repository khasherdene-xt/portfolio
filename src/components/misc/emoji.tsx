"use client";

import type { ComponentProps } from "react";
import { useEffect, useState } from "react";

const EMOJI = [
  "💻", // software / coding
  "🧠", // psychological
  "♟️", // chess
  "🎮", // gaming
  "📚", // books
  "🍜", // food
  "🎨", // activity / creative
  "🏆", // win
  "🧩", // puzzle / strategy
  "☕", // chill / focus
  "📝", // writing / notes
  "🧘", // mindfulness / psychological
  "🕹️", // gaming
  "🍫", // food/snack
  "🔍", // curiosity / research
  "🌟", // achievement / motivation
  "📈", // progress / learning
  "🧊", // cool / clear mind
  "🤖", // software / AI
  "🧠", // thinking / mental
  "🕰️", // time management
  "📖", // reading
  "🧗", // challenge / activity
  "🍕", // food
  "🎯", // focus / goal
  "🛠️", // build / code / software
  "🎲", // gaming / randomness
  "🏹", // aim / strategy
  "🌱", // growth / mindset,
  "🇲🇳", // Mongolian flag
];

function getRandomEmoji(exclude?: string) {
  const emoji = exclude ? EMOJI.filter((emoji) => emoji !== exclude) : EMOJI;

  return emoji[Math.trunc(emoji.length * Math.random())];
}

export function Emoji(props: ComponentProps<"span">) {
  const [emoji, setEmoji] = useState(EMOJI[0]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setEmoji((emoji) => getRandomEmoji(emoji));
    }, 500);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return <span {...props}>{emoji}</span>;
}
