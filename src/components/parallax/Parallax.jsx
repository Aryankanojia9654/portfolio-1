import React, { useRef } from 'react';
import './parallax.scss';
import { motion } from 'framer-motion';
import { useScroll, useTransform } from 'framer-motion';

function Parallax({ type }) {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);



    return (
        <div
            ref={ref}
            className='parallax'
            style={{
                background: type === "services"
                    ? "linear-gradient(180deg, #111132, #0c0c1d)"
                    : "linear-gradient(180deg, #111132, #505054)"
            }}
        >
            <motion.h1 style={{ y: yText }}>
                {type === "services" ? "What I Do?" : "What I Did?"}
            </motion.h1>
            <div className='mountains'></div>
            <motion.div style = { {y: yBg , backgroundImage:  `url(${type === "services" ? "public/planets.png" : "public/sun.png"})`}} className='planets' ></motion.div>
            <motion.div style={{ x: yBg }}  className='stars'></motion.div>
        </div>
    );
}

export default Parallax;
