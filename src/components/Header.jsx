import { NavLink, Link } from "react-router-dom";

const Header = () => {
	return (
		<header>
			<nav>
				<h1 className="text-3xl font-bold">
					<Link to="/">LBanaira Trucking LTD</Link>
				</h1>
				<NavLink to="/">Home</NavLink>
				<NavLink to="about">About</NavLink>
			</nav>
		</header>
	);
};
export default Header;
