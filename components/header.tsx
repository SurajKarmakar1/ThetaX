"use client";
import Link from "next/link";
// import { Logo } from "@/components/logo";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { cn } from "@/lib/utils";

const menuItems = [
  { name: "Features", href: "#link" },
  { name: "Solution", href: "#link" },
  { name: "Pricing", href: "#link" },
  { name: "About", href: "#link" },
];

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-2 px-13 ">
      {" "}
      <nav
        data-state={menuState ? "active" : undefined}
        className={cn(
          "mx-auto w-full max-w-6xl px-4 transition-all duration-300",
          isScrolled
            ? "max-w-4xl rounded-3xl border bg-background/50 backdrop-blur-lg"
            : "border-0 border-transparent"
        )}
      >
        <div className="relative flex flex-wrap items-center justify-between gap-6 py-2 lg:gap-0 lg:py-2">
          <div className="flex w-full justify-between lg:w-auto">
            <Link
              href="/"
              aria-label="home"
              className="flex items-center space-x-2"
            >
              {/* <Logo /> */}
              <h1 className="text-neutral-800 font-sans">
                <img
                  src="/companyLOGO.png"
                  alt="theta-x"
                  height={40}
                  width={40}
                  className="rounded-2xl bg-transparent"
                />
              </h1>
            </Link>

            <button
              onClick={() => setMenuState(!menuState)}
              aria-label={menuState ? "Close Menu" : "Open Menu"}
              className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden "
            >
              <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
              <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
            </button>
          </div>

          <div className="absolute inset-0 m-auto hidden size-fit lg:block">
            <ul className="flex gap-8 text-sm font-sans">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-accent-foreground block duration-150 font-sans"
                  >
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
            <div className="lg:hidden">
              <ul className="space-y-6 text-base font-sans">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-accent-foreground block duration-150 font-sans"
                    >
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
              <Button
                asChild
                variant="outline"
                size="sm"
                className={cn(isScrolled ? "lg:hidden" : "")}
              >
                <Link href="#">
                  <span>Login</span>
                </Link>
              </Button>
              <Button
                asChild
                size="sm"
                className={cn(isScrolled ? "lg:hidden" : "")}
              >
                <Link href="#">
                  <span>Sign Up</span>
                </Link>
              </Button>
              <Button
                asChild
                size="sm"
                className={cn(isScrolled ? "lg:inline-flex" : "hidden")}
              >
                <Link href="/dashboard">
                  <span>Dashboard</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
