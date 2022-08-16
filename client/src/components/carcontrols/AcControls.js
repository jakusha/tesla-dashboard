import styled from "styled-components";
import React, { useState } from "react";
import AcControlsSlider from "./AcControlsSlider";
import AcControlImages from "./AcControlImages";

const AcControls = () => {
	const [actemp, setAcTemp] = useState(3);
	return (
		<StyledDiv>
			<div className="ac-div">
				<span className="line"></span>
				<AcControlsSlider />
			</div>
			<div className="middle-ac ac-div">
				<div>
					<AcControlImages>
						<img src="./images/ventilation-heat.png" alt="" />
					</AcControlImages>
					<button className="auto-btn">Auto</button>
					<AcControlImages>
						<img src="./images/snowflake-white.png" alt="" />
					</AcControlImages>
				</div>
				<div>
					<AcControlImages>
						<img src="./images/ventilation-face.png" alt="" />
					</AcControlImages>

					<button className="auto-btn-temp">
						{" "}
						<span onClick={() => setAcTemp(actemp + 1)}>
							&#43;{" "}
						</span>{" "}
						<span>{actemp}</span>{" "}
						<span onClick={() => setAcTemp(actemp - 1)}>
							&#8722;{" "}
						</span>
					</button>
					<AcControlImages>
						<img src="./images/arrow-loop.png" alt="" />
					</AcControlImages>
				</div>
				<div>
					<AcControlImages>
						<img src="./images/ventilation-leg.png" alt="" />
					</AcControlImages>

					<img src="./images/power.png" alt="" />
					<AcControlImages>
						<img src="./images/ventilation-both.png" alt="" />
					</AcControlImages>
				</div>
			</div>
			<div className="ac-div">
				<span className="line"></span>

				<AcControlsSlider />
			</div>
		</StyledDiv>
	);
};
export default AcControls;

const StyledDiv = styled.div`
	background: #0e0e0e;
	height: 200px;
	position: relative;
	z-index: 10000;
	display: flex;
	gap: 16px;

	.ac-div {
		flex: 33%;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
	}

	.line {
		height: 100%;
		width: 2px;
		background: #545454;
		display: inline-block;
	}
	.middle-ac {
		display: flex;
		flex-direction: column;
		gap: 8px;

		padding: 8px 0;
		& > div {
			// border: solid green;
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;

			img {
				width: 30px;
				user-select: none;
				cursor: pointer;
			}
		}
	}

	.img-circle {
		height: 55px;
		width: 55px;
		display: grid;
		border: 1px solid #ffffff;
		place-content: center;
		border-radius: 100%;
		cursor: pointer;
	}
	.img-circle.active {
		background-color: #0080ff;
		border: 1px solid #0080ff;
	}

	.auto-btn {
		padding: 6px 64px;
		background-color: #0080ff;
		border: 1px solid #0080ff;
		border-radius: 16px;
		color: #ffffff;
		cursor: pointer;
	}
	.auto-btn-temp {
		background-color: #3e3e3e;
		color: #ffffff;
		border-radius: 16px;
		border: 1px solid #3e3e3e;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 32px;
		width: 160px;
		font-size: 1.5rem;
		padding: 2px 8px;
		span {
			cursor: pointer;
		}
	}
`;
