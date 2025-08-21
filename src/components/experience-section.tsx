"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase } from "lucide-react";

const experiences = [
    {
        value: "prodigy",
        company: "Prodigy Infotech",
        role: "Web Developer Intern",
        period: "Jun 2024 - Jul 2024",
        description: [
            "Developed and maintained responsive web applications using modern front-end technologies, ensuring a seamless user experience across various devices and browsers.",
            "Collaborated with the development team to implement new features, troubleshoot issues, and perform bug fixes, contributing to an agile and dynamic workflow.",
            "Gained hands-on experience with version control systems like Git and GitHub, participating in code reviews and maintaining a clean, organized codebase.",
            "Assisted in building and optimizing web pages for performance and scalability, leading to faster load times and improved user engagement."
        ],
    },
];

const ExperienceSection = () => {
    return (
        <section id="experience" className="w-full py-24 md:py-32">
            <div className="space-y-4 text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">Where I've Worked</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed font-body">
                    My professional journey and the roles I've undertaken.
                </p>
            </div>
            <div className="mx-auto max-w-4xl">
                <Tabs defaultValue={experiences[0].value} className="flex flex-col md:flex-row gap-8">
                    <TabsList className="flex flex-col h-auto bg-transparent border-none p-0 md:w-1/4">
                        {experiences.map((exp) => (
                             <TabsTrigger key={exp.value} value={exp.value} className="w-full justify-start text-left font-semibold text-muted-foreground data-[state=active]:bg-primary/10 data-[state=active]:text-accent data-[state=active]:shadow-none !px-4 !py-3">
                                {exp.company}
                             </TabsTrigger>
                        ))}
                    </TabsList>
                    <div className="md:w-3/4">
                        {experiences.map((exp) => (
                             <TabsContent key={exp.value} value={exp.value} className="mt-0">
                                <div className="p-6 rounded-lg bg-card border-border/60">
                                    <h3 className="text-2xl font-bold font-headline text-card-foreground">{exp.role} @ <span className="text-accent">{exp.company}</span></h3>
                                    <p className="text-sm text-muted-foreground mt-1 mb-6">{exp.period}</p>
                                    <ul className="space-y-4">
                                        {exp.description.map((desc, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <span className="text-accent mt-1">&#9655;</span>
                                                <p className="text-muted-foreground">{desc}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                             </TabsContent>
                        ))}
                    </div>
                </Tabs>
            </div>
        </section>
    );
};

export default ExperienceSection;
