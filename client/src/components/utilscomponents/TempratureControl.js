import React, { useState } from "react";
import styled from "styled-components";

const TempratureControl = () => {
	const [count, setCount] = useState(33);
	return (
		<StyledDiv>
			<button
				onClick={() => setCount(count + 1)}
				className="increase"
			></button>
			<span className="counter">{count}</span>
			<button
				onClick={() => setCount(count - 1)}
				className="decrease"
			></button>
		</StyledDiv>
	);
};

export default TempratureControl;

const StyledDiv = styled.div`
	color: white;

	display: flex;
	flex-direction: column;
	align-items: center;
	width: 50px;

	.counter {
		position: relative;
		display: block;
		font-size: 1.8rem;
		line-height: 1.1;
		font-weight: 300;

		&:after {
			content: "";
			display: block;
			border-radius: 50%;
			border: 1px solid white;
			padding: 3px;
			position: absolute;
			top: 0px;
			right: -12px;
		}
	}

	button {
		border: 0;
		width: 18px;
		height: 18px;
		background-position: center;
		background-repeat: no-repeat;
		position: center;
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
