import { Link } from "react-router-dom";

const Home = () => {
	return (
		<section className="bg-primary px-4 md:px-0 py-8 my-8 text-white">
			<div className="container mx-auto">
				{/* <h1 className="text-6xl font-oswald mb-6">Welcome to LBanaira Trucking LTD</h1> */}
				<h1 className="text-7xl font-black">Let Us Give You Better Service</h1>
				<Link to="contact" className="my-12 inline-block bg-white px-4 py-2 text-primary rounded hover:bg-[#cd3700] hover:text-white transition-all font-bold">
					Contact Us
				</Link>
			</div>
		</section>
	);
};
export default Home;
