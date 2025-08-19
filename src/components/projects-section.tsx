import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "FlashKart",
    description: "An innovative e-commerce platform with a flash sale feature, designed to provide a fast and engaging shopping experience.",
    image: "https://placehold.co/600x400.png",
    imageHint: "ecommerce website",
    techStack: ["React", "Firebase", "Tailwind CSS"],
    liveLink: "#",
    repoLink: "#",
  },
  {
    title: "MediChat",
    description: "A secure and real-time chat application for medical professionals to consult and collaborate effectively.",
    image: "https://placehold.co/600x400.png",
    imageHint: "chat application",
    techStack: ["React", "Node.js", "Socket.io"],
    liveLink: "#",
    repoLink: "#",
  },
  {
    title: "MovieHub",
    description: "A feature-rich web application for discovering movies and TV shows, with personalized recommendations and watchlists.",
    image: "https://placehold.co/600x400.png",
    imageHint: "movie database",
    techStack: ["React", "Typescript", "TheMovieDB API"],
    liveLink: "#",
    repoLink: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="w-full py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">My Projects</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed font-body">
            Here are some of the projects I've worked on, showcasing my skills in web development.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
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
                <CardTitle className="font-headline">{project.title}</CardTitle>
                <CardDescription className="font-body pt-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <div>
                  <h4 className="font-semibold mb-2 font-body">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4 mt-6">
                  <Button asChild variant="outline">
                    <Link href={project.repoLink} target="_blank">GitHub</Link>
                  </Button>
                  <Button asChild>
                    <Link href={project.liveLink} target="_blank">Live Demo <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
