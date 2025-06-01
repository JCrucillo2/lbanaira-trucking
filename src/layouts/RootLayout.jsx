import { Outlet } from "react-router-dom";

// components
import Header from "../components/Header";
import Footer from "../components/Footer";

import { ScrollRestoration } from "react-router-dom";

const RootLayout = () => {
	return (
		<>
			<ScrollRestoration />
			<div className="root-layout font-open-sans">
				<Header />

				<main className="min-h-svh">
					<Outlet />
				</main>

				<Footer />
			</div>
		</>
	);
};
export default RootLayout;
