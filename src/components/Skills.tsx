const Skills = () => {
  const skills = ["React", "TypeScript", "JavaScript", "HTML", "CSS"];

  return (
    <section id="skills" className="snap-section flex flex-col justify-center px-10">
      <h2 className="text-3xl font-bold text-purple-400 mb-6">Skills</h2>

      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="px-4 py-2 bg-white/5 border border-white/10 rounded-full"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;