import React from "react";
import styled from "styled-components";
const VideoPlayer = ({ videoRef }) => {
	return (
		<div>
			<StyledVideo ref={videoRef}></StyledVideo>
		</div>
	);
};

export default VideoPlayer;

const StyledVideo = styled.video`
	height: 500px;
	width: 600px;
`;
