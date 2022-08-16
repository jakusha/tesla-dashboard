import { useState } from "react";
import styled from "styled-components";
import CarSide from "./components/car/CarSide";

import MainLayout from "./MainLayout";
import MapSection from "./components/map/Map";
import NavigationBar from "./components/nav/NavigationBar";

function App() {
	const [tabIndex, setTabIndex] = useState(2);

	return (
		<StyledDiv className="App">
			<MainLayout>
				<CarSide />
				<MapSection setTabIndex={setTabIndex} />
				<NavigationBar tabIndex={tabIndex} setTabIndex={setTabIndex} />
			</MainLayout>

			<span className="ebube">
				Coded by <a href="https://github.com/Bube-create/tesla-dashboard">Ebube</a>
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
`;
