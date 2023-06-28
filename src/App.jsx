import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import "./App.module.scss";
import Banner from "./components/Banner/Banner";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";

function App() {
  const [cursorVariant, setCursorVariant] = useState("default");

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 100, stiffness: 800 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 25);
      cursorY.set(e.clientY - 25);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  const variants = {
    default: {
      width: 30,
      height: 30,
    },
    text: {
      width: 150,
      height: 150,
      left: -75,
      right: -75,
      top: -75,
      bottom: -75,
      borderRadius: 0,
      rotateZ: 45,
      mixBlendMode: 'difference',
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <>
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
      />
      <Banner textEnter={textEnter} textLeave={textLeave}/>
      <Projects textEnter={textEnter} textLeave={textLeave} />
      <About textEnter={textEnter} textLeave={textLeave}/>
    </>
  );
}

export default App;
