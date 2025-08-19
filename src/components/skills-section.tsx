import { CheckCircle } from "lucide-react";

const skills = [
    "Data Structures & Algorithms",
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Bootstrap",
    "Firebase",
    "MongoDB",
    "MySQL",
    "Genkit",
    "Git & GitHub",
    "Machine Learning",
    "OOPS Concepts",
    "Authentication (OAuth, JWT)",
    "Deployment (Vercel, Netlify, AWS)"
];

const SkillsSection = () => {
  return (
    <section id="skills" className="w-full py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">My Skills</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed font-body">
            The technologies I use to build powerful and scalable web applications.
          </p>
        </div>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <li key={skill} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="font-mono text-muted-foreground">{skill}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SkillsSection;
