import "./services.scss";
import { motion } from "framer-motion";

function Services() {
  const skillsData = [
    {
      icon: <img src="src/assets/fronten.png" alt="Frontend Development icon" width="24" height="24"/>, 
      title: "Frontend Development",
      description: "HTML, CSS, JavaScript, React",
      tools: [
        {
          name: "HTML",
          imageUrl: "src/assets/HTML.png",
        },
        {
          name: "CSS",
          imageUrl: "src/assets/css.png",
        },
        {
          name: "JavaScript",
          imageUrl: "src/assets/JavaScript-logo.png",
        },
        {
          name: "React",
          imageUrl: "src/assets/React.png",
        },
      ],
    },
    {
      icon: ( 
        <svg 
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M12 2c-4.97 0-9 1.48-9 3.308v11.385c0 1.829 4.03 3.307 9 3.307s9-1.478 9-3.307v-11.385c0-1.83-4.03-3.308-9-3.308zm7 12.692c-.678.978-3.155 1.679-6.009 1.938.055-.253.009-.508.009-.762v-2.131c1.391-.275 2.462-.748 2.462-1.304s-1.071-1.029-2.462-1.304v-2.307c1.391-.275 2.462-.748 2.462-1.304s-1.071-1.029-2.462-1.304v-1.549c2.814.268 5.255 1.068 6 2.154v10.769zm-7-3.385c-4.411 0-8-1.03-8-2.308s3.589-2.308 8-2.308 8 1.03 8 2.308-3.589 2.308-8 2.308z" />
        </svg>
      ),
      title: "Backend Development",
      description: "Node.js, Express, MongoDB",
      tools: [
        {
          name: "Node.js",
          imageUrl: "src/assets/node.png",
        },
        {
          name: "Express",
          imageUrl: "src/assets/pngwing.com.png",
        },
        {
          name: "MongoDB",
          imageUrl: "src/assets/mongo.png",
        },
      ],
    },
    {
      icon: <img src="src/assets/languages.png" alt="Languages icon" width="24" height="24"/>,
      title: "Languages",
      description: "C++ , JavaScript",
      tools: [
        {
          name: "C++",
          imageUrl: "src/assets/c++.png",
        },
        {
          name: "Javascript",
          imageUrl: "src/assets/JavaScript-logo.png",
        },
      ],
    },
    // Add more skills as needed
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.section className="skills" variants={containerVariants} initial="hidden" whileInView="visible">
      <motion.div className="skills-header">
        <motion.h2 variants={itemVariants}>My Skills</motion.h2>
        <motion.p variants={itemVariants}>
          I leverage a diverse toolkit to deliver effective solutions across multiple domains, including web development and algorithmic problem solving.
        </motion.p>
      </motion.div>

      <motion.div className="skills-grid" variants={containerVariants}>
        {skillsData.map((skill, index) => (
          <motion.div className="skill-item" key={index} variants={itemVariants} whileHover={{ scale: 1.1, y: -5 }}>
            <div className="skill-icon"> 
              {skill.icon} 
            </div>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
            <div className="skill-tools">
              {skill.tools.map((tool) => (
                <div className="tool-item" key={tool.name}> 
                  <img
                    src={tool.imageUrl}
                    alt={tool.name}
                    className="tool-image"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Services;
