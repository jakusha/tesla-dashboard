import styled from "styled-components";
import TabsSelector from "../utilscomponents/TabsSelector";
import BrightnessSlider from "../utilscomponents/BrightnessSlider";

const DisplayControl = ({ setCarOptionToggle }) => {
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

			<p className="margin-big">Visibility</p>
			<p className="margin-small">Display Mode</p>
			<div className="margin-big">
				<TabsSelector tabClass={"tabs1"}>
					<li>day</li>
					<li>night</li>
					<li className="active">auto</li>
				</TabsSelector>
			</div>
			<p className="margin-small">Display Brightness</p>
			<div className="margin-small">
				<BrightnessSlider />
			</div>

			<p className="blur-info margin-large">
				reduce brightness to conserve energy
			</p>

			<p className="margin-big">Units & Format</p>
			<p className="margin-small">Distance</p>

			<div className="margin-big">
				<TabsSelector tabClass={"tabs2"}>
					<li>kilometers</li>
					<li className="active">miles</li>
				</TabsSelector>
			</div>
			<p className="margin-small">Temperature</p>
			<TabsSelector tabClass={"tabs3"}>
				<li>&#8457;</li>
				<li className="active">&#8451;</li>
			</TabsSelector>
		</StyledDiv>
	);
};

export default DisplayControl;

const StyledDiv = styled.div`
	color: white;
	padding: 30px;
	padding-top: 50px;
	position: relative;

	text-transform: capitalize;
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

	.blur-info {
		font-size: 0.7rem;
		opacity: 0.5;
	}

	.margin-small {
		margin-bottom: 12px;
	}

	.margin-big {
		margin-bottom: 20px;
	}

	.margin-large {
		margin-bottom: 40px;
	}
`;
