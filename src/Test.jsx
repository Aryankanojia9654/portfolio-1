import React, { useState } from 'react';
import './app.scss';
import { motion, stagger } from "framer-motion";

function Test() {
  const [open, setOpen] = useState(false); // This could be used to toggle visibility or styles

  // Define items directly as strings if there are no variables named item1, item2, etc.
  const items = ["item1", "item2", "item3", "item4"];

  const variants = {
    visible: (i) => ({
      opacity: 1,
      x:100,
      transition: {
        delay: i * 0.3,
      },
    }),
    hidden: {opacity: 0},
    
  };

  return (
    <div className='course'>
      <motion.ul initial="hidden" animate= "visible" variants={variants}>
        {items.map((item , i) => (
          <motion.li key={item} variants={variants} custom={i}>
            {item}
          </motion.li>
        ))}
      </motion.ul>
      
    </div>
  );
}

export default Test;
