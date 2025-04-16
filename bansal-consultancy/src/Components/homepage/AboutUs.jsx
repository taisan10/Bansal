import { motion } from "framer-motion";

const AboutCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-2xl px-6 py-8 mt-14 shadow-xl max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8"
    >
      {/* Icon or Image */}
      <img
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        alt="About us icon"
        className="w-24 h-24 object-contain rounded-full shadow-md border border-yellow-200"
      />

      {/* Text Content */}
      <div className="text-center md:text-left">
        <h3 className="text-2xl font-bold text-yellow-200 mb-2">About Us</h3>
        <p className="text-gray-300 text-base leading-relaxed max-w-2xl">
          At <span className="text-yellow-200">Bansal Consultancy</span>, we specialize in connecting the right talent with the right businesses. From IT to fieldwork, we bridge workforce gaps with industry-specific hiring tailored to your goals and growth. We focus on long-term partnerships and scalable staffing solutions.
        </p>

        <a
          href="/about.html"
          className="inline-block mt-4 text-sm text-yellow-200 hover:underline hover:text-yellow-200 transition duration-200"
        >
          Read more about us →
        </a>
      </div>
    </motion.div>
  );
};

export default AboutCard;
