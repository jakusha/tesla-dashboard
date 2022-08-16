import { useState } from "react";
import styled from "styled-components";

const BrightnessSlider = () => {
	const [brightness, setBrightness] = useState(0);
	return (
		<StyledDiv brightness={brightness}>
			{/* <span className="brightness">{brightness}%</span> */}
			<StyledInput
				brightness={brightness}
				changeHandler={(e) => setBrightness(e.target.value)}
			/>
			<div className="sun">
				<img src="./images/brightness.png" alt="brightness" />
			</div>
		</StyledDiv>
	);
};

export default BrightnessSlider;

const StyledDiv = styled.div`
	width: 400px;
	position: relative;
	width: 340px;

	transition: all 0.5s ease;

	.sun {
		position: absolute;
		right: 10px;
		bottom: 8px;
	}
	img {
		width: 20px;
	}
	.brightness {
		color: white;
		position: absolute;
		top: 2px;

		left: ${(props) => {
			let brightness = props.brightness;
			// brightness =
			// 	props.brightness < 20 ? props.brightness + 4 : props.brightness;
			// brightness = props.brightness < 10 ? 10 : props.brightness;

			// const newVal = Number((brightness * 100) / 100);
			// return `calc(${newVal - 20}% + (${30 - newVal * 0.15}px))`;
			return `0px`;
		}};
		z-index: 5;
	}

	/*********** Baseline, reset styles ***********/
	input[type="range"] {
		-webkit-appearance: none;
		appearance: none;
		background: transparent;
		cursor: pointer;
		background-color: #383838;
		border-radius: 30px;
		width: 100%;
	}

	/* Removes default focus */
	input[type="range"]:focus {
		outline: none;
	}

	/******** Chrome, Safari, Opera and Edge Chromium styles ********/
	/* slider track */
	input[type="range"]::-webkit-slider-runnable-track {
		background-color: #383838;
		border-radius: 30px;
		height: 30px;
	}

	/* slider thumb */
	input[type="range"]::-webkit-slider-thumb {
		-webkit-appearance: none; /* Override default look */
		appearance: none;
		margin-top: 0px; /* Centers thumb on the track */
		background-color: #626161;
		border-radius: 30px;
		height: 30px;
		width: 75px;
	}

	/*********** Firefox styles ***********/
	/* slider track */
	input[type="range"]::-moz-range-track {
		background-color: #383838;
		border-radius: 30px;
		height: 30px;
	}

	/* slider thumb */
	input[type="range"]::-moz-range-thumb {
		background-color: #626161;
		border: none; /*Removes extra border that FF applies*/
		border-radius: 30px;
		height: 30px;
		width: 75px;
	}
`;

const StyledInput = styled.input.attrs((props) => ({
	type: "range",
	max: 100,
	min: 0,
	value: props.brightness,
	onChange: props.changeHandler,
}))``;
