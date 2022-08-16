import styled from "styled-components";

const HeadingDescription = ({ imgUrl, text }) => {
	return (
		<StyledDiv>
			<img src={imgUrl} alt="" />
			{text}
		</StyledDiv>
	);
};

export default HeadingDescription;

const StyledDiv = styled.div`
	display: flex;
	align-items: center;
	gap: 16px;

	margin-bottom: 6px;
	img {
		width: 20px;
	}
`;
