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
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#skills", label: "Skills" },
  ];

  const NavLinkContent = () => (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-sm font-medium transition-colors hover:text-primary font-body"
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
            className="text-lg font-medium transition-colors hover:text-primary font-body"
          >
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
        isScrolled ? "bg-background/90 backdrop-blur-sm shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-headline text-xl font-bold">
          <CodeXml className="h-8 w-8 text-primary" />
          <span>Harsh Agarwal</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <NavLinkContent />
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild className="hidden md:flex">
            <Link href="#contact">Contact Me</Link>
          </Button>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-8 pt-12 items-center">
                    <MobileNavLinkContent />
                    <SheetClose asChild>
                        <Button asChild className="w-full">
                            <Link href="#contact">Contact Me</Link>
                        </Button>
                    </SheetClose>
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
