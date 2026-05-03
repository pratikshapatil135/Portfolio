import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="snap-section flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold text-purple-400">Contact Me</h2>
        <p className="text-white/60 mt-2">
          Email: pratikshapatil01312@gmail.com
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;