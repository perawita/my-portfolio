"use client";
import React, { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";

import { fetchData } from '@/utils/api';

interface NavbarsProps {
  disable?: string;
}

export function Navbars({ disable }: NavbarsProps) {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" disableButton={disable} />
    </div>
  );
}

interface NavbarProps {
  className?: string;
  disableButton?: string;
}

function Navbar({ className, disableButton }: NavbarProps) {
  const [active, setActive] = useState<string | null>(null);
  const [services, setServices] = useState([
    {
      title: "",
      description: "",
      link: "",
    },
  ]);
  const [products, setProducts] = useState([
    {
      title: "",
      href: "",
      src: "",
      description: "",
    },
  ]);

  useEffect(() => {
    const getDataServices = async () => {
      try {
        const result = await fetchData(`${process.env.NEXT_PUBLIC_BACKEND}/api/content/services`,
          "GET",
          {
            "Content-Type": "application/json",
          }
        );
        setServices(result.response.List_services);
      } catch (err) {

      } finally {

      }
    };

    const getDataProjects = async () => {
      try {
        const result = await fetchData(`${process.env.NEXT_PUBLIC_BACKEND}/api/content/sell/projects`,
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
    getDataServices();
    getDataProjects();
  }, []);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        {disableButton !== "Home" && (
          <HoveredLink href="/">Home</HoveredLink>
        )}

        {disableButton !== "Services" && (
          <MenuItem setActive={setActive} active={active} item="Services">
            <div className="flex flex-col space-y-4 text-sm">
              {services.map((data, index) => (
                <HoveredLink key={index} href={data['link']}>{data['title']}</HoveredLink>
              ))}
            </div>
          </MenuItem>
        )}

        {disableButton !== "Products" && (
          <MenuItem setActive={setActive} active={active} item="Products">
            <div className="  text-sm grid grid-cols-2 gap-10 p-4">
              {products.map((data, index) => (
                <ProductItem
                  key={index}
                  title={data['title']}
                  href={data['href']}
                  src={data['src']}
                  description={data['description']}
                />
              ))}
            </div>
          </MenuItem>
        )}

        {/* {disableButton !== "Pricing" && (
          <MenuItem setActive={setActive} active={active} item="Pricing">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/hobby">Hobby</HoveredLink>
              <HoveredLink href="/individual">Individual</HoveredLink>
              <HoveredLink href="/team">Team</HoveredLink>
              <HoveredLink href="/enterprise">Enterprise</HoveredLink>
            </div>
          </MenuItem>
        )} */}
      </Menu>
    </div>
  );
}
