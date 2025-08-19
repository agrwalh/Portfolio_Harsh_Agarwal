import Image from "next/image";

const AboutSection = () => {
    return (
        <section id="about" className="w-full py-24 md:py-32">
            <div className="grid md:grid-cols-5 gap-12 items-center">
                <div className="md:col-span-3">
                    <div className="flex items-center gap-4 mb-8">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-primary">
                           About Me
                        </h2>
                        <div className="h-px flex-1 bg-border"></div>
                    </div>
                    <div className="space-y-4 text-muted-foreground text-lg">
                        <p>
                            Hello! I'm Harsh, a software developer with a deep passion for creating innovative and beautiful applications. My journey into programming began with a curiosity for how things work, and it has since evolved into a career where I can build meaningful solutions that impact users' lives.
                        </p>
                        <p>
                            I specialize in both front-end and back-end development, with a strong command of modern technologies. My goal is to write clean, efficient, and scalable code while collaborating with teams to bring ideas to life.
                        </p>
                         <p>
                            When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and staying active in the developer community.
                        </p>
                    </div>
                </div>
                <div className="md:col-span-2 relative group flex justify-center">
                    <div className="absolute inset-0 bg-accent rounded-lg transform -rotate-3 transition-transform group-hover:rotate-0 group-hover:scale-105 duration-300"></div>
                     <Image
                        src="https://placehold.co/500x500.png"
                        alt="Harsh Agarwal"
                        width={400}
                        height={400}
                        className="rounded-lg object-cover shadow-2xl z-10 aspect-square"
                        data-ai-hint="professional portrait"
                        priority
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
