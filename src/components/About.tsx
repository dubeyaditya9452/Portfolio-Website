
import { Book, Code, User } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12 mt-12">
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="p-1 bg-gradient-to-br from-blue to-blue-light rounded-lg">
                <div className="bg-white p-6 rounded-lg">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="flex flex-col items-center bg-blue-50 p-4 rounded-lg">
                      <Code className="text-blue mb-2" />
                      <h3 className="font-medium">Web Developer</h3>
                    </div>
                    <div className="flex flex-col items-center bg-blue-50 p-4 rounded-lg">
                      <User className="text-blue mb-2" />
                      <h3 className="font-medium">Team Player</h3>
                    </div>
                    <div className="flex flex-col items-center bg-blue-50 p-4 rounded-lg">
                      <Book className="text-blue mb-2" />
                      <h3 className="font-medium">Learner</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue opacity-10 rounded-lg -z-10"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-light opacity-10 rounded-lg -z-10"></div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">I'm a passionate and aspiring Full Stack Web Developer</h3>
            <p className="text-gray-600 mb-4">
              With strong skills in HTML, CSS, JavaScript, and the MERN Stack, I enjoy building scalable web applications 
              and continuously learning new technologies. I'm known for problem-solving, teamwork, and communication skills.
            </p>
            
            <div className="space-y-4 mt-6">
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 bg-blue rounded-full flex items-center justify-center text-white text-sm mt-0.5">✓</div>
                <div>
                  <h4 className="font-medium">Problem Solver</h4>
                  <p className="text-gray-600 text-sm">I enjoy finding efficient solutions to complex problems.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 bg-blue rounded-full flex items-center justify-center text-white text-sm mt-0.5">✓</div>
                <div>
                  <h4 className="font-medium">Continuous Learner</h4>
                  <p className="text-gray-600 text-sm">Always exploring new technologies and improving my skills.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 bg-blue rounded-full flex items-center justify-center text-white text-sm mt-0.5">✓</div>
                <div>
                  <h4 className="font-medium">Team Collaborator</h4>
                  <p className="text-gray-600 text-sm">Effective communicator who works well in team environments.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
