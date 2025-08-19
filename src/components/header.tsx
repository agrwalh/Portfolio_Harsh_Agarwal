"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { CodeXml, Menu } from "lucide-react";

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
  ];

  const NavLinkContent = () => (
    <>
      {navLinks.map((link, index) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-sm font-medium transition-colors hover:text-accent font-mono"
        >
          <span className="text-accent mr-1.5">0{index + 1}.</span>
          {link.label}
        </Link>
      ))}
    </>
  );
  
  const MobileNavLinkContent = () => (
    <>
      {navLinks.map((link, index) => (
        <SheetClose asChild key={link.href}>
          <Link
            href={link.href}
            className="text-lg font-medium transition-colors hover:text-accent font-body text-center"
          >
             <p className="text-accent text-sm mb-1">0{index + 1}.</p>
             {link.label}
          </Link>
        </SheetClose>
      ))}
    </>
  );

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-sm shadow-lg h-20" : "bg-transparent h-24"
      )}
    >
      <div className="container mx-auto flex h-full items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-headline text-2xl font-bold transition-transform hover:scale-105">
          <CodeXml className="h-8 w-8 text-accent" />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <NavLinkContent />
           <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent/10">
            <Link href="#contact">Contact Me</Link>
          </Button>
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-accent" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-card">
              <div className="flex flex-col gap-8 pt-20 items-center">
                  <MobileNavLinkContent />
                  <SheetClose asChild>
                      <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent/10 w-full mt-4">
                          <Link href="#contact">Contact Me</Link>
                      </Button>
                  </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
