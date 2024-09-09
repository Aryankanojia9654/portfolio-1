import React from 'react';
import './hero.scss';
import { motion } from 'framer-motion';

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  }
};

const scrollButtonVariants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: [10, 0, 10], // subtle up and down motion
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 2,
    }
  }
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-100%",  // Assuming you want to slide the text completely out of view
    transition: {
      repeat: Infinity,
      duration: 40,
      ease: "linear"
    },
  }
};

function Hero() {
  return (
    <div className='hero'>
      <div className="wrapper">
        <motion.div className='textContainer' variants={textVariants} initial="initial" animate="animate">
          <motion.h2 variants={textVariants}>ARYAN KANOJIA</motion.h2>
          <motion.h1 variants={textVariants}>Web Developer & DSA Enthusiast</motion.h1>
          <div className='buttons'>
            <motion.button variants={textVariants}>See the Latest Works</motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </div>
          <motion.div>
            <motion.img className='mouse' src="public/scroll.png" alt="Scroll" 
            variants={scrollButtonVariants} initial="initial" animate="animate" />
          </motion.div>
        </motion.div>
      </div>

      <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
        React Developer and Competitive Programmer
      </motion.div>

      <div className="imageContainer">
        <img src="public/pixelcut-export.png" alt="" height={"1080px"} />
      </div>
    </div>
  );
}

export default Hero;
