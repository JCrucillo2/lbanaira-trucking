export const Card = ({ CardTitle, CardIcon, CardDescription }) => {
	return (
		<div className="bg-primary p-4 rounded text-white flex flex-col items-center justify-center text-center">
			<p className="font-bold text-xl">{CardTitle}</p>
			{/* <FaMapLocationDot size={35} className="my-4" /> */}
			{CardIcon}
			{CardDescription}
		</div>
	);
};
