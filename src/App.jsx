import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import "./App.module.scss";
import Banner from "./components/Banner/Banner";
import Projects from "./components/Projects/Projects";

function App() {
  const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 });
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      const x = e.clientX - 16;
      const y = e.clientY - 16;
      setCursorXY({ x, y });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <motion.div
        className="cursor"
        style={{
          transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0)`,
        }}
      />
      <Banner />
      <Projects />
    </>
  );
}

export default App;
