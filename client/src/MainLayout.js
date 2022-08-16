import React from "react";
import styled from "styled-components";
const MainLayout = ({ children }) => {
	const [car, map, navigation] = children;
	return (
		<StyledMain>
			<div className="left slidein">{car}</div>
			<div className="right slideleft">{map}</div>
			<div className="footer slideup">{navigation}</div>
		</StyledMain>
	);
};
export default MainLayout;

const StyledMain = styled.main`
	display: grid;
	grid-template-areas:
		"left right"
		"footer footer";
	min-width: 1100px;
	width: 1100px;
	margin: 0 auto;
	grid-template-columns: 1fr 2.3fr;
	grid-template-rows: 7fr 1fr;
	border: 12px solid #bbbbbb;
	border-radius: 16px;
	background-color: #bbbbbb;

	.left {
		grid-area: left;
	}
	.right {
		grid-area: right;
	}
	.footer {
		grid-area: footer;
	}

	@media (max-width: 1200px) {
		margin: 16px 0;
		position: absolute;
		top: 2%;
		left: 5%;
	}

	// .slideleft {
	// 	animation: slideleft 0.6s ease-in;
	// }

	// @keyframes slideleft {
	// 	from {
	// 		transform: translateX(50%);
	// 		opacity: 0;
	// 	}
	// 	to {
	// 		transform: translateX(0);
	// 		opacity: 1;
	// 	}
	// }

	// .slideup {
	// 	animation: slideup 0.6s ease-in;
	// }

	// @keyframes slideup {
	// 	from {
	// 		transform: translateY(50%);
	// 		opacity: 0;
	// 	}
	// 	to {
	// 		transform: translateY(0);
	// 		opacity: 1;
	// 	}
	// }
	// .slidein {
	// 	animation: slidein 0.6s ease-in;
	// }

	// @keyframes slidein {
	// 	from {
	// 		transform: translateX(-50%);
	// 		opacity: 0;
	// 	}
	// 	to {
	// 		transform: translateX(0);
	// 		opacity: 1;
	// 	}
	// }
`;
