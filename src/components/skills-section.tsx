import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = {
    "Languages": ["JavaScript", "TypeScript", "Python", "HTML5", "CSS3"],
    "Frameworks & Libraries": ["React", "Next.js", "Node.js", "Express.js", "Tailwind CSS"],
    "Databases & Tools": ["Firebase", "MongoDB", "Git", "Genkit", "Docker"],
};

const SkillsSection = () => {
  return (
    <section id="skills" className="w-full py-24 md:py-32 bg-gray-100/50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">My Skills</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed font-body">
            The technologies I use to build powerful and scalable web applications.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, skillList]) => (
            <Card key={category} className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline">{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <Badge key={skill} className="text-sm bg-accent hover:bg-accent/90 text-accent-foreground">
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
