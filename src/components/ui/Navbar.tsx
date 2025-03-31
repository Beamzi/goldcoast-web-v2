"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FloatingDockWrapper } from "../FloatingDockWrapper";
export function Navbar() {
  return (
    <div className="bg-neutral-50/10 relative flex items-center justify-center">
      <Nav className="top-2" />
    </div>
  );
}

function Nav({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 flex justify-center mx-auto z-50 ",
        className
      )}
    >
      <Menu setActive={setActive}>
        <div className="md:flex align-middle md:justify-between  justify-center  w-[90vw]">
          <div className="flex items-center gap-2 min-w-57 justify-center">
            <Image
              src="/images/logo-white.svg"
              alt="asd"
              width={30}
              height={30}
            ></Image>

            <h1 className="text-base text-neutral-50 font-bold md:text-2xl">
              Goldcoast-web.
            </h1>
          </div>

          <div className="md:min-w-50 border-2 border-red  md:flex align-middle  justify-center text-center">
            <MenuItem
              setActive={setActive}
              active={active}
              href="/services"
              item="Services"
            >
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/services/web-development">
                  Web Development
                </HoveredLink>
                <HoveredLink href="services/interface-design">
                  Interface Design
                </HoveredLink>
                <HoveredLink href="services/seo">
                  Search Engine Optimization
                </HoveredLink>
                <HoveredLink href="services/branding">Branding</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Products">
              <div className="  text-sm grid grid-cols-2 gap-10 p-4">
                <ProductItem
                  title="Algochurn"
                  href="https://algochurn.com"
                  src="/images/1231231.png"
                  description="Prepare for tech interviews like never before."
                />
                <ProductItem
                  title="Tailwind Master Kit"
                  href="https://tailwindmasterkit.com"
                  src="/images/1231231.png"
                  description="Production ready Tailwind css components for your next project"
                />
                <ProductItem
                  title="Moonbeam"
                  href="https://gomoonbeam.com"
                  src="/images/1231231.png"
                  description="Never write from scratch again. Go from idea to blog in minutes."
                />
                <ProductItem
                  title="Rogue"
                  href="https://userogue.com"
                  src="/images/1231231.png"
                  description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                />
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Pricing">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/hobby">Hobby</HoveredLink>
                <HoveredLink href="/individual">Individual</HoveredLink>
                <HoveredLink href="/team">Team</HoveredLink>
                <HoveredLink href="/enterprise">Enterprise</HoveredLink>
              </div>
            </MenuItem>
          </div>
          <div className="w-57">
            <FloatingDockWrapper></FloatingDockWrapper>
          </div>
        </div>
      </Menu>
    </div>
  );
}

/*           <div className="flex justify-center">
            <button className="min-w-57 py-1 transform rounded-lg bg-black font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 md:w-32 dark:bg-white dark:text-black dark:hover:bg-gray-200">
              Login
            </button>
          </div> */
