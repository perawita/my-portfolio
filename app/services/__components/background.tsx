"use client";
import React from "react";

import { ServicesChoise } from "@/app/services/__components/services-choise";

export function Background() {
    return (
        <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
        <div className="px-8">
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full lg:hidden" />

          <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
            Services
          </h4>
          <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
            Pilihan layanan yang tersedia untuk saat ini
          </p>
        </div>
  
        <div className="relative ">
             <ServicesChoise />
        </div>
      </div>
    )
}

