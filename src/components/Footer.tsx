
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Aditya Dubey</h2>
            <p className="mt-2 text-gray-400">Aspiring Full Stack Web Developer</p>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="mailto:dubeyaditya80045@gmail.com" 
              className="p-2 bg-gray-800 rounded-full hover:bg-blue transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a 
              href="tel:+918810921207" 
              className="p-2 bg-gray-800 rounded-full hover:bg-blue transition-colors"
              aria-label="Phone"
            >
              <Phone className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/in/aditya-dubey-04846727b" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-blue transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-blue transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-6">
            <a href="#home" className="hover:text-blue transition-colors">Home</a>
            <a href="#about" className="hover:text-blue transition-colors">About</a>
            <a href="#skills" className="hover:text-blue transition-colors">Skills</a>
            <a href="#projects" className="hover:text-blue transition-colors">Projects</a>
            <a href="#education" className="hover:text-blue transition-colors">Education</a>
            <a href="#contact" className="hover:text-blue transition-colors">Contact</a>
          </div>
          
          <p className="mt-6">
            &copy; {currentYear} Aditya Dubey. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
