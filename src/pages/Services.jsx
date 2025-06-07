import { motion } from "motion/react";

import { DefaultTransition } from "../utils/MotionStyles";

const Services = () => {
	return (
		<motion.div variants={DefaultTransition} initial="hidden" animate="enter">
			<h1>Services</h1>
		</motion.div>
	);
};
export default Services;
