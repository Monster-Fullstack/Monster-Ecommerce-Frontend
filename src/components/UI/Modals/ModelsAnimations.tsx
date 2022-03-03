export const TopBottom = {
  hidden: {
    y: -400,
    opacity: 0,
  },
  visible: {
    y: [-400, 200, 100],
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    y: [100, 200, -400],
    opacity: 0,
    transition: {
      opacity: {
        delay: 0.6,
      },
      duration: 1,
      ease: "easeInOut",
    },
  },
};
