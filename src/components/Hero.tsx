import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="snap-section flex items-center justify-center">

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-6xl font-bold">
          Hi, I’m <span className="text-purple-400">Pratiksha</span>
        </h1>

        <p className="text-white/60 mt-4">
          Computer Engineering Student • Frontend Developer
        </p>

        <button className="mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-full">
          View Projects
        </button>
      </motion.div>

    </section>
  );
};

export default Hero;