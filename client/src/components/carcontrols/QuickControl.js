import BrightnessSlider from "../utilscomponents/BrightnessSlider";
import styled from "styled-components";
import TabsSelector from "../utilscomponents/TabsSelector";
import Modal from "../modal/Modal";
import Switch from "../utilscomponents/Switch";
import HeadingDescription from "./HeadingDescription";

import React, { useState } from "react";

const QuickControl = ({ setCarOptionToggle }) => {
	const [modalToggle, setModalToggle] = useState(false);
	const [modalToggle2, setModalToggle2] = useState(false);

	function closeModal() {
		setModalToggle(false);
		setModalToggle2(false);
	}
	return (
		<StyledDiv>
			<button
				className="close-btn"
				onClick={() => setCarOptionToggle(false)}
			>
				<img src="./images/close-btn.svg" alt="" />
			</button>
			<div className="margin-small">
				<HeadingDescription
					imgUrl={"./images/monitor.png"}
					text={"Display Brightness"}
				/>
			</div>
			<div className="margin-small">
				<BrightnessSlider />
			</div>
			<HeadingDescription
				imgUrl={"./images/beam.png"}
				text={"Exterior Light"}
			/>
			<TabsSelector>
				<li>off</li>
				<li>parking</li>
				<li>on</li>
				<li className="active">auto</li>
			</TabsSelector>

			<button className="btn-deco margin-large">front fog</button>
			<div className="margin-small">
				<HeadingDescription
					imgUrl={"./images/settings-sliders.png"}
					text={"Adjustments"}
				/>
			</div>
			<div className="adjustment-btns">
				<button
					className="modal-btn"
					onClick={() => setModalToggle(true)}
				>
					<div>
						<img
							src="./images/side-mirror-left.png"
							alt="mirror-btn"
						/>
						<img
							src="./images/side-mirror-right.png"
							alt="mirror-btn"
						/>
					</div>
					mirrors
				</button>
				<button
					className="modal-btn"
					onClick={() => setModalToggle2(true)}
				>
					<div>
						<img
							src="./images/steering-wheel.png"
							alt="mirror-btn"
						/>
					</div>
					steering wheel
				</button>
			</div>

			<button className="btn-deco">fold mirrors</button>

			<Modal closeModal={closeModal} modalToggle={modalToggle}>
				<StyledModalChild>
					<p>
						Use the steering wheel controls to adjust your side
						mirror
					</p>

					<img
						src="./images/steering-modal.png"
						alt="steering-modal"
					/>

					<div className="toggle">
						<Switch switchState={true} />{" "}
						<span>Mirror auto fold</span>
					</div>

					<button onClick={closeModal}>done</button>
				</StyledModalChild>
			</Modal>

			<Modal closeModal={closeModal} modalToggle={modalToggle2}>
				<StyledModalChild>
					<p>
						Use the steering wheel controls to adjust your steering
						column
					</p>

					<img
						src="./images/steering-modal.png"
						alt="steering-modal"
					/>

					<button onClick={closeModal}>done</button>
				</StyledModalChild>
			</Modal>
		</StyledDiv>
	);
};

export default QuickControl;

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

	.light {
		margin-top: 12px;
	}

	.btn-deco {
		border: 1px solid white;
		padding: 6px 24px;
		background: transparent;
		border-radius: 30px;
		color: white;
		text-transform: uppercase;
		font-size: 0.8rem;
		margin-top: 12px;

		&:last-of-type {
			margin-top: 20px;
		}
	}

	.adjustment {
		margin-top: 35px;
		margin-bottom: 16px;
	}
	.adjustment-btns {
		display: flex;
		gap: 12px;
	}

	.modal-btn {
		width: 160px;
		height: 100px;
		border-radius: 16px;
		background: #383838;
		border: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 16px;
		cursor: pointer;
		color: white;
		text-transform: uppercase;
		font-size: 0.8rem;
		& > div {
			display: flex;
			gap: 25px;
		}
		img {
			width: 20px;
		}
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

const StyledModalChild = styled.div`
	width: 380px;
	p {
		color: white;
		width: 250px;
		font-size: 0.8rem;
		text-align: center;
		margin: 0 auto;
		font-weight: 500;
	}

	img {
		width: 300px;
		margin: 20px auto;
	}

	button {
		width: 100%;
		border-radius: 16px;
		padding: 8px;
		background: inherit;
		margin-bottom: 8px;
		border: 0;
		color: white;
		background: #626161;
		text-transform: uppercase;
	}

	.toggle {
		display: flex;
		gap: 16px;
		align-items: center;
		margin: 0 auto;
		width: max-content;
		margin-top: -50px;
		margin-bottom: 20px;
		text-transform: capitalize;
	}
`;
