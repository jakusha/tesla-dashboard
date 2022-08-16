import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import styled from "styled-components";
import AutoPilotControl from "./AutoPilotControl";
import DisplayControl from "./DisplayControl";
import DrivingControl from "./DrivingControl";
import LightControl from "./LightControl";
import LocksControl from "./LocksControl";
import QuickControl from "./QuickControl";
import SafetyControls from "./SafetyControls";
import ServiceControl from "./ServiceControl";

const CarControlTabs = ({ setCarOptionToggle }) => {
	return (
		<StyledDiv>
			<Tabs className="car-control">
				<div>
					<TabPanel>
						<QuickControl setCarOptionToggle={setCarOptionToggle} />
					</TabPanel>
					<TabPanel>
						<LightControl setCarOptionToggle={setCarOptionToggle} />
					</TabPanel>
					<TabPanel>
						<LocksControl setCarOptionToggle={setCarOptionToggle} />
					</TabPanel>
					<TabPanel>
						<DisplayControl
							setCarOptionToggle={setCarOptionToggle}
						/>
					</TabPanel>
					<TabPanel>
						<DrivingControl
							setCarOptionToggle={setCarOptionToggle}
						/>
					</TabPanel>
					<TabPanel>
						<AutoPilotControl
							setCarOptionToggle={setCarOptionToggle}
						/>
					</TabPanel>
					<TabPanel>
						<SafetyControls
							setCarOptionToggle={setCarOptionToggle}
						/>
					</TabPanel>
					<TabPanel>
						<ServiceControl
							setCarOptionToggle={setCarOptionToggle}
						/>
					</TabPanel>
				</div>

				<TabList className="car-control-tab-list">
					<Tab>
						<span className="img-cont">
							<img
								src="./images/toggle.svg"
								alt=""
								className="toggle"
							/>
						</span>{" "}
						Quick Control
					</Tab>
					<Tab>
						<span className="img-cont">
							{" "}
							<img
								src="./images/bulb.svg"
								alt=""
								className="bulb"
							/>{" "}
						</span>{" "}
						Lights
					</Tab>
					<Tab>
						<span className="img-cont">
							<img src="./images/padlock.png" alt="" />{" "}
						</span>{" "}
						Locks
					</Tab>
					<Tab>
						<span className="img-cont">
							<img
								src="./images/monitor2.png"
								alt=""
								className="display"
							/>{" "}
						</span>{" "}
						Display
					</Tab>
					<Tab>
						<span className="img-cont">
							<img
								src="./images/car-tesla.svg"
								className="driving"
								alt=""
							/>{" "}
						</span>{" "}
						Driving
					</Tab>
					<Tab>
						<span className="img-cont">
							<img src="./images/steering-wheel.png" alt="" />{" "}
						</span>{" "}
						Autopilot
					</Tab>
					<Tab>
						<span className="img-cont">
							<img src="./images/exclamation.png" alt="" />{" "}
						</span>
						Safety & Security
					</Tab>
					<Tab>
						<span className="img-cont">
							<img src="./images/wrench.png" alt="" />{" "}
						</span>
						Service
					</Tab>

					<div className="glove-box">
						<div>
							<img
								src="./images/wallet.png"
								alt=""
								className="wallet"
							/>
							<img
								src="./images/down.png"
								alt=""
								className="expand"
							/>
						</div>
						<span>GloveBox</span>
					</div>
				</TabList>
			</Tabs>
		</StyledDiv>
	);
};

export default CarControlTabs;

const StyledDiv = styled.div`
	z-index: 1000;
	position: relative;
	transition: all 0.6s ease;

	height: 495px;
	max-height: 495px;
	transition: max-height 0.6s ease;
	z-index: 10000;
	position: relative;
	margin-left: 335px;
	margin-right: 8px;

	.car-control {
		display: grid;
		grid-template-columns: 2fr 1.2fr;
		height: 100%;
		background: #090909;
		border-top-left-radius: 12px;
		border-top-right-radius: 12px;
		font-size: 0.8rem;

		.car-control-tab-list {
			display: flex;
			flex-direction: column;
			border-top-right-radius: 12px;
			height: 100%;

			margin: 0;
			list-style-type: none;
			padding: 0;
			background: #161616;
			padding-top: 35px;

			li {
				cursor: pointer;
				margin-bottom: 16px;
				height: 25px;
				padding-left: 18px;

				display: flex;
				color: white;
				align-items: center;
				color: rgb(112, 112, 112);
				opacity: 0.5;
			}

			li.react-tabs__tab--selected,
			li:hover {
				opacity: 1;
				color: white;
				border: 0;
				outline: 0;
				transition: color 0.5s ease-in-out, opacity 0.5s ease-in-out;
			}

			.glove-box {
				border: 1px solid;
				padding: 8px;
				border-radius: 24px;
				margin: 0 10%;
				margin-top: 50px;
				text-align: center;
				display: flex;
				align-items: center;

				font-weight: 500;
				text-transform: uppercase;
				color: white;
				div {
					display: flex;
					align-items: center;
					flex-direction: column;
					margin: 0 16px;
					img {
						width: 12px;
					}

					.wallet {
						width: 18px;
					}
				}

				span {
					align-self: center;
					margin-left: 16px;
				}
			}

			.img-cont {
				width: 50px;
				display: inline-block;
				display: flex;
				align-items: center;
				justify-content: center;
			}
			img {
				width: 18px;
				display: inline-block;
			}

			.display {
				background: #161616;
				width: 35px;
			}

			.toggle {
				width: 25px;
			}

			.driving {
				width: 25px;
			}
			.bulb {
				width: 35px;
			}
		}

		.react-tabs__tab-panel {
			transition: none;
		}
		.react-tabs__tab-panel.react-tabs__tab-panel--selected {
			transition: none;
		}
	}

	.tab-panels {
		border: solid blue;
	}
`;
