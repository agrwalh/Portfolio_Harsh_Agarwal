import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "FlashKart",
    description: "An innovative e-commerce platform with a flash sale feature, designed to provide a fast and engaging shopping experience. Built with a focus on performance and scalability to handle high-traffic sale events.",
    image: "/flashkart.png",
    imageHint: "FlashKart ecommerce screenshot",
    techStack: ["React", "Firebase", "Tailwind CSS", "Node.js"],
    liveLink: "https://flash-kart-uavz.vercel.app/",
    repoLink: "https://github.com/Harry8303/FlashKart",
  },
  {
    title: "MediChat",
    description: "A secure and real-time chat application for medical professionals to consult and collaborate effectively. Features end-to-end encryption to ensure patient data privacy and compliance with health regulations.",
    image: "/medichat.png",
    imageHint: "MediChat application screenshot",
    techStack: ["React", "Node.js", "Socket.io", "MongoDB"],
    liveLink: "https://medi-chat-brown.vercel.app/",
    repoLink: "https://github.com/agrwalh/MediChat",
  },
  {
    title: "MovieHub",
    description: "A feature-rich web application for discovering movies and TV shows, with personalized recommendations and watchlists. Integrates with TheMovieDB API to provide up-to-date information.",
    image: "/moviehub.png",
    imageHint: "MovieHub app screenshot",
    techStack: ["React", "Typescript", "TheMovieDB API", "Next.js"],
    liveLink: "https://moviehub-henna.vercel.app/",
    repoLink: "https://github.com/agrwalh/MovieHub",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="w-full py-24 md:py-32">
        <div className="space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">Some Things I've Built</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed font-body">
                A selection of projects that demonstrate my passion for web development.
            </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col bg-card border-border/60 overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/10">
              <div className="relative h-48 w-full">
                  <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover rounded-t-lg"
                  data-ai-hint={project.imageHint}
                  />
              </div>
              <CardHeader>
                <CardTitle className="font-headline text-primary-foreground">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <div>
                  <p className="font-body text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary font-mono">{tech}</Badge>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4 mt-6">
                  <Button asChild variant="ghost" className="text-muted-foreground hover:text-accent">
                    <Link href={project.repoLink} target="_blank"><Github className="mr-2 h-4 w-4" /> GitHub</Link>
                  </Button>
                  <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href={project.liveLink} target="_blank">Live Demo <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
    </section>
  );
};

export default ProjectsSection;
