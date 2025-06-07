const DefaultTransition = {
	hidden: { opacity: 0, y: -200 },
	enter: { opacity: 1, y: 0 },
};

const DefaultSample = {
	initial: { opacity: 0, x: 20 },
	whileInView: { opacity: 1, x: 0 },
	transition: { duration: 0.3 },
};

// initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}

export { DefaultTransition, DefaultSample };
