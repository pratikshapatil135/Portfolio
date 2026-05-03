import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="snap-section min-h-screen flex items-center justify-center pt-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-6xl font-bold">
          Hi, I’m <span className="text-purple-400">Pratiksha Patil</span>
        </h1>

        <p className="text-white/60 mt-4">
          Frontend Developer • Computer Engineering Student
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;