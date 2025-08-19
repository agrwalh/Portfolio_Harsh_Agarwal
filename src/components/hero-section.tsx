import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, FileDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="w-full py-24 md:py-32 lg:py-40 bg-gray-100/50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline text-primary">
              Harsh Agarwal
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl font-body">
              A passionate Full-Stack Developer creating modern, responsive, and AI-enhanced web applications. Turning complex problems into elegant solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="#projects">View My Work</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/Harsh-Agarwal-Resume.pdf" download>
                  <FileDown className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </div>
            <div className="flex gap-4">
              <Link href="https://github.com/harshtalks" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-8 w-8 text-foreground transition-colors hover:text-primary" />
              </Link>
              <Link href="https://www.linkedin.com/in/harsh-agarwal-0268a7252/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-8 w-8 text-foreground transition-colors hover:text-primary" />
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://placehold.co/500x500.png"
              alt="Harsh Agarwal"
              width={500}
              height={500}
              className="rounded-full object-cover shadow-2xl aspect-square"
              data-ai-hint="professional portrait"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
