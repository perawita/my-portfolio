"use client";

import React, { useEffect, useRef, useState } from "react";
import { IconBrandGithub } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import createGlobe from "cobe";
import Image from "next/image";
import Link from "next/link";


export function Features_Section() {
  const features = [
    {
      title: "Desain perangkat lunak pada bahasa pemerograman native menggunakan MVC",
      description:
        "Saya akan menggunakan design patterns yaitu MVC (Model-View-Controller) agar client dapat lebih mudah melakukan pengembangan lanjutan kedepanya.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Penggunaan teknologi",
      description:
        "Saya akan menggunakan teknologi populer untuk menyelesaikan sebuah aplikasi, namun lebih mengutamakan teknologi yang sudah di sepakati bersama client.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      title: "Penggunaan library dari github",
      description:
        "Saya biasanya membuat sebuah library dan menyimpanya di dalam github agar dapat saya gunakan ataupun orang lain menggunakanya di dalam project yang sedang di kerjakan apabila di butuhkan",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800",
    },
    {
      title: "Deploy hanya beberapa menit",
      description:
        "Saya bisa membuat website anda dapat di akses secara online dalam hitungan menit.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ];
  return (
    <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          Fakta tentang jasa saya
        </h4>

        <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          Beberapa keahilian saya dalam menyelesaikan sebuah project yang saya dapatkan.
          keahlian ini dapat berguna untuk mempercepat pengerjaan sebuah pengerjaan aplikasi
          tanpa mengurangi keamaan dan fungsi dari aplikasinya
        </p>
      </div>

      <div className="relative ">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className=" h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className=" max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base  max-w-4xl text-left mx-auto",
        "text-neutral-500 text-center font-normal dark:text-neutral-300",
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full  p-5  mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2  ">
          {/* TODO */}
          <Image
            src="/assets/images/thumbnail/mvc-ss-code.png"
            alt="header"
            width={1600}
            height={1600}
            className="h-full w-full aspect-square object-cover object-left rounded-sm blur-none group-hover/image:blur-md transition-all duration-200"
          />
        </div>
      </div>

      <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
    </div>
  );
};

export const SkeletonThree = () => {
  return (
      <Link
        href="https://github.com/perawita?tab=repositories"
        target="__blank"
        className="relative flex gap-10  h-full group/image"
      >
        <div className="w-full  mx-auto bg-transparent dark:bg-transparent group h-full">
          <div className="flex flex-1 w-full h-full flex-col space-y-2  relative">
            {/* TODO */}
            <IconBrandGithub className="h-20 w-20 absolute z-10 inset-0 dark:text-neutral-300 m-auto " />

            <Image
              src="/assets/images/thumbnail/gihtub-my-profile.png"
              alt="header"
              width={1600}
              height={1600}
              className="h-full w-full aspect-square object-cover object-left rounded-sm blur-none group-hover/image:blur-md transition-all duration-200"
            />

          </div>
        </div>
      </Link>
  );
};

export const SkeletonTwo = () => {
  const images = [
    "https://cms-assets.tutsplus.com/uploads/users/71/courses/854/preview_image/get-started-with-laravel-6-400x277.png",
    "https://wallpapercave.com/wp/wp5191387.jpg",
    "https://images.ctfassets.net/23aumh6u8s0i/c04wENP3FnbevwdWzrePs/1e2739fa6d0aa5192cf89599e009da4e/nextjs",
    "https://wallpapercave.com/wp/wp5191387.jpg",
    "https://th.bing.com/th/id/OIP.lflm3p0jvoC4p8c-j8zfJgHaEk?rs=1&pid=ImgDetMain",
  ];

  const [styles, setStyles] = useState<{ [key: number]: React.CSSProperties }>({});

  useEffect(() => {
    const newStyles: { [key: number]: React.CSSProperties } = {};
    images.forEach((_, idx) => {
      newStyles[idx] = {
        rotate: `${Math.random() * 20 - 10}deg`,
      };
    });
    setStyles(newStyles);
  }, []);

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };

  return (
    <div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
      <div className="flex flex-row -ml-20">
        {images.map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={"images-first" + idx}
            style={styles[idx]}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
          >
            <Image
              src={image}
              alt="bali images"
              width={500}
              height={500}
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div>
      <div className="flex flex-row">
        {images.map((image, idx) => (
          <motion.div
            key={"images-second" + idx}
            style={styles[idx]}
            variants={imageVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
          >
            <Image
              src={image}
              alt="bali images"
              width={500}
              height={500}
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div>

      <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-white dark:from-black to-transparent  h-full pointer-events-none" />
      <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-white dark:from-black  to-transparent h-full pointer-events-none" />
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="h-60 md:h-60  flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
      <Globe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />
    </div>
  );
};

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [-6.2088, 106.8456], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};
