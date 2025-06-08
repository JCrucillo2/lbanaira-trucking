import { motion } from "motion/react";

import { DefaultTransition } from "../utils/MotionStyles";

import { FaMapLocationDot, FaPhone, FaFacebook, FaSquareInstagram } from "react-icons/fa6";
import { IoMail, IoShareSocialSharp } from "react-icons/io5";

import { Card } from "../components/Card";
import { Link } from "react-router-dom";

const Contact = () => {
	return (
		<motion.div variants={DefaultTransition} initial="hidden" animate="enter">
			<section>
				<div className="bg-[url('/src/assets/truck-one.webp')] bg-cover bg-center h-[20rem] flex items-center justify-center">
					<h1 className="text-white font-bold text-5xl bg-primary px-16 py-4 rounded font-oswald">CONTACT</h1>
				</div>

				<div className="container mx-auto px-4 my-16 text-primary italic">
					<p className="text-center text-3xl">If you have any questions or concerns about the services we offer, please don't hesitate to contact us at your convenience.</p>
				</div>

				<div className="grid md:grid-cols-2 gap-8 px-4 my-8 container mx-auto">
					<Card
						CardTitle="Address"
						CardIcon={<FaMapLocationDot size={35} className="my-4" />}
						CardDescription={
							<Link className="text-xl" target="_blank" to="https://maps.app.goo.gl/AEu2FhiXz9XXumkx6">
								21224 58 Ave. Northwest, Edmonton, AB T6M 0H3
							</Link>
						}
					/>

					<Card CardTitle="Phone" CardIcon={<FaPhone size={35} className="my-4" />} CardDescription={<p className="text-xl">780-695-6755</p>} />

					<Card
						CardTitle="Email"
						CardIcon={<IoMail size={35} className="my-4" />}
						CardDescription={
							<Link className="text-xl" to="mailto:lbanairatrucking18@gmail.com">
								lbanairatrucking18@gmail.com
							</Link>
						}
					/>

					<Card
						CardTitle="Social Media"
						CardIcon={<IoShareSocialSharp size={35} className="my-4" />}
						CardDescription={
							<div className="flex gap-4">
								<Link className="text-xl" target="_blank" to="https://www.facebook.com/profile.php?id=100088696626793">
									<FaFacebook size={50} />
								</Link>
								<Link className="text-xl" to="https://www.instagram.com/lbanaira/">
									<FaSquareInstagram size={50} />
								</Link>
							</div>
						}
					/>
				</div>
			</section>
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2373.5584721246655!2d-113.68887112255821!3d53.49421847233254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x539f8b52471d825f%3A0x2a9535ff917b3ae1!2sLBanaira%20Trucking%20LTD!5e0!3m2!1sen!2sca!4v1749331676798!5m2!1sen!2sca" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
		</motion.div>
	);
};
export default Contact;
