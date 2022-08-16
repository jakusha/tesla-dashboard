import { useState } from "react";
import styled from "styled-components";
import Switch from "../utilscomponents/Switch";

const AutoPilotControl = ({ setCarOptionToggle }) => {
	const [counter, setCounter] = useState(5);
	return (
		<StyledDiv>
			<button
				className="close-btn"
				onClick={() => setCarOptionToggle(false)}
			>
				<img src="./images/close-btn.svg" alt="" />
			</button>

			<button className="gear-btn">
				<img src="./images/gear.png" alt="" />
			</button>

			<p>cruise follow distance</p>
			<div className="cruise-distance">
				<button
					onClick={() =>
						setCounter(counter > 1 ? counter - 1 : counter)
					}
				>
					<img src="./images/left.png" alt="" />
				</button>
				<div className="counter">{counter}</div>
				<button onClick={() => setCounter(counter + 1)}>
					<img src="./images/right.png" alt="" />
				</button>
			</div>
			<div className="switch-control">
				<Switch switchState={true} />
				<span>autosteer</span>
			</div>

			<div className="switch-control">
				<Switch switchState={true} />
				<span>auto lane change</span>
			</div>
		</StyledDiv>
	);
};

export default AutoPilotControl;

const StyledDiv = styled.div`
	color: white;
	padding: 30px;
	padding-top: 50px;
	position: relative;

	.close-btn {
		background: none;
		border: 0;
		position: absolute;
		top: 12px;
		left: 10px;

		cursor: pointer;

		img {
			width: 25px;
		}
	}

	.gear-btn {
		background: none;
		border: 0;
		position: absolute;
		top: 16px;
		right: 10px;

		cursor: pointer;

		img {
			width: 25px;
		}
	}

	.switch-control {
		display: flex;
		gap: 16px;
		margin-bottom: 16px;
		align-items: center;

		span {
			text-transform: capitalize;
			color: white;
		}
	}
	.cruise-distance {
		display: flex;

		font-size: 1.8rem;
		margin-left: 24px;
		margin-top: 12px;
		margin-bottom: 35px;
		button {
			border: 0;
			cursor: pointer;
			background: transparent;
		}
		img {
			width: 10px;
		}
	}

	.counter {
		margin: 0 16px;
	}
`;
