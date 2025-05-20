import { Outlet } from "react-router-dom";

// components
import Header from "../components/Header";
import Footer from "../components/Footer";

const RootLayout = () => {
	return (
		<div className="root-layout font-open-sans container mx-auto">
			<Header />

			<main className="min-h-svh">
				<Outlet />
			</main>

			<Footer />
		</div>
	);
};
export default RootLayout;
