import React, { useState } from "react";
import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import TempratureControl from "../utilscomponents/TempratureControl";
import VolumeControl from "../utilscomponents/VolumeControl";
import HeatChair from "../utilscomponents/HeatChair";
import CarControlTabs from "../carcontrols/CarControlTabs";
import NavigationBarItem from "./NavigationBarItem";
import RadioMain from "../radio-player/RadioMain";
import SketchPad from "../drawingapp/SketchPad";
import AcControls from "../carcontrols/AcControls";

const NavigationBar = ({ tabIndex, setTabIndex }) => {
	const [activeCarSeat, setActiveCarSeat] = useState(false);

	const [carOptionToggle, setCarOptionToggle] = useState(false);
	const [easterCounter, setEasterCounter] = useState(0);
	return (
		<StyledDiv className="navigation-bar">
			<Tabs
				selectedIndex={tabIndex}
				onSelect={(index) => setTabIndex(index)}
				forceRenderTabPanel={true}
				// forceRender={true}
			>
				<TabList className="nav-bar-tab-list">
					<Tab>
						<div
							onClick={() => {
								setEasterCounter(easterCounter + 1);
								setCarOptionToggle(true);
							}}
						>
							<NavigationBarItem
								background={"./images/car-tesla.svg"}
								activeBackground={null}
								activeBackgroundBlur={null}
								setCarOptionToggle={setCarOptionToggle}
							/>
						</div>
					</Tab>
					<NavigationBarItem
						background={"./images/car-aircon-icon.png"}
						activeBackground={"./images/car-aircon-icon-active.png"}
						activeBackgroundBlur={"#4B9EC0"}
						size="35px"
					/>
					<NavigationBarItem
						background={"./images/car-heater-icon.png"}
						activeBackground={"./images/car-heater-icon-active.png"}
						activeBackgroundBlur={"#C5200B"}
					/>
					<HeatChair
						background={"./images/car-seat-right.png"}
						activeBackground={"./images/car-seat-right-active.png"}
						activeBackgroundBlur={"#C5200B"}
						active={activeCarSeat}
						setActive={setActiveCarSeat}
					/>
					<TempratureControl />
					<Tab>
						<NavigationBarItem
							background={"./images/ac.png"}
							activeBackground={null}
							activeBackgroundBlur={null}
							text="manual"
							size="30px"
						/>
					</Tab>
					<TempratureControl />

					<HeatChair
						background={"./images/car-seat-left.png"}
						activeBackground={"./images/car-seat-left-active.png"}
						activeBackgroundBlur={"#C5200B"}
						active={activeCarSeat}
						setActive={setActiveCarSeat}
					/>

					<Tab>
						<NavigationBarItem
							background={"./images/music-light.png"}
							activeBackground={null}
							activeBackgroundBlur={null}
							size="30px"
						/>
					</Tab>

					<NavigationBarItem
						background={"./images/phone.png"}
						activeBackground={null}
						activeBackgroundBlur={null}
						size="30px"
					/>

					<VolumeControl />
				</TabList>

				<div className="nav-bar-tab-panels">
					<TabPanel>
						{" "}
						<div
							style={{
								maxHeight: carOptionToggle ? "495px" : "0vh",
								transition: "all 0.6s ease",
							}}
						>
							{easterCounter < 4 ? (
								<CarControlTabs
									setCarOptionToggle={setCarOptionToggle}
								/>
							) : (
								<SketchPad
									setEasterCounter={setEasterCounter}
								/>
							)}
						</div>{" "}
					</TabPanel>

					<TabPanel>
						<AcControls />
					</TabPanel>
					<TabPanel>
						<RadioMain />
					</TabPanel>
				</div>
			</Tabs>
		</StyledDiv>
	);
};

export default NavigationBar;

const StyledDiv = styled.div`
	background-color: #000000;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	padding-bottom: 6px;
	.navigation {
		display: flex;
	}
	.react-tabs {
		position: relative;
	}

	.nav-bar-tab-list {
		margin: 0;
		list-style-type: none;
		padding: 0;
		display: flex;
		justify-content: center;
		gap: 55px;
		align-items: center;
	}
	.nav-bar-tab-panels {
		position: absolute;
		bottom: 67px;
		right: 0px;
		left: 0px;
		overflow: hidden;
		transition: all 0.6s ease;
	}

	.react-tabs__tab-panel {
		max-height: 0;
		overflow: hidden;
		transition: all 0.6s ease;
	}
	.react-tabs__tab-panel.react-tabs__tab-panel--selected {
		max-height: 495px;
		transition: all 0.6s ease;
	}
`;
