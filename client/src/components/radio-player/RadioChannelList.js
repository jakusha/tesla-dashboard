import styled from "styled-components";

const RadioChannelList = ({
	channel,
	setCurrentPlaying,
	setCurrentPlayingIndex,
	currentIndex,
}) => {
	return (
		<StyledDiv
			onClick={() => {
				setCurrentPlaying({ ...channel });
				setCurrentPlayingIndex(currentIndex);
			}}
			className="channel-list"
			tabIndex={currentIndex}
		>
			<span>{channel.name}</span>
		</StyledDiv>
	);
};

export default RadioChannelList;

const StyledDiv = styled.div`
	color: white;
	padding: 12px 8px;
	border-radius: 12px;
	cursor: pointer;

	&:hover {
		opacity: 0.7;
		background-color: #0e0e0e;
	}

	&:focus {
		background-color: #0e0e0e;
	}
`;
