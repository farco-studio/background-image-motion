import { gsap } from "gsap";

const cursor = document.querySelector(".cursor");
const cursorSize = document.querySelector(".cursor").offsetWidth;
const cursorMargin = cursorSize / 2;

const initCursor = () => {
    gsap.set(cursor, {
        left: `calc(50% - ${cursorMargin}px)`,
        top: `calc(50% - ${cursorMargin}px)`,        
    });
};

const customCursor = (x, y) => {
    gsap.to(cursor, {
        duration: 0.5,
        left: `${x - cursorMargin}px`,
        top: `${y - cursorMargin}px`,
        ease: "power2.out",        
    });
};

export { initCursor, customCursor };
