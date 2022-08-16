import styled from "styled-components";

const HeatChair = ({
	background,
	activeBackground,
	activeBackgroundBlur,
	active = null,
	setActive = null,
}) => {
	return (
		<StyledDiv
			background={background}
			activeBackground={activeBackground}
			activeBackgroundBlur={activeBackgroundBlur}
		>
			<button
				className={active ? "active" : null}
				onClick={() => setActive(!active)}
			></button>
		</StyledDiv>
	);
};

export default HeatChair;

const StyledDiv = styled.div`
	button {
		border: 0;
		width: 30px;
		height: 30px;
		background-image: url(${(props) => props.background});
		background-color: transparent;
		background-size: 30px 30px;
		background-position: center;
		cursor: pointer;
		transition: background-image 0.2s ease-in;
	}

	button.active {
		background-image: url(${(props) =>
			props.activeBackground === null
				? props.background
				: props.activeBackground});
		background-size: 30px 30px;
		filter: drop-shadow(
			0px 5px 15px ${(props) => props.activeBackgroundBlur}
		);

		background-position: center;
	}
`;
