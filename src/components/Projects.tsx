import { motion } from "framer-motion";

const projects = [
  {
    name: "Portfolio Website",
    desc: "Modern animated portfolio with React",
  },
  {
    name: "To-Do App",
    desc: "Task management application",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-bold mb-10">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-lg"
          >
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <p className="text-gray-400">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}