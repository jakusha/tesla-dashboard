import styled from "styled-components";
import React, { useState, useRef } from "react";

const AcControlsSlider = () => {
	const [brightness, setBrightness] = useState(50);
	const [isDown, setIsDown] = useState(false);
	const ele = useRef();
	const parentEle = useRef();

	function mouseUpHandler() {
		setIsDown(false);
	}
	function mouseDownHandler() {
		setIsDown(true);
	}
	function mouseMoveHandler(e) {
		if (!isDown) return;
		if (isDown) {
			const clientRect = parentEle.current.getBoundingClientRect();
			let res = Math.round(e.clientY - clientRect.top);
			if (res < 0) {
				res = 5;
			} else if (res > 160) {
				res = 170;
			}
			ele.current.style.top = res + "px";
		}
	}
	return (
		<StyledDiv>
			<div
				onMouseMove={mouseMoveHandler}
				onMouseUp={mouseUpHandler}
				className="acc"
				ref={parentEle}
			>
				<div className="accs" onMouseDown={mouseDownHandler} ref={ele}>
					<StyledInput
						brightness={brightness}
						changeHandler={(e) => setBrightness(e.target.value)}
					/>
				</div>
			</div>
		</StyledDiv>
	);
};

export default AcControlsSlider;

const StyledDiv = styled.div`
	height: 100%;

	.acc {
		height: 100%;
		width: 100%;
		// border: solid blue;
	}

	.accs {
		position: absolute;
		top: 100px;
		left: 0;
		// background: blue;
		width: 100%;
		// border: solid red;
	}

	/*********** Baseline, reset styles ***********/
	input[type="range"] {
		-webkit-appearance: none;
		appearance: none;
		background: transparent;
		cursor: pointer;
		// background-color: #383838;
		// border-radius: 30px;
		width: 100%;
	}

	/* Removes default focus */
	input[type="range"]:focus {
		outline: none;
	}

	/******** Chrome, Safari, Opera and Edge Chromium styles ********/
	/* slider track */
	input[type="range"]::-webkit-slider-runnable-track {
		background-color: #000000;
		// border-radius: 30px;
		height: 10px;
		border: 1px solid #ffffff;
	}

	/* slider thumb */
	input[type="range"]::-webkit-slider-thumb {
		-webkit-appearance: none; /* Override default look */
		appearance: none;
		margin-top: -10px; /* Centers thumb on the track */
		background-color: #626161;
		border-radius: 30px;
		height: 30px;
		width: 75px;
	}

	/*********** Firefox styles ***********/
	/* slider track */
	input[type="range"]::-moz-range-track {
		background-color: #000000;
		// border-radius: 30px;
		height: 10px;
		border: 1px solid #ffffff;
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
