import styled from "styled-components";
import React, { useState } from "react";
const BatteryInfo = () => {
	const [current, setCurrent] = useState(3);

	return (
		<StyledDiv>
			<div className="miles-header">
				<span className="miles-header-num">999</span> <span>mi</span>
			</div>
			<div className="battery-info-footer">
				<div>
					<h3>
						{" "}
						<img src="./images/location.png" alt="" />
						charge current
					</h3>

					<button className="auto-btn-temp">
						{" "}
						<span onClick={() => setCurrent(current - 1)}>
							&#8722;{" "}
						</span>
						<span>{current}A</span>{" "}
						<span onClick={() => setCurrent(current + 1)}>
							&#43;{" "}
						</span>{" "}
					</button>
				</div>
				<div>
					<h3>
						<img src="./images/location.png" alt="" />
						scheduled depature
					</h3>

					<button>schedule</button>
				</div>
				<div className="currency">
					<h3>supercharging</h3>

					<span>$0.00</span>
				</div>
			</div>
		</StyledDiv>
	);
};

export default BatteryInfo;

const StyledDiv = styled.div`
	position: absolute;
	bottom: 0px;
	left: 0px;
	right: 0px;
	height: 120px;
	padding: 0 32px;
	padding-top: 16px;
	background: #000000;

	.miles-header {
		position: absolute;
		top: -200px;
		left: 280px;
		font-size: 1.2rem;
		.miles-header-num {
			font-size: 5rem;
		}
	}
	.battery-info-footer {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		h3 {
			display: flex;
			align-items: center;
			text-transform: capitalize;
		}

		div {
			display: flex;
			flex-direction: column;
			justify-content: center;
			gap: 8px;
		}
		img {
			width: 30px;
		}

		.currency {
			h3 {
				padding: 8px 0;
			}

			span {
				padding-top: 4px;
				font-size: 1.5rem;
			}
		}
	}

	.auto-btn-temp {
		display: flex;

		align-items: center;
		justify-content: space-between;
		gap: 32px;
		width: 160px;
		font-size: 1.3rem;
		padding: 8px;
		span {
			cursor: pointer;
		}
	}

	button {
		background-color: #3e3e3e;
		color: #ffffff;
		border-radius: 16px;
		border: 1px solid #3e3e3e;
		width: 160px;
		padding: 10px;
		font-size: 1.1rem;
	}
`;
