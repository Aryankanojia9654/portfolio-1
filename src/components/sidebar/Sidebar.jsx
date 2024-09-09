import React, {useState} from 'react'
import './sidebar.scss'
import { motion } from 'framer-motion'
import ToggleButtons from './toggleButton/ToggleButtons'   
import Links from './links/Link'     

function Sidebar() {
    const [open,setOpen] = useState(false)

    const variants = {
        open: {
            clipPath: 'circle(1200px at 50px 50px)',
            type: 'spring',
            stiffness: 20,
        },
        closed: {
            clipPath: 'circle(30px at 40px 40px)',
            transition: {
                delay:0,
                type: 'spring',
                stiffness: 400,
                damping: 40,
            }
        }
    }

  return (
    <motion.div className='sidebar' animate={open ? "open" : "closed"}>
        <motion.div className='bg' variants ={variants}>
            <Links />
        </motion.div>
        <div>
            <ToggleButtons setOpen = {setOpen} />
        </div>
      
    </motion.div>
  )
}

export default Sidebar
