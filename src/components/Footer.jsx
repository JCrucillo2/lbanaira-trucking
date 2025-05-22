import { NavLink, Link } from "react-router-dom";

import Links from "./Links";

const Footer = () => {
	return (
		<footer className="bg-primary text-white px-4 py-6">
			<h1 className="text-4xl font-bold font-oswald">
				<Link to="/">LBanaira Trucking LTD</Link>
			</h1>

			<div className="flex flex-col gap-4 my-4">
				{Links.map((link) => (
					<NavLink key={link.id} className="hover:underline" to={link.to}>
						{link.name}
					</NavLink>
				))}
			</div>

			<p className="text-xs">&copy;{new Date().getFullYear()} LBanaira Trucking LTD</p>
		</footer>
	);
};
export default Footer;
