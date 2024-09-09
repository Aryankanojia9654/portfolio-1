import React, { useRef } from 'react';
import './portfolio.scss';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const items = [
    {
        id: 1,
        title: 'React Project',
        img: "https://images.pexels.com/photos/27593823/pexels-photo-27593823/free-photo-of-black-and-white-photo-of-a-building-with-balconies.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!',
    },
    {
        id: 2,
        title: 'Project 2',
        img: "https://images.pexels.com/photos/27593823/pexels-photo-27593823/free-photo-of-black-and-white-photo-of-a-building-with-balconies.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!',
    },
    {
        id: 3,
        title: 'Project 3',
        img: "https://images.pexels.com/photos/27593823/pexels-photo-27593823/free-photo-of-black-and-white-photo-of-a-building-with-balconies.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!',
    },
    {
        id: 4,
        title: 'Project 4',
        img: "https://images.pexels.com/photos/27593823/pexels-photo-27593823/free-photo-of-a-building-with-balconies.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!',
    },
];

const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({ target: ref, });
    const y = useTransform(scrollYProgress ,[0,1] , [-300 , 300]);
    
    return ( 
    <section ref={ref}>
        <div className="container">
            <div className="wrapper">
                <div className="imageContainer">
                 <img src={item.img} alt="" />
                </div>
            <motion.div className="textContainer" >
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <button>See Demo</button>
            </motion.div>
            </div>
        </div>
    </section>
    );
};

function Portfolio() {

    const ref = useRef();

    const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className='portfolio' ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div className="progressBar" style={{ scaleX }} />
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
}

export default Portfolio;
