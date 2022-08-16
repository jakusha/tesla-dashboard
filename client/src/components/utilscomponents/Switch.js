import React from "react";
import styled from "styled-components";

const Switch = ({ switchState = false }) => {
	const [on, setOn] = React.useState(switchState);
	const toggle = () => setOn(!on);

	const btnClassName = ["toggle-btn", on ? "toggle-btn-on" : "toggle-btn-off"]
		.filter(Boolean)
		.join(" ");

	return (
		<StyledDiv>
			<label aria-label={"Toggle"} style={{ display: "block" }}>
				<input
					className="toggle-input"
					type="checkbox"
					checked={on}
					onClick={toggle}
					onChange={() => {}}
					data-testid="toggle-input"
				/>
				<span className={btnClassName} />
			</label>
		</StyledDiv>
	);
};

export default Switch;

const StyledDiv = styled.div`
	.toggle-btn {
		box-sizing: initial;
		display: inline-block;
		outline: 0;
		width: 45px;
		height: 20px;
		position: relative;
		cursor: pointer;
		user-select: none;
		background: #53b5fe;
		border-radius: 4em;
		padding: 4px;
		transition: all 0.4s ease;
		// border: 2px solid #e8eae9;
	}
	.toggle-input:focus + .toggle-btn::after,
	.toggle-btn:active::after {
		box-sizing: initial;
	}
	.toggle-btn::after {
		left: 0;
		position: relative;
		display: block;
		content: "";
		width: 50%;
		height: 100%;
		border-radius: 4em;
		background: #ffffff;
		transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275),
			padding 0.3s ease, margin 0.3s ease;
		// box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1), 0 4px 0 rgba(0, 0, 0, 0.08);
	}
	.toggle-btn.toggle-btn-on::after {
		left: 50%;
	}
	.toggle-btn.toggle-btn-on {
		background: #53b5fe;
	}
	.toggle-btn.toggle-btn-on:active {
		box-shadow: none;
	}
	.toggle-btn.toggle-btn-on:active::after {
		margin-left: -1.6em;
	}
	.toggle-btn:active::after {
		padding-right: 1.6em;
	}
	.toggle-btn[disabled] {
		opacity: 0.7;
		cursor: auto;
	}
	.toggle-input {
		border: 0;
		clip: rect(0 0 0 0);
		height: 1px;
		margin: -1px;
		overflow: hidden;
		padding: 0;
		position: absolute;
		width: 1px;
		white-space: nowrap;
	}
	.toggle-btn-off {
		background: #1e1e1e;
	}
`;
