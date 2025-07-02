import { Button } from "@/components/ui/button";
import { Mail, Linkedin, MapPin, Phone } from "lucide-react";
import adityaImg from "../assets/adityaImg.jpeg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 bg-gradient-to-br from-white to-blue-50">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')] bg-cover bg-center opacity-5"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 space-y-6">
            <p className="text-blue font-medium">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Aditya Dubey
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 font-medium">
              Aspiring Full Stack Web Developer
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-3 mt-4 text-gray-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue" />
                <span>Lanka, Varanasi, India</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-4">
              <a href="#contact" className="inline-block">
                <Button className="bg-blue hover:bg-blue-dark">
                  Contact Me
                </Button>
              </a>
              <a href="#projects" className="inline-block">
                <Button variant="outline" className="border-blue text-blue hover:bg-blue hover:text-white">
                  View Projects
                </Button>
              </a>
            </div>
            
            <div className="flex gap-4 mt-6">
              <a 
                href="mailto:dubeyaditya80045@gmail.com" 
                className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-blue" />
              </a>
              <a 
                href="tel:+918810921207" 
                className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Phone"
              >
                <Phone className="w-5 h-5 text-blue" />
              </a>
              <a 
                href="https://linkedin.com/in/aditya-dubey-04846727b" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-blue" />
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center mt-12 md:mt-0">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                <img
                  src={adityaImg}
                  alt="Aditya Dubey"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-3">
                <p className="text-sm font-medium text-gray-800">Full Stack Developer</p>
                <p className="text-xs text-gray-500">MERN Stack</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-blue">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
