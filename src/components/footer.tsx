import Link from 'next/link';
import { Github, Linkedin, CodeXml } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100/50 dark:bg-gray-800/50 py-8">
      <div className="container mx-auto px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
            <CodeXml className="h-6 w-6 text-primary" />
            <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Harsh Agarwal. All rights reserved.
            </p>
        </div>
        <div className="flex gap-4">
            <Link href="https://github.com/harshtalks" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
            <Link href="https://www.linkedin.com/in/harsh-agarwal-0268a7252/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
