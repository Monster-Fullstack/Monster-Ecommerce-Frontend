export const menuAni = {
  hidden: {
    x: -1000,
    y: -100,
  },
  visible: {
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
    },
  },
  exit: {
    x: [100, -1000],
    transition: {
      type: "spring",
      stiffness: 120,
      ease: "easeInOut",
    },
  },
};

export const menuAni2 = {
  hidden: {
    x: 1000,
    y: -100,
  },
  visible: {
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
    },
  },
  exit: {
    x: [-100, 1000],
    transition: {
      type: "spring",
      stiffness: 120,
      ease: "easeInOut",
    },
  },
};

export const dropdownAvatarAni = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};
