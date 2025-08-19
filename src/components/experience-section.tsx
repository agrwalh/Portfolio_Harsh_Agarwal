import { Briefcase } from "lucide-react";

const ExperienceSection = () => {
    return (
        <section id="experience" className="w-full py-24 md:py-32 bg-gray-100/50 dark:bg-gray-800/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Work Experience</h2>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed font-body">
                        My professional journey and roles I've undertaken.
                    </p>
                </div>
                <div className="relative mx-auto max-w-3xl">
                    <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border"></div>
                    <div className="relative flex items-center justify-between">
                        <div className="w-2/5"></div>
                        <div className="z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                            <Briefcase className="h-6 w-6" />
                        </div>
                        <div className="w-2/5 rounded-lg border bg-card p-6 shadow-sm">
                            <h3 className="text-xl font-bold font-headline">Web Developer Intern</h3>
                            <p className="font-semibold text-accent">Prodigy Infotech</p>
                            <p className="text-sm text-muted-foreground">Jun 2024 - Jul 2024</p>
                            <ul className="mt-4 list-disc list-inside space-y-2 text-sm font-body">
                                <li>Developed and maintained responsive web applications using modern front-end technologies.</li>
                                <li>Collaborated with the development team to implement new features and fix bugs.</li>
                                <li>Gained hands-on experience with version control systems like Git.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
