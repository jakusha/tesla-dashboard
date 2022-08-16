import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import BatteryInfo from "../batteryinfo/BatteryInfo";
import VideoPlayer from "../videoplayer/VideoPlayer";
import TabsSelector from "../utilscomponents/TabsSelector";
import { converTimeToAMPm } from "../../utils/countrylist";
const CarSide = () => {
	const [gear, setGear] = useState("p");
	const [optionsId, setOptionsId] = useState(2);
	const [extraInfo, setExtraInfo] = useState(false);
	const videoRef = useRef();
	const [rightMode, setRightMode] = useState("");
	const [carPart, setCarPart] = useState("");
	const [carPartDefault, setCarPartDefault] = useState(true);
	useEffect(() => {
		if (extraInfo === true && rightMode === "reverse") {
			videoRef.current.setAttribute("playsinline", "");
			videoRef.current.setAttribute("autoplay", "");
			videoRef.current.setAttribute("muted", "");
			navigator.mediaDevices
				.getUserMedia({
					audio: false,
					video: {
						facingMode: "user",
					},
				})
				.then((stream) => {
					window.localStream = stream;
					videoRef.current.srcObject = stream;
				})
				.catch((err) => {
					console.log(err);
				});
		} else {
			if (videoRef.current) {
				window.localStream.getVideoTracks()[0].stop();
				videoRef.current.src = "";
			}
		}
	}, [extraInfo]);

	function closeCameraHandler() {
		setExtraInfo(false);
		window.localStream.getVideoTracks()[0].stop();
		videoRef.current.srcObject = "";
		videoRef.current.setAttribute("src", "");
	}

	return (
		<StyledDiv extraInfo={extraInfo}>
			<div className={extraInfo ? "right-stuff active" : "right-stuff"}>
				{extraInfo ? (
					<>
						<img
							src="./images/close-btn.svg"
							alt=""
							className="close-btn"
							onClick={closeCameraHandler}
						/>
						{rightMode === "reverse" ? (
							<VideoPlayer videoRef={videoRef} />
						) : null}
						{rightMode === "battery" ? <BatteryInfo /> : null}
					</>
				) : null}
			</div>
			<div className="car-symbols">
				<img src="./images/tire.png" alt="" />
				<img src="./images/seat-belt.png" alt="" />
				<img src="./images/low-beam.png" alt="" className="low-beam" />
			</div>

			<h2 style={{ transition: "all 1s ease-in" }}>{gear}</h2>
			<div className="gear-controls">
				<div className="gear-controls-selection">
					<span
						className={gear === "p" ? "active" : ""}
						onClick={() => {
							setGear("p");
							setExtraInfo(false);
						}}
					>
						p
					</span>{" "}
					<span
						className={gear === "r" ? "active" : ""}
						onClick={() => {
							setGear("r");
							setExtraInfo(!extraInfo);
							setRightMode("reverse");
						}}
					>
						r
					</span>{" "}
					<span
						className={gear === "n" ? "active" : ""}
						onClick={() => {
							setGear("n");
							setExtraInfo(false);
						}}
					>
						n
					</span>{" "}
					<span
						className={gear === "20" ? "active" : ""}
						onClick={() => {
							setGear("20");
							setExtraInfo(false);
						}}
					>
						d
					</span>
				</div>

				<span>{gear === "20" ? "MPH" : " "}</span>
				<div>
					<span className="miles">315mi</span>
					<span>
						<img
							src="./images/battery.png"
							alt="battery"
							className="battery-img"
						/>
					</span>
				</div>
			</div>

			{gear !== "20" ? <span className="model3">model 3 </span> : null}
			{gear === "20" ? (
				<div className="traffic-signs">
					<img src="./images/car-steering-wheel.png" alt="" />
					<img src="./images/speed-limit.png" alt="" />

					<img src="./images/speedometer.png" alt="" />
				</div>
			) : null}
			<div className="tesla-status-img-container">
				{gear === "20" ? (
					<img
						src="./images/drive-tesla.png"
						alt=""
						style={{ padding: "40px 0px" }}
					/>
				) : (
					<>
						<span
							className="bunnet"
							onClick={() => {
								setCarPart("bunnet");
								setCarPartDefault(!carPartDefault);
							}}
						></span>
						<span
							className="booth"
							onClick={() => {
								setCarPart("booth");
								setCarPartDefault(!carPartDefault);
							}}
						></span>

						{carPart === "booth" && carPartDefault === false ? (
							<img src="./images/park-tesla-booth.png" alt="" />
						) : null}

						{carPart === "bunnet" && carPartDefault === false ? (
							<img src="./images/park-tesla-bunnet.png" alt="" />
						) : null}

						{carPartDefault ? (
							<img src="./images/park-tesla.png" alt="" />
						) : null}
					</>
				)}
			</div>
			{optionsId !== 1 ? (
				<div className="microphone">
					<div
						className="circle-icon"
						onClick={() => {
							setExtraInfo(!extraInfo);
							setRightMode("reverse");
						}}
					></div>
					<img
						src="./images/thunder.png"
						alt="thunder"
						onClick={() => {
							setExtraInfo(!extraInfo);
							setRightMode("battery");
						}}
					/>
					<img
						src="./images/microphone.png"
						alt="microphone"
						onClick={() => setOptionsId(4)}
					/>
				</div>
			) : null}
			{optionsId === 1 ? (
				<div className="options-1">
					<div className="time">
						<span></span>
						<p>
							since{" "}
							{converTimeToAMPm(new Date().toLocaleTimeString())}
						</p>

						<img src="./images/option.png" alt="" />
					</div>
					<div className="miles">
						<div>
							<span>1.2</span>
							<br />
							<span>mi</span>
						</div>

						<div>
							<span>4</span>
							<br />
							<span>min</span>
						</div>

						<div>
							<span>270</span>
							<br />
							<span>min</span>
						</div>
					</div>
					<span className="options-1-line"></span>

					<p className="last-charge"> since last charge</p>
				</div>
			) : null}
			<div className="options">
				{optionsId === 2 ? (
					<div className="options-2">
						<span className="wind-wrap">
							<img src="./images/windshield.png" alt="" />
						</span>
						<span>Auto</span>
					</div>
				) : null}
				{optionsId === 3 ? (
					<div className="option-3">
						<div className="option-3-blue">
							<img src="./images/windshield.png" alt="" />
							<span>OFF</span>
						</div>
						<div className="option-3-tabs">
							<img
								src="./images/windshield.png"
								alt=""
								className="windshield"
							/>
							<TabsSelector>
								<li className="active">Slow</li>
								<li>fast</li>
							</TabsSelector>
						</div>
					</div>
				) : null}
				{optionsId === 4 ? (
					<div className="options-4">
						<span>
							<img src="./images/microphone.png" alt="" />
						</span>
					</div>
				) : null}
				<div className="options-spans">
					<span
						onClick={() => setOptionsId(1)}
						className={optionsId === 1 ? "active" : ""}
					></span>
					<span
						onClick={() => setOptionsId(2)}
						className={optionsId === 2 ? "active" : ""}
					></span>
					<span
						onClick={() => setOptionsId(3)}
						className={optionsId === 3 ? "active" : ""}
					></span>
				</div>
			</div>
		</StyledDiv>
	);
};

export default CarSide;

const StyledDiv = styled.div`
	position: relative;
	z-index: ${(props) => (props.extraInfo ? 1000000 : 1000)};

	.right-stuff {
		position: absolute;
		background: white;
		height: 0px;
		max-height: 0px;
		border-top-left-radius: 8px;
		border-top-right-radius: 8px;
		right: -745px;
		width: 740px;
		z-index: 1000;
		background: #0e0e0e;
		transition: max-height 0.6s ease-in;
		display: grid;
		place-content: center;
		transition: max-height 0.6s ease-in;

		.close-btn {
			position: absolute;
			top: 8px;
			left: 8px;
			width: 35px;
			cursor: pointer;
		}
	}
	.right-stuff.active {
		height: 494px;
		bottom: 0px;
		max-height: 520px;
		transition: max-height 0.6s ease-in;
	}
	height: 100%;
	color: white;
	background: #0e0e0e;
	border-top-left-radius: 8px;

	display: flex;
	flex-direction: column;
	font-size: 0.8rem;
	line-height: 1;
	color: #707070;

	.car-symbols {
		display: flex;
		padding: 4px 0;
		justify-content: center;
		gap: 32px;

		img {
			width: 25px;
		}

		.low-beam {
			justify-self: flex-end;
			display: inline-block;
		}
	}
	h2 {
		font-size: 2.5rem;
		font-weight: 700;
		line-height: 1;
		text-align: center;
		text-transform: uppercase;

		color: #ffffff;
	}
	.gear-controls {
		display: flex;

		justify-content: space-between;
		margin: 0 8px;

		border-bottom: 1px solid #979797;
		div {
			display: flex;
			align-items: center;
			gap: 8px;
		}
	}

	.gear-controls-selection {
		display: flex;
		text-transform: uppercase;

		span {
			color: #707070;
			font-weight: 700;
			cursor: pointer;
		}

		span.active {
			color: #ffffff;
		}
	}
	.battery-img {
		width: 30px;
	}
	.model3 {
		text-transform: uppercase;
		font-size: 0.8rem;
		font-weight: 700;
		margin: 0 8px;
		color: #989898;
		padding-top: 2px;
	}

	.tesla-status-img-container {
		img {
			width: 250px;
			margin: 0 auto;
		}
	}

	.microphone {
		display: flex;
		justify-content: space-between;
		padding: 0 40px;

		.circle-icon {
			width: 20px;
			height: 20px;
			border-radius: 100%;
			border: 2px solid #707070;
			cursor: pointer;
		}

		img {
			width: 20px;
			cursor: pointer;
		}
	}

	.options {
		display: flex;
		flex-direction: column;
		margin-top: auto;

		align-self: stretch;

		.options-spans {
			text-align: center;
			span {
				display: inline-block;
				width: 10px;
				height: 10px;
				border-radius: 100%;
				background: #707070;
				cursor: pointer;
				margin: 0 4px;
			}

			.active {
				background: #ffffff;
			}
		}
	}

	.option-3 {
		display: flex;
		gap: 8px;
		flex-direction: column;
		img {
			width: 20px;
		}

		.option-3-blue {
			background: #0080ff;
			width: max-content;
			padding: 12px 16px;
			border-radius: 100%;
			display: flex;
			flex-direction: column;
			margin: 0 auto;
			align-items: center;
			justify-content: center;
			color: white;
			font-size: 0.8rem;
		}

		.option-3-tabs {
			display: flex;
			align-items: center;
			justify-content: end;
			padding: 0 8px;
			padding-bottom: 4px;
			gap: 12px;
		}

		.windshield-tabs {
			justify-self: flex-end;
		}
	}

	.options-1 {
		width: 95%;
		height: 145px;
		border-radius: 16px;
		bottom: 15px;
		left: 8px;
		position: absolute;
		background: #090909;
		padding: 12px;
		box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
		.time {
			display: flex;
			align-items: center;
			justify-content: space-between;

			img {
				width: 25px;
			}
		}

		.miles {
			display: flex;

			justify-content: space-between;
			width: 80%;
			margin: 0 auto;

			div {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				line-height: 0.7;
				span:first-of-type {
					font-size: 1.3rem;
					font-weight: 700;
				}
			}
		}

		.options-1-line {
			height: 2px;
			background: #626161;
			width: 100%;
			display: inline-block;
			margin: 18px 0;
		}

		.last-charge {
			text-align: center;
		}
	}

	.options-2 {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-bottom: 12px;
		img {
			width: 25px;
		}

		font-size: 1rem;

		.wind-wrap {
			background: #626161;
			padding: 6px 16px;
			border-radius: 16px;
			width: 100px;
			display: flex;
			justify-content: center;
		}
	}

	.options-4 {
		width: 95%;
		height: 145px;
		background: white;
		border-radius: 16px;
		bottom: 15px;
		left: 8px;
		position: absolute;
		background: #090909;
		box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

		& > span {
			position: absolute;
			top: 12px;
			left: 16px;

			width: 60px;
			height: 60px;
			border-radius: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			background: #000000;
			box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
		}

		img {
			width: 35px;
		}
	}

	.bunnet {
		width: 70px;
		height: 32px;
		cursor: pointer;
		position: absolute;
		top: 135px;
		left: 133px;
	}

	.booth {
		width: 70px;
		height: 40px;
		cursor: pointer;

		position: absolute;
		top: 322px;
		left: 133px;
	}

	.traffic-signs {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 8px;
		padding-top: 6px;

		img {
			width: 25px;
		}
	}
`;
