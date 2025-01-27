import { motion } from "framer-motion";

const SuccessCard = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="p-8 text-center"
  >
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.2,
      }}
      className="w-24 h-24 mx-auto mb-4"
    >
      <motion.svg
        className="w-full h-full text-green-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </motion.svg>
    </motion.div>
    <motion.h3
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2"
    >
      Message Sent Successfully!
    </motion.h3>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="text-gray-600 dark:text-gray-400"
    >
      Thank you for reaching out. We'll get back to you soon!
    </motion.p>
  </motion.div>
);

export default SuccessCard;
