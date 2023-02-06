import { gsap } from "gsap";

const images = document.querySelectorAll(".image");
const isMobile = window.matchMedia("(max-width: 768px)").matches;

let mouse = { x: 0, y: 0 };
let velocity = { x: 0, y: 0 };
let friction = 0.9;

window.addEventListener("mousemove", (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

const loadImage = (img, index) => {
  gsap.to(img, { delay: index * 2, scale: 1, opacity: 1, duration: 2 });
};

const imageRotation = (img, speed, index) => {
  gsap.to(img, {
    delay: index * 0.6,
    y: (window.innerHeight / 2 - velocity.y) * speed,
    X: (window.innerWidth / 2 - velocity.x) * speed,
    duration: 10,
    ease: "none",
    yoyo: true,
    repeat: -1,
  });
};

const updateVelocity = (mouse, velocity, speed, friction) => {
  velocity.x += (mouse.x - window.innerWidth / 2 - velocity.x) * speed;
  velocity.y += (mouse.y - window.innerHeight / 2 - velocity.y) * speed;
  velocity.x *= friction;
  velocity.y *= friction;
  return velocity;
};

const updateImage = (img, velocity, speed) => {
  const x = -velocity.x * speed;
  const y = -velocity.y * speed;
  img.style.transform = `translateX(${x}px) translateY(${y}px)`;
};

const backgroundMotion = (img, speed, friction, mouse, velocity) => {
  velocity = updateVelocity(mouse, velocity, speed, friction);
  updateImage(img, velocity, speed);
  requestAnimationFrame(() =>
    backgroundMotion(img, speed, friction, mouse, velocity)
  );
  requestAnimationFrame(() => loadImage(img, speed));
};

images.forEach((img, index) => {
  const speed = index * 0.05 + 0.1;
  loadImage(img, index);

  if (isMobile) {
    imageRotation(img, speed, index);
  } else {
    backgroundMotion(img, speed, friction, mouse, velocity);
  }
});
