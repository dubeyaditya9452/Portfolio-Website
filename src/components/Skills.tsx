
const Skills = () => {
  const skillsData = [
    {
      category: 'Frontend Development',
      skills: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'React.js', level: 75 },
      ]
    },
    {
      category: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 75 },
        { name: 'Express.js', level: 70 },
        { name: 'MongoDB', level: 70 },
      ]
    },
    {
      category: 'Programming Languages',
      skills: [
        { name: 'JavaScript', level: 80 },
        { name: 'Java', level: 65 },
      ]
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git & GitHub', level: 75 },
        { name: 'Postman', level: 80 },
        { name: 'Problem Solving', level: 85 },
        { name: 'Communication', level: 90 },
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">My Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {skillsData.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue">{category.category}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-blue h-2.5 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-blue">Tech Stack</h3>
          <div className="flex flex-wrap gap-3">
            {['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Java', 'Git', 'GitHub', 'Postman', 'RESTful APIs'].map((tech, index) => (
              <span key={index} className="px-4 py-2 bg-blue-50 text-blue rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-5 bg-white rounded-lg shadow-md">
            <div className="text-4xl font-bold text-blue">HTML</div>
            <div className="text-gray-600 mt-2">Frontend</div>
          </div>
          <div className="text-center p-5 bg-white rounded-lg shadow-md">
            <div className="text-4xl font-bold text-blue">CSS</div>
            <div className="text-gray-600 mt-2">Styling</div>
          </div>
          <div className="text-center p-5 bg-white rounded-lg shadow-md">
            <div className="text-4xl font-bold text-blue">JS</div>
            <div className="text-gray-600 mt-2">Scripting</div>
          </div>
          <div className="text-center p-5 bg-white rounded-lg shadow-md">
            <div className="text-4xl font-bold text-blue">MERN</div>
            <div className="text-gray-600 mt-2">Full Stack</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
