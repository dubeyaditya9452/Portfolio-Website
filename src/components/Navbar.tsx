import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="text-blue font-heading font-bold text-xl">
          Aditya Dubey
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-blue transition duration-300"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1qoElrNzegy73TYKZ-PyUMQSieb4RnFk1/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue text-white px-4 py-2 rounded-md hover:bg-blue-dark transition duration-300"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="bg-blue text-white px-4 py-2 rounded-md hover:bg-blue-dark transition duration-300"
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white p-4 shadow-lg absolute w-full">
          <div className="flex flex-col space-y-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-blue transition duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://drive.google.com/file/d/1qoElrNzegy73TYKZ-PyUMQSieb4RnFk1/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue text-white px-4 py-2 rounded-md hover:bg-blue-dark transition duration-300 text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="bg-blue text-white px-4 py-2 rounded-md hover:bg-blue-dark transition duration-300 text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
