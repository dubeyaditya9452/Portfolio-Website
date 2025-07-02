
import { Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science",
      institution: "GLA University, Mathura",
      year: "2021 - 2025"
    },
    {
      degree: "Higher Secondary Education",
      institution: "Harihar Singh Academy, Varanasi",
      year: "2021"
    },
    {
      degree: "Secondary Education",
      institution: "Sunbeam Academy, Varanasi",
      year: "2019"
    }
  ];

  const certifications = [
    {
      name: "MERN Stack Development",
      issuer: "Udemy",
      year: "2024"
    },
    {
      name: "Trainee",
      issuer: "Growth Ninja",
      year: "June 2023 - July 2023"
    },
    {
      name: "HTML and CSS Certification",
      issuer: "Coding Ninjas",
      year: "2023"
    }
  ];

  return (
    <section id="education" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Education & Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <span className="bg-blue text-white p-2 rounded-md mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </span>
              Education
            </h3>
            
            <div className="space-y-6">
              {education.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="text-blue h-5 w-5" />
                    <span className="text-gray-600">{item.year}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800">{item.degree}</h4>
                  <p className="text-gray-600">{item.institution}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <span className="bg-blue text-white p-2 rounded-md mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Certifications & Training
            </h3>
            
            <div className="space-y-6">
              {certifications.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="text-blue h-5 w-5" />
                    <span className="text-gray-600">{item.year}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800">{item.name}</h4>
                  <p className="text-gray-600">{item.issuer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
