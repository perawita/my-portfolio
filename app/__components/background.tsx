"use client";
import React, { useEffect } from "react";

import { motion } from "framer-motion";

import { FlipWords } from "@/components/ui/flip-words";

export function Background() {
    const words = ["Freelance", "Fullstack", "Pengembang"]

    return (
        <div className="flex flex-col items-center justify-center py-20 min-h-screen bg-white dark:bg-black">
            <div className="w-full max-w-7xl mx-auto md:h-auto lg:flex lg:items-center">
                <div className="relative isolate overflow-hidden px-6 py-16 shadow-2xl sm:rounded-3xl sm:px-16 md:py-24 lg:flex lg:gap-x-20 lg:px-24 lg:py-16">

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 1,
                        }}
                        className="flex flex-col items-center"
                    >
                        <h2 className="text-center text-xl md:text-4xl font-bold text-black dark:text-white">
                            Hai saya <FlipWords words={words} />
                        </h2>
                        <p className="text-center text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-200 max-w-md mt-2 mx-auto">
                            Terjun di dunia IT dari 2020 dan mulai masuk di web developer
                            semenjak 2021, dan memulai sebagai freelance aktif dari tahun 2024
                        </p>

                        <a href="/services" className="inline-flex h-12 mt-4 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white">
                            Ingin mencoba jasa saya ?
                        </a>
                    </motion.div>

                    <div className="relative mt-16 lg:mt-8 lg:flex-shrink-0 lg:w-1/2 lg:h-auto">
                        <img
                            alt="App screenshot"
                            src="./assets/images/undraw/undraw_freelancer_re_irh4.svg"
                            className="w-50 h-50 object-contain sm:rounded-md"
                        />
                    </div>
                </div>
            </div>
        </div >
    )
}
