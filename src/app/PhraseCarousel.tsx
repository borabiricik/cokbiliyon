"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";

type PhraseCarouselProps = {
  phrases: string[];
  intervalMs?: number;
};

export default function PhraseCarousel({
  phrases,
  intervalMs = 5000,
}: PhraseCarouselProps) {
  const [index, setIndex] = useState(0);
  const safePhrases = useMemo(
    () => phrases.filter((phrase) => phrase.trim().length > 0),
    [phrases],
  );

  useEffect(() => {
    if (safePhrases.length === 0) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setIndex((current) => (current + 1) % safePhrases.length);
    }, intervalMs);

    return () => window.clearInterval(intervalId);
  }, [intervalMs, safePhrases.length]);

  if (safePhrases.length === 0) {
    return null;
  }

  return (
    <div className="relative flex h-32 items-center justify-center sm:h-36">
      <AnimatePresence mode="wait">
        <motion.p
          key={safePhrases[index]}
          className="absolute inset-0 flex items-center justify-center text-lg font-semibold leading-relaxed text-white sm:text-2xl"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          "{safePhrases[index]}"
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
