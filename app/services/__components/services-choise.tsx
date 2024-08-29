import React, { useEffect, useState } from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export function ServicesChoise() {
  const [services, setServices] = useState([
    {
      title: "",
      description: "",
      link: "",
    },
  ]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND}/api/content/services`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        setServices(json.response.List_services);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        // Jika gagal, set default services sebagai cadangan
        setServices([
          {
            title: "Services gagal di load",
            description: "..............",
            link: "............",
          },
        ]);
      }
    };

    getData();
  }, [services]);

  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={services} />
    </div>
  )
}