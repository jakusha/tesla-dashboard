import { useEffect, useRef } from "react";
import styled from "styled-components";

const RadioPlayer = ({
	isPlaying,
	setIsPlaying,
	currentPlaying,
	nextSong,
	prevSong,
	status,
	stations,
	toggleExpand,
	expand,
}) => {
	const audioControl = useRef();

	useEffect(() => {
		if (isPlaying) {
			audioControl.current.play();
		} else {
			audioControl.current.pause();
		}
	}, [isPlaying, currentPlaying]);

	useEffect(() => {
		if (Object.keys(currentPlaying).length !== 0) {
			setIsPlaying(true);
		}
	}, [currentPlaying, setIsPlaying]);

	return (
		<StyledDiv>
			<div className="station-info">
				<div className="station-fm">
					<span>fm</span>
					<img src="./images/signal.png" alt="" />
				</div>

				<div>{currentPlaying.name}</div>
			</div>
			{/* <div className="station-name">
					{stations && stations.length < 1 ? (
						<div> "station not found" </div>
					) : null}
					{stations === undefined ? <div>play radio</div> : null}
				</div> */}
			<div className="controls">
				<div onClick={prevSong}>
					<img src="./images/prev-button.png" alt="prev" />
				</div>

				<div onClick={() => setIsPlaying(!isPlaying)}>
					{isPlaying ? (
						<img src="./images/pause-button.png" alt="pause" />
					) : (
						<img src="./images/play-button.png" alt="play" />
					)}
				</div>

				<div onClick={nextSong}>
					<img src="./images/next-button.png" alt="next" />
				</div>
				{/* 
				<div onClick={() => setExpand(true)}>
					<img src="./images/search.png" alt="" />
				</div> */}
				<div onClick={toggleExpand}>
					{expand ? (
						<img src="./images/expand-down.png" alt="" />
					) : (
						<img src="./images/expand-up.png" alt="" />
					)}
				</div>
			</div>

			<audio src={currentPlaying.urlResolved} ref={audioControl} />
		</StyledDiv>
	);
};

export default RadioPlayer;

const StyledDiv = styled.div`
	color: white;
	display: flex;
	// background: #0e0e0e;
	background: #090909;
	align-items: center;
	padding: 2px 8px;
	justify-content: space-between;
	border-top-left-radius: 12px;
	border-top-right-radius: 12px;

	overflow: hidden;
	.controls {
		display: flex;
		align-items: center;
		gap: 40px;
		padding: 0 16px;
		img {
			width: 20px;
			cursor: pointer;
		}
	}

	.channel-list {
		margin: 16px 0;
		border: 1px solid;
		cursor: pointer;
	}

	.channel-list:hover {
		background: lightblue;
		color: white;
	}

	.station-info {
		display: flex;
		align-items: center;
		gap: 16px;
	}
	.station-fm {
		font-size: 2.2rem;
		text-transform: uppercase;
		color: white;
		font-weight: 300;
		border: 1px solid white;
		padding: 8px;
		margin: 8px 0;
		border-radius: 4px;
		font-family: "Nunito", sans-serif;

		img {
			width: 12px;
			margin: 0 auto;
		}
	}
`;
