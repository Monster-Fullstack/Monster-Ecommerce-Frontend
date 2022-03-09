export const AlertFormAni = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
    },
  },
  exit: {
    scale: 0,
    opacity: 1,
  },
};
