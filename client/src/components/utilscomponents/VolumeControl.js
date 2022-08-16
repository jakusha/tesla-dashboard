import React, { useState } from "react";
import styled from "styled-components";

const VolumeControl = () => {
	const [count, setCount] = useState(33);
	return (
		<StyledDiv>
			<button
				onClick={() => setCount(count + 1)}
				className="increase"
			></button>
			<img src="./images/volume-up.png" alt="volume" />
			<button
				onClick={() => setCount(count - 1)}
				className="decrease"
			></button>
		</StyledDiv>
	);
};

export default VolumeControl;

const StyledDiv = styled.div`
	color: white;
	font-size: 1.6rem;
	// border: solid;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 25px;
	img {
		width: 100%;
	}
	button {
		border: 0;
		width: 18px;
		height: 18px;
		background-position: center;
		background-repeat: no-repeat;
		-position: center;
		background-repeat: no-repeat;
		cursor: pointer;
	}

	button.increase {
		background: url("./images/up.png");
		background-position: center;
		background-repeat: no-repeat;
		background-size: 18px 18px;
	}

	button.decrease {
		background: url("./images/down.png");
		background-position: center;
		background-repeat: no-repeat;
		background-size: 18px 18px;
	}
`;
