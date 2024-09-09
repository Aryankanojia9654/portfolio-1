import React from 'react'
import { motion } from 'framer-motion'

const variants ={
  open:{
    transition:{
      staggeredchildren:0.1,
    }
  },
  closed:{
    transition:{
      staggeredchildren:0.05,
      staggerDirection:-1
    }
  }
}

const itemVariants = {
  open:{
    y:0,
    opacity:1
  },
  closed:{
    y:50,
    opacity:0
  }
}

function Link() {

  const items = [
    "Homepage",
    "Services",
    "Portfolio",
    "Contact",
    "About"
  ]

  

  return (
    <motion.div className='links' variants={variants} >
      {items.map((items) => {
        return <motion.a href={`#${items}`} whileHover={{scale:1.1}} whileTap={{scale:0.95}} variants={itemVariants} key={items}>{items}</motion.a>
      })}
      <a href=""></a>    
    </motion.div>
  )
}

export default Link
