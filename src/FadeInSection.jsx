import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import React from "react";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1, // controls stagger delay
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0 },
};

export default function FadeInSection({
  children,
  className = "",
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
    >
      {React.Children.map(children, (child) => (
        <motion.div
          variants={childVariants}
          transition={{ duration: .4, ease: "easeInOut"}}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}

export function FadeInForm({
  children,
  className = "",
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });

  return (
    <motion.form
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
    >
      {React.Children.map(children, (child) => (
        <motion.div
          variants={childVariants}
          transition={{ duration: .4, ease: "easeInOut"}}
        >
          {child}
        </motion.div>
      ))}
    </motion.form>
  );
}
