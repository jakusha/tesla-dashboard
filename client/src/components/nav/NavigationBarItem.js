import { useState } from "react";
import styled from "styled-components";

const NavigationBarItem = ({
	background,
	activeBackground,
	activeBackgroundBlur,
	text = null,
	size = "40px",
	padding = "0px",
	setCarOptionToggle,
}) => {
	const [active, setActive] = useState(false);
	return (
		<StyledDiv
			background={background}
			activeBackground={activeBackground}
			activeBackgroundBlur={activeBackgroundBlur}
			size={size}
			padding={padding}
		>
			<button
				className={active ? "active" : null}
				onClick={() => {
					setActive(!active);
				}}
			></button>
			<span className="description">{text}</span>
		</StyledDiv>
	);
};

export default NavigationBarItem;

const StyledDiv = styled.div`
	
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: ${(props) => props.padding};
	.description {
		font-size: 0.9rem;
		padding-top: 4px;
		text-transform: uppercase;
		font-weight: 500;
		color: white;
	}
	button {
		border: 0;
		width: ${(props) => props.size};
		height: ${(props) => props.size};
		background-image: url(${(props) => props.background});
		background-color: transparent;
		background-size:${(props) => props.size} ${(props) => props.size};
		background-position: center;
		cursor: pointer;
		transition: background-image 0.4s ease-in;
		position: relative;
	}

	button.active {
		background-image: url(${(props) =>
			props.activeBackground === null
				? props.background
				: props.activeBackground});
		background-size:${(props) => props.size} ${(props) => props.size};
		filter: drop-shadow(
			0px 5px 15px ${(props) => props.activeBackgroundBlur}
		);
		background-position: center;
		
	}

	}
`;
