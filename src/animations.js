import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const ScrollInHook = (threshold = 0.3) => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: threshold });
  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }

  return [element, controls];
};

export const PageAnim = {
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
  hidden: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.5 },
  },
};

export const letterAnim = (hover = -8) => {
  return { y: hover };
};
