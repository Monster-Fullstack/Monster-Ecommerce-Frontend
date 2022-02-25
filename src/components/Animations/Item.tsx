export const itemsAni = {
    hidden: {
        x: -1000,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 120,
            duration: 0.2
        }
    },
    hover: {
        x: 10,
        transition: {
            ease: "easeIn",
            duration: 0.2
        }
    }
};