// react router
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Services from "./pages/Services";

// layout
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route index element={<Home />} />
			<Route path="about" element={<About />} />
			<Route path="contact" element={<Contact />} />
			<Route path="projects" element={<Projects />} />
			<Route path="services" element={<Services />} />
		</Route>
	)
);

const App = () => {
	return <RouterProvider router={router} />;
};
export default App;
