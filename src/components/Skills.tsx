const Skills = () => {
  const skills = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
  ];

  return (
    <section
  id="skills"
  className="snap-section flex flex-col justify-center items-center px-6 bg-transparent"
>
      {/* Title */}
      <h2 className="text-4xl font-bold text-purple-400 mb-10">
        Skills
      </h2>

      {/* Skill cards */}
      <div className="flex flex-wrap justify-center gap-4 max-w-2xl bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md">
        {skills.map((skill) => (
          <div
            key={skill}
            className="px-5 py-2 rounded-full 
            bg-white/5 border border-white/10 
            text-white/70 hover:text-white 
            hover:bg-purple-600/20 
            transition duration-300"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;