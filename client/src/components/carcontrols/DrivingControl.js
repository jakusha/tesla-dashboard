import styled from "styled-components";
import TabsSelector from "../utilscomponents/TabsSelector";

const DrivingControl = ({ setCarOptionToggle }) => {
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

			<p className="margin-small">Steering Mode</p>
			<div className="margin-big">
				<TabsSelector tabClass={"tabs1"}>
					<li>comfort</li>
					<li>standard</li>
					<li className="active">sport</li>
				</TabsSelector>
			</div>
			<p className="margin-small">Regenerative Breaking</p>
			<div className="margin-small">
				<TabsSelector tabClass={"tabs2"}>
					<li>standard</li>
					<li className="active">low</li>
				</TabsSelector>
			</div>
			<p className="blur-info">
				STANDARD increases range and extends battery life
			</p>
			<div className="line"></div>

			<p className="margin-small">Traction Control</p>
			<button className="margin-small btn-deco">slip start</button>
			<p className="blur-info">
				Used to help free vehicle stuck in sand, snow or mud
			</p>

			<div className="line"></div>

			<button className="margin-small btn-deco">creep</button>
			<p className="blur-info">
				Slowly move forward when brake pedal is released
			</p>
		</StyledDiv>
	);
};

export default DrivingControl;

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

	.margin-small {
		margin-bottom: 12px;
	}

	.margin-big {
		margin-bottom: 20px;
	}
	.btn-deco {
		border: 1px solid white;
		padding: 6px 24px;
		background: transparent;
		border-radius: 30px;
		color: white;
		text-transform: uppercase;
		font-size: 0.8rem;
	}

	.blur-info {
		font-size: 0.7rem;
		opacity: 0.5;
	}
	.line {
		height: 1px;
		background: white;
		opacity: 0.8;
		width: 100%;
		margin: 18px 0;
	}
`;
