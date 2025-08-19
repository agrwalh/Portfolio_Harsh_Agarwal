import { GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EducationSection = () => {
    return (
        <section id="education" className="w-full py-24 md:py-32">
            <div className="space-y-4 text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">Education</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed font-body">
                    My academic background and qualifications.
                </p>
            </div>
            <div className="mx-auto max-w-3xl">
                <Card className="bg-card border-border/60">
                    <CardHeader>
                        <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <GraduationCap className="h-6 w-6" />
                            </div>
                            <div>
                                <CardTitle className="text-2xl font-headline">Bachelor of Technology</CardTitle>
                                <p className="font-semibold text-accent">ABES Engineering College</p>
                                <p className="text-sm text-muted-foreground">2021 - 2025</p>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className="mt-2 text-muted-foreground font-body">
                            I am pursuing a major in Computer Science and Engineering, where I have been focusing on the core concepts of software development, algorithms, and data structures. My coursework has provided me with a strong theoretical foundation, which I have applied to various practical projects. I am passionate about building efficient and scalable solutions to complex problems.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};

export default EducationSection;
