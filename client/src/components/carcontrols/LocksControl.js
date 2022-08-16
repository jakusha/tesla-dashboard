import styled from "styled-components";
import Switch from "../utilscomponents/Switch";

const LocksControl = ({ setCarOptionToggle }) => {
	return (
		<StyledDiv>
			<button
				className="close-btn"
				onClick={() => setCarOptionToggle(false)}
			>
				<img src="./images/close-btn.svg" alt="" />
			</button>

			<div className="switch-control">
				<Switch switchState={true} />
				<span>walk up unlock</span>
			</div>
			<div className="switch-control">
				<Switch />
				<span>walk away lock</span>
			</div>
			<div className="switch-control">
				<Switch />
				<span>child protection lock</span>
			</div>
			<div className="switch-control">
				<Switch switchState={true} />
				<span>unlock on park</span>
			</div>
		</StyledDiv>
	);
};
export default LocksControl;

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

	.switch-control {
		display: flex;
		gap: 16px;
		margin-bottom: 24px;
		align-items: center;

		span {
			text-transform: capitalize;
			color: white;
		}
	}
`;
