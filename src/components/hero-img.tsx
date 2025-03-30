"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

export function ThreeDCardDemo() {
  return (
    <motion.div
      className="relative w-auto sm:w-[30rem] h-auto rounded-xl p-6 border border-black/[0.1] dark:border-white/[0.2] bg-transparent dark:hover:shadow-2xl dark:hover:shadow-yellow-500/[0.1]"
      whileHover={{ rotateX: 10, rotateY: -10, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
    >
      <motion.div
        className="w-full mt-4"
        whileHover={{ rotateZ: -10, translateZ: 100 }}
      >
        <Image
  src="/hero-img.png"
  height={1000}
  width={1000}
  className="w-full h-full max-h-[300px] sm:max-h-40 md:max-h-[250px] object-cover rounded-xl group-hover/card:shadow-xl"
  alt="thumbnail"
/>

      </motion.div>
    </motion.div>
  );
}
