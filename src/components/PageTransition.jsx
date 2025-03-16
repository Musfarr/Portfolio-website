import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {
  const pageVariants = {
    initial: {
      x: '-100%',
      opacity: 0
    },
    in: {
      x: 0,
      opacity: 1
    },
    exit: {
      x: '100%',
      opacity: 0
    }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
      className="page-wrapper"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
