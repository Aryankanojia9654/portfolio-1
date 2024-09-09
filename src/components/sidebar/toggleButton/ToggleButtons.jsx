import React, { useState } from 'react';
import { motion } from 'framer-motion';

function ToggleButtons({ setOpen }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setOpen((prev) => !prev);
  };

  const topBarVariants = {
    open: {
      rotate: 45,
      originX: 0, // Set the rotation origin to the left edge
      originY: 0,
    },
    closed: {
      rotate: 0,
      originX: 0,
      originY: 0,
    },
  };

  const middleBarVariants = {
    open: {
      opacity: 0,
    },
    closed: {
      opacity: 1,
    },
  };

  const bottomBarVariants = {
    open: {
      rotate: -45,
      originX: 0,  // Set the rotation origin to the left edge
      originY: 1,  // Set the rotation origin to the bottom edge
    },
    closed: {
      rotate: 0,
      originX: 0,
      originY: 1,
    },
  };

  return (
    <button onClick={toggleMenu}>
      <svg
        fill="#000000"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="50px"
        height="22px"
        viewBox="0 0 24 24"
        xmlSpace="preserve"
      >
        <motion.path
          d="M2,5.875h20.75c1.104,0,2-0.896,2-2s-0.896-2-2-2H2c-1.104,0-2,0.896-2,2S0.896,5.875,2,5.875z"
          variants={topBarVariants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.3 }}
        />
        <motion.path
          d="M2,12.375h20.75c1.104,0,2-0.896,2-2s-0.896-2-2-2H2c-1.104,0-2,0.896-2,2S0.896,12.375,2,12.375z"
          variants={middleBarVariants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.3 }}
        />
        <motion.path
          d="M2,19.875h20.75c1.104,0,2-0.896,2-2s-0.896-2-2-2H2c-1.104,0-2,0.896-2,2S0.896,19.875,2,19.875z"
          variants={bottomBarVariants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.3 }}
        />
      </svg>
    </button>
  );
}

export default ToggleButtons;



// the below code adds the functionality to close the sidebar when clicking outside of it.

// import React, { useState, useEffect, useRef } from 'react';
// import { motion } from 'framer-motion';

// function ToggleButtons({ setOpen }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const node = useRef();

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const handleClickOutside = e => {
//     if (node.current.contains(e.target)) {
//       return;
//     }
//     setIsOpen(false);
//     setOpen(false);
//   };

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//     setOpen((prev) => !prev);
//   };

//   const topBarVariants = {
//     open: {
//       rotate: 45,
//       originX: 0,
//       originY: 0,
//     },
//     closed: {
//       rotate: 0,
//       originX: 0,
//       originY: 0,
//     },
//   };

//   const middleBarVariants = {
//     open: {
//       opacity: 0,
//     },
//     closed: {
//       opacity: 1,
//     },
//   };

//   const bottomBarVariants = {
//     open: {
//       rotate: -45,
//       originX: 0,
//       originY: 1,
//     },
//     closed: {
//       rotate: 0,
//       originX: 0,
//       originY: 1,
//     },
//   };

//   return (
//     <div ref={node}>
//       <button onClick={toggleMenu}>
//         <svg
//           fill="#000000"
//           version="1.1"
//           id="Capa_1"
//           xmlns="http://www.w3.org/2000/svg"
//           xmlnsXlink="http://www.w3.org/1999/xlink"
//           width="50px"
//           height="22px"
//           viewBox="0 0 24 24"
//           xmlSpace="preserve"
//         >
//           <motion.path
//             d="M2,5.875h20.75c1.104,0,2-0.896,2-2s-0.896-2-2-2H2c-1.104,0-2,0.896-2,2S0.896,5.875,2,5.875z"
//             variants={topBarVariants}
//             initial="closed"
//             animate={isOpen ? "open" : "closed"}
//             transition={{ duration: 0.3 }}
//           />
//           <motion.path
//             d="M2,12.375h20.75c1.104,0,2-0.896,2-2s-0.896-2-2-2H2c-1.104,0-2,0.896-2,2S0.896,12.375,2,12.375z"
//             variants={middleBarVariants}
//             initial="closed"
//             animate={isOpen ? "open" : "closed"}
//             transition={{ duration: 0.3 }}
//           />
//           <motion.path
//             d="M2,19.875h20.75c1.104,0,2-0.896,2-2s-0.896-2-2-2H2c-1.104,0-2,0.896-2,2S0.896,19.875,2,19.875z"
//             variants={bottomBarVariants}
//             initial="closed"
//             animate={isOpen ? "open" : "closed"}
//             transition={{ duration: 0.3 }}
//           />
//         </svg>
//       </button>
//     </div>
//   );
// }

// export default ToggleButtons;

