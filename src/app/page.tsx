import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import ProjectsSection from '@/components/projects-section';
import ExperienceSection from '@/components/experience-section';
import EducationSection from '@/components/education-section';
import SkillsSection from '@/components/skills-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';
import AiAssistant from '@/components/ai-assistant';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 pt-20">
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
      <AiAssistant />
    </div>
  );
}
