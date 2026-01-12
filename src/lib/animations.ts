export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true, margin: "0px 0px -100px 0px" },
};

export const fadeInDown = {
  initial: { opacity: 0, y: -30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true, margin: "0px 0px -100px 0px" },
};

export const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 0.8 },
  viewport: { once: true, margin: "0px 0px -100px 0px" },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true, margin: "0px 0px -100px 0px" },
};

export const slideInLeft = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true, margin: "0px 0px -100px 0px" },
};

export const slideInRight = {
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true, margin: "0px 0px -100px 0px" },
};

export const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: {
    staggerChildren: 0.1,
    delayChildren: 0.2,
  },
  viewport: { once: true, margin: "0px 0px -100px 0px" },
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
};

export const hoverScale = {
  whileHover: { scale: 1.05 },
  transition: { type: "spring", stiffness: 300, damping: 10 },
};

export const pulseAnimation = {
  animate: {
    opacity: [1, 0.5, 1],
    boxShadow: [
      "0 0 20px rgba(139, 92, 246, 0.3)",
      "0 0 40px rgba(139, 92, 246, 0.6)",
      "0 0 20px rgba(139, 92, 246, 0.3)",
    ],
  },
  transition: {
    duration: 3,
    repeat: Infinity,
  },
};
