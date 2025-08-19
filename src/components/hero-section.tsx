import Link from "next/link";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="w-full pt-32 pb-20 md:pt-48 md:pb-32">
      <div className="max-w-3xl">
        <p className="font-mono text-accent mb-4">Hi, my name is</p>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-7xl font-headline">
          Harsh Agarwal.
        </h1>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-400 sm:text-5xl font-headline">
          I build things for the web.
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground font-body">
          I’m a passionate Full-Stack Developer creating modern, responsive, and AI-enhanced web applications. I specialize in turning complex problems into elegant, user-friendly solutions.
        </p>
        <div className="mt-10 flex items-center gap-x-6">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="#contact">Get In Touch</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent/10">
             <a href="/Harsh-Agarwal-Resume.pdf" download>
                Download Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
