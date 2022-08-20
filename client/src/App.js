import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import CarSide from "./components/car/CarSide";
import MainLayout from "./MainLayout";
import MapSection from "./components/map/Map";
import NavigationBar from "./components/nav/NavigationBar";

function App() {
	const [tabIndex, setTabIndex] = useState(2);
	const instructions = useRef();
	useEffect(() => {
		setTimeout(() => {
			instructions.current.style.display = "none";
		}, 5000);
	}, []);
	return (
		<StyledDiv className="App">
			<div
				className="modal-instructions"
				ref={instructions}
				onClick={(e) => {
					e.target.style.display = "none";
				}}
			>
				<div>
					<h2>rotate device </h2>
					<img src="./images/rotate.png" alt="" />
				</div>
			</div>
			<MainLayout>
				<CarSide />
				<MapSection setTabIndex={setTabIndex} />
				<NavigationBar tabIndex={tabIndex} setTabIndex={setTabIndex} />
			</MainLayout>

			<span className="ebube">
				Coded by <a href="">Ebube</a>
			</span>
		</StyledDiv>
	);
}

export default App;

const StyledDiv = styled.div`
	min-height: 100vh;
	min-width: 100%;
	position: relative;
	display: grid;
	place-content: center;

	.ebube {
		display: inline-block;
		margin: 0 auto;
		font-size: 0.8rem;
		padding-top: 4px;
	}

	.modal-instructions {
		min-height: 100vh;
		width: 100vw;
		background-color: rgba(0, 0, 0, 0.5);
		position: absolute;
		top: 0;
		z-index: 10000;
		display: grid;
		place-content: center;
		color: #ffffff;
		text-align: center;

		img {
			width: 30px;
			margin: 0 auto;
		}
	}

	@media (min-width: 950px) {
		.modal-instructions {
			display: none;
		}
	}
`;
