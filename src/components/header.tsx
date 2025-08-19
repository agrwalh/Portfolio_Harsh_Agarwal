"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  const NavLinkContent = () => (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          {link.label}
        </Link>
      ))}
    </>
  );
  
  const MobileNavLinkContent = () => (
    <>
      {navLinks.map((link) => (
        <SheetClose asChild key={link.href}>
          <Link
            href={link.href}
            className="text-lg font-medium transition-colors hover:text-accent font-body text-center"
          >
             {link.label}
          </Link>
        </SheetClose>
      ))}
       <SheetClose asChild>
          <a
            href="https://drive.google.com/file/d/1Fo0tdLzom9lmPtpaxnK5O14hZQCxtkNE/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-medium transition-colors hover:text-accent font-body text-center"
          >
            Resume
          </a>
       </SheetClose>
    </>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300">
      <div className="container mx-auto px-4 md:px-6">
        {/* Desktop Header */}
        <div className="hidden md:flex items-center justify-between gap-8 rounded-full bg-background/80 backdrop-blur-sm shadow-lg p-2 transition-all">
          <Link href="/" className="flex items-center gap-3 pl-4">
              <div className="relative">
                  <Image
                      src="/profile.png"
                      alt="Harsh Agarwal"
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                  />
                  <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-background"></span>
              </div>
              <span className="font-semibold text-lg">Harsh Agarwal</span>
          </Link>
          <nav className="flex items-center gap-6 bg-card px-8 py-2 rounded-full shadow-inner">
            <NavLinkContent />
          </nav>
          <div className="flex items-center gap-2 pr-4">
            <ThemeToggle />
             <Button asChild variant="outline" size="sm" className="rounded-full">
                <a href="https://drive.google.com/file/d/1Fo0tdLzom9lmPtpaxnK5O14hZQCxtkNE/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
            </Button>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between rounded-full bg-background/80 backdrop-blur-sm shadow-lg p-2">
           <Link href="/" className="flex items-center gap-2 pl-2">
              <Image
                  src="/profile.png"
                  alt="Harsh Agarwal"
                  width={32}
                  height={32}
                  className="rounded-full object-cover"
              />
              <span className="font-semibold">Harsh Agarwal</span>
          </Link>
          <div className="flex items-center">
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-card">
                <div className="flex flex-col gap-8 pt-20 items-center">
                    <MobileNavLinkContent />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
