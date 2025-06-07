import { motion } from "motion/react";

import { DefaultTransition } from "../utils/MotionStyles";

const About = () => {
	return (
		<motion.div variants={DefaultTransition} initial="hidden" animate="enter">
			<h1>About</h1>
		</motion.div>
	);
};
export default About;
