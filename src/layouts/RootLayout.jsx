import { Outlet, useLocation } from "react-router-dom";

// components
import Header from "../components/Header";
import Footer from "../components/Footer";

import { ScrollRestoration } from "react-router-dom";
import { AnimatePresence } from "motion/react";

const RootLayout = () => {
	const location = useLocation();

	return (
		<>
			<ScrollRestoration />
			<div className="root-layout font-open-sans">
				<Header />

				<AnimatePresence mode="wait" exitBeforeEnter>
					<main className="min-h-svh">
						<Outlet location={location} key={location.pathname} />
					</main>
				</AnimatePresence>

				<Footer />
			</div>
		</>
	);
};
export default RootLayout;
