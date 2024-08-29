"use client";
import React, { useState, useEffect } from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { fetchData } from '@/utils/api';

export function Hero_Parallax() {
  
  const [products, setProducts] = useState([
    {
      title: "",
      link: "",
      thumbnail: "",
    },
  ]);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData(`${process.env.NEXT_PUBLIC_BACKEND}/api/content/projects`,
          "GET",
          {
            "Content-Type": "application/json",
          }
        );
        setProducts(result.response.List_projects);
      } catch (err) {

      } finally {

      }
    };

    getData();
  }, []);

  return <HeroParallax products={products} />;
}