import { useEffect } from "react";
import styled from "styled-components";

//thanks to this awesome user
// https://codepen.io/ham47mani/pen/MWVKVJW

const TabsSelector = ({
	children,
	tabClass = "tabs",
	tabBackground = "#383838",
	tabBackgroundActive = "#626161",
}) => {
	useEffect(() => {
		//==================== Start Custom Tabs Selector ===================
		const tabsContainer = document.querySelector(`.${tabClass}`),
			tabs = tabsContainer.querySelectorAll("li"),
			selector = tabsContainer.querySelector(".selector");

		//- animationSelector function to move background
		function animationSelector() {
			let activeItem = tabsContainer.querySelector("li.active");
			selector.style.width = activeItem.offsetWidth + "px";
			selector.style.left = activeItem.offsetLeft + "px";
		}

		//- Add Events to tabs items
		tabs.forEach((tab) => {
			tab.addEventListener("click", () => {
				tabsContainer
					.querySelector("li.active")
					.classList.remove("active");
				tab.classList.add("active");
				animationSelector();
			});
		});

		//- Call animationSelector function
		animationSelector();
		//==================== End Custom Tabs Selector ===================
	}, [tabClass]);

	return (
		<StyledDiv
			tabClass={tabClass}
			tabBackground={tabBackground}
			tabBackgroundActive={tabBackgroundActive}
		>
			<nav className={tabClass}>
				<div className="selector"> </div>
				<ul>{children}</ul>
			</nav>
		</StyledDiv>
	);
};

export default TabsSelector;

const StyledDiv = styled.div`
	//--- Tabs
	.${(props) => props.tabClass} {
		padding: 0;
		background-color: white;
		box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
		border-radius: 50px;
		position: relative;
		width: max-content;
		background: ${(props) => props.tabBackground};
		// height: 20px;

		ul {
			display: flex;
			list-style-type: none;
			padding: 8px 0;
			//--- Item
			li {
				color: white;
				padding: 0 22px;
				position: relative;
				z-index: 1;
				transition: 0.3s ease-in-out;
				cursor: pointer;
				user-select: none;
				text-transform: uppercase;

				&.active {
					color: white;
				}
			}
		}
		//--- Selector
		.selector {
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;
			z-index: 1;
			border-radius: 24px;
			background: ${(props) => props.tabBackgroundActive};
			transition: 0.3s ease-in-out;
		}
	}
`;
