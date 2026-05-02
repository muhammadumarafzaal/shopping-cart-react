import { motion } from 'framer-motion';

/**
 * Higher Order Component that wraps components with Framer Motion animations
 * Provides entrance animations, hover effects, and tap interactions
 */
export const withAnimations = (Component, animationConfig = {}) => {
  const {
    initial = { opacity: 0, y: 20 },
    animate = { opacity: 1, y: 0 },
    exit = { opacity: 0, y: -20 },
    transition = { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
    whileHover = { scale: 1.02 },
    whileTap = { scale: 0.98 },
    enableHover = true,
    enableTap = true,
  } = animationConfig;

  return (props) => {
    const animationProps = {
      initial,
      animate,
      exit,
      transition,
      ...(enableHover && { whileHover }),
      ...(enableTap && { whileTap }),
    };

    return (
      <motion.div {...animationProps}>
        <Component {...props} />
      </motion.div>
    );
  };
};

/**
 * Preset animation configurations
 */
export const animationPresets = {
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
  
  fadeInScale: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] },
  },
  
  slideInLeft: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
  
  slideInRight: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
  
  card: {
    whileHover: { scale: 1.03, y: -5 },
    whileTap: { scale: 0.98 },
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },
  
  button: {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: { type: 'spring', stiffness: 400, damping: 17 },
  },
};

/**
 * Stagger animation for lists
 */
export const withStaggerAnimation = (Component, itemDelay = 0.1) => {
  return (props) => {
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: itemDelay,
        },
      },
    };

    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Component {...props} />
      </motion.div>
    );
  };
};
