import { Link } from "react-router-dom";
import TruckOne from "../assets/truck-one.webp";
import TruckTwo from "../assets/truck-two.webp";

import { motion } from "motion/react";

import { DefaultTransition } from "../utils/MotionStyles";

const Home = () => {
	return (
		<>
			<motion.div variants={DefaultTransition} initial="hidden" animate="enter">
				<section className="bg-primary px-4 md:px-0 py-16 mb-8 text-white">
					<div className="container mx-auto">
						{/* <h1 className="text-6xl font-oswald mb-6">Welcome to LBanaira Trucking LTD</h1> */}
						<h1 className="text-7xl font-black">Let Us Give You Better Service</h1>
						<Link to="contact" className="default-button">
							Contact Us
						</Link>
					</div>
				</section>

				<section>
					<div className="container mx-auto px-4 md:px-0 my-16">
						<h2 className="text-6xl font-bold mb-6 text-center text-primary font-oswald">BEST COURIER SERVICE YOU'LL EVER NEED</h2>
						<p className="text-lg my-8 text-center max-w-4xl mx-auto">LBanaira Trucking LTD is a leading logistics company dedicated to providing top-notch transportation services. Our team of experienced professionals ensures that your goods are delivered safely and on time. We pride ourselves on our commitment to customer satisfaction and our ability to adapt to the ever-changing needs of the industry.</p>
					</div>

					<div className="md:grid md:grid-cols-2 grid-cols-1 gap-8 container mx-auto mt-8 md:mb-8">
						<img className="md:rounded" src={TruckOne} alt="Truck One" />
						<img className="md:rounded" src={TruckTwo} alt="Truck Two" />
					</div>
				</section>

				<section className="bg-primary text-white ">
					<div className="container mx-auto px-4 py-8 text-center">
						<h2 className="text-6xl font-bold">Interested in what we offer?</h2>
						<Link to="services" className="default-button">
							Click Here!
						</Link>
					</div>
				</section>

				<section className="my-8">
					<div>
						<h2 className="text-3xl font-bold mb-6 text-center text-primary font-oswald">What do customers say about LBanaira Trucking Service?</h2>
					</div>
				</section>
			</motion.div>
		</>
	);
};
export default Home;
