import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
    {
        title: "Frontend Development",
        skills: ["React", "Next.js", "JavaScript (ES6+)", "TypeScript", "HTML", "CSS", "Tailwind CSS", "Bootstrap"]
    },
    {
        title: "Backend Development",
        skills: ["Node.js", "Express.js", "Firebase", "MongoDB", "MySQL"]
    },
    {
        title: "Programming & Concepts",
        skills: ["Data Structures & Algorithms", "OOPS Concepts", "Git & GitHub", "REST APIs"]
    },
    {
        title: "AI/ML",
        skills: ["Genkit", "Machine Learning"]
    },
    {
        title: "Tools & Deployment",
        skills: ["Vercel", "Netlify", "AWS", "Authentication (OAuth, JWT)"]
    }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="w-full py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">My Skills</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed font-body">
            The technologies I use to build powerful and scalable web applications.
          </p>
        </div>
        <div className="grid gap-8">
            {skillCategories.map((category) => (
                 <Card key={category.title} className="bg-card border-border/60">
                    <CardHeader>
                        <CardTitle className="font-headline text-xl text-primary-foreground">{category.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                         <div className="flex flex-wrap gap-3">
                            {category.skills.map((skill) => (
                                <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary font-mono text-sm py-1 px-3 rounded-full">
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    </CardContent>
                 </Card>
            ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
