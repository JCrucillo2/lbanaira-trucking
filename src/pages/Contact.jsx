import { motion } from "motion/react";

import { DefaultTransition } from "../utils/MotionStyles";

const Contact = () => {
	return (
		<motion.div variants={DefaultTransition} initial="hidden" animate="enter">
			<div className="bg-[url('/src/assets/truck-one.webp')] bg-cover bg-center h-[20rem] flex items-center justify-center">
				<h1 className="text-white font-bold text-5xl bg-primary p-4 rounded font-oswald">CONTACT</h1>
			</div>
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2373.5584721246655!2d-113.68887112255821!3d53.49421847233254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x539f8b52471d825f%3A0x2a9535ff917b3ae1!2sLBanaira%20Trucking%20LTD!5e0!3m2!1sen!2sca!4v1749331676798!5m2!1sen!2sca" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
		</motion.div>
	);
};
export default Contact;
