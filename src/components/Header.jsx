// react router
import { NavLink, Link } from "react-router-dom";

// links
import Links from "./Links";

// assets
import mainLogo from "../assets/main-logo.webp";

const Header = () => {
	return (
		<header className="container mx-auto px-4">
			<nav className="md:flex md:items-center md:justify-between md:py-6">
				<Link to="/" className="md:hidden">
					<img src={mainLogo} alt="LBanaira Trucking LTD Logo" />
				</Link>

				<div className="hidden md:flex md:items-center">
					<img className="w-[7rem]" src={mainLogo} alt="LBanaira Trucking LTD Logo" />
					<p className="font-oswald text-primary text-3xl font-bold">
						<Link to="/">LBanaira Trucking LTD</Link>
					</p>
				</div>

				<div className="flex flex-row gap-5">
					{Links.map((link) => (
						<NavLink key={link.id} className="text-primary hover:underline font-bold" to={link.to}>
							{link.name}
						</NavLink>
					))}
				</div>
			</nav>
		</header>
	);
};
export default Header;
