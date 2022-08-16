import { useState } from "react";

const AcControlImages = ({ children }) => {
	const [active, setActive] = useState(false);
	return (
		<span
			className={active ? "img-circle active" : "img-circle"}
			onClick={() => setActive(!active)}
		>
			{children}
		</span>
	);
};

export default AcControlImages;
