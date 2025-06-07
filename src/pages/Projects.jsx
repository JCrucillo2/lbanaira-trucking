import { motion } from "motion/react";

import { DefaultTransition } from "../utils/MotionStyles";

const Projects = () => {
	return (
		<motion.div variants={DefaultTransition} initial="hidden" animate="enter">
			<h1>Projects</h1>
		</motion.div>
	);
};
export default Projects;
