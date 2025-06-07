// hooks
import { useState } from "react";

// react router
import { NavLink, Link } from "react-router-dom";

// links
import Links from "./Links";

// assets
import mainLogo from "../assets/main-logo.webp";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
	const [nav, setNav] = useState(false);

	const handleNav = () => {
		setNav(!nav);
	};

	return (
		<header className="container mx-auto px-4">
			<div className="flex justify-between items-center h-24 container mx-auto">
				<Link to="/">
					<img src={mainLogo} alt="LBanaira Trucking LTD Logo" width={150} />
				</Link>

				<ul className="hidden md:flex">
					{Links.map((link) => (
						<NavLink key={link.id} className="text-primary hover:underline font-bold p-4 text-xl" to={link.to}>
							{link.name}
						</NavLink>
					))}
				</ul>

				<div onClick={handleNav} className="block md:hidden text-primary">
					{nav ? <AiOutlineClose size={35} /> : <AiOutlineMenu size={35} />}
				</div>

				<ul className={nav ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-primary ease-in-out duration-500" : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"}>
					<Link to="/" onClick={handleNav}>
						<img src={mainLogo} alt="LBanaira Trucking LTD Logo" />
					</Link>

					<div className="flex flex-col text-center">
						{Links.map((link) => (
							<NavLink key={link.id} className="text-white hover:bg-[#cd3700] transition-colors font-bold p-4" to={link.to} onClick={handleNav}>
								{link.name}
							</NavLink>
						))}
					</div>
				</ul>
			</div>
		</header>
	);
};
export default Header;
