import { GraduationCap } from "lucide-react";

const EducationSection = () => {
    return (
        <section id="education" className="w-full py-24 md:py-32 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Education</h2>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed font-body">
                        My academic background and qualifications.
                    </p>
                </div>
                <div className="relative mx-auto max-w-3xl">
                    <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border"></div>
                    <div className="relative flex items-center justify-between">
                         <div className="w-2/5 rounded-lg border bg-card p-6 shadow-sm">
                            <h3 className="text-xl font-bold font-headline">Bachelor of Technology</h3>
                            <p className="font-semibold text-accent">ABES Engineering College</p>
                            <p className="text-sm text-muted-foreground">2021 - 2025</p>
                            <p className="mt-4 text-sm font-body">
                                Major in Computer Science and Engineering. Focused on core concepts of software development, algorithms, and data structures.
                            </p>
                        </div>
                        <div className="z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                            <GraduationCap className="h-6 w-6" />
                        </div>
                        <div className="w-2/5"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EducationSection;
