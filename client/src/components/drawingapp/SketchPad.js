import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import TabsSelector from "../utilscomponents/TabsSelector";

const SketchPad = ({ setEasterCounter }) => {
	const [brushWidth, setBrushWidth] = useState(10);
	const [pathHistory, setPathHistory] = useState([]);
	const [points, setPoints] = useState([]);
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [drawing, setDrawing] = useState(false);
	const [usingEraser, setUsingEraser] = useState(false);
	const [currentColor, setCurretColor] = useState("#000000");

	const [ctx, setCtx] = useState();

	const canvas = useRef();

	useEffect(() => {
		const ctx = canvas.current.getContext("2d");

		canvas.current.width = 730;
		canvas.current.height = 500;
		ctx.lineJoin = "round";
		ctx.lineCap = "round";

		ctx.fillStyle = "#ffffff";
		ctx.fillRect(0, 0, canvas.current.width, canvas.current.height);
		setCtx(ctx);
	}, []);

	function mouseDownHandler(e) {
		setDrawing(true);

		const mouse = oMousePos(canvas.current, e);
		setMousePosition({ ...mouse });
		setPoints([{ ...mouse }]);
	}

	function mouseMoveHandler(e) {
		if (!drawing) return;

		ctx.lineWidth = brushWidth;
		ctx.lineWidth = brushWidth;

		ctx.strokeStyle = usingEraser ? "#ffffff" : currentColor;

		const mouse = oMousePos(canvas.current, e);
		setMousePosition({ ...mouse });
		setPoints([...points, { ...mouse }]);
		ctx.fillStyle = "#ffffff";
		ctx.beginPath();
		ctx.moveTo(mousePosition.x, mousePosition.y);
		ctx.lineTo(mouse.x, mouse.y);
		ctx.stroke();
	}

	function mouseUpHandler() {
		setDrawing(false);
		if (points.length > 1) {
			setPathHistory([
				...pathHistory,
				{ color: currentColor, points: [...points] },
			]);
		}

		// setUsingEraser(false);
	}

	function drawPaths(history) {
		// delete everything
		ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
		ctx.fillStyle = "#ffffff";

		// draw all the paths in the paths array
		history.forEach((path) => {
			ctx.beginPath();
			ctx.moveTo(path.points[0].x, path.points[0].y);
			ctx.strokeStyle = path.color;
			ctx.fillStyle = "#ffffff";

			for (let i = 1; i < path.points.length; i++) {
				ctx.lineTo(path.points[i].x, path.points[i].y);
			}
			ctx.stroke();
		});
	}

	function undoSketch() {
		// remove the last path from the paths array
		setPathHistory([...pathHistory.slice(0, pathHistory.length - 1)]);
		// draw all the paths in the paths array
		drawPaths(pathHistory.slice(0, pathHistory.length - 1));
	}

	// a function to detect the mouse position
	function oMousePos(canvas, evt) {
		var ClientRect = canvas.getBoundingClientRect();
		return {
			//objeto
			x: Math.round(evt.clientX - ClientRect.left),
			y: Math.round(evt.clientY - ClientRect.top),
		};
	}

	function clearSketch() {
		ctx.fillStyle = "#ffffff";
		ctx.fillRect(0, 0, canvas.current.width, canvas.current.height);
		setPathHistory([]);
	}

	function eraseSketch() {
		setUsingEraser(true);
	}

	function publishSketch() {
		ctx.fillStyle = "#ffffff";
		let data = canvas.current.toDataURL("image/png");
		let a = document.createElement("a");
		a.href = data;
		a.download = "sketch.png";
		a.click();
	}

	return (
		<StyledDiv>
			<div>
				<TabsSelector
				// tabBackground="#e6e6e6"
				// tabBackgroundActive="#ffffff"
				>
					<li
						className="active"
						onClick={() => {
							setCurretColor(currentColor);
							if (brushWidth < 4) {
								setBrushWidth(5);
							}
							setUsingEraser(false);
						}}
						id="tab-li"
					>
						marker
					</li>

					<li onClick={eraseSketch} id="tab-li">
						eraser
					</li>
				</TabsSelector>
				<div>
					<input
						type="color"
						value={currentColor}
						onChange={(e) => {
							setPoints([]);
							setCurretColor(e.target.value);
						}}
						className="color-picker"
					/>
				</div>
				<div>
					<input
						type="number"
						value={brushWidth}
						id="brush-width"
						onChange={(e) => setBrushWidth(e.target.value)}
						min={1}
						max={100}
					/>
				</div>
				<button onClick={publishSketch}>Publish</button>
				<button onClick={undoSketch}>Undo</button>
				<button onClick={clearSketch}>Clear</button>
				<div onClick={() => setEasterCounter(0)} className="close">
					<img src="./images/close-btn.svg" alt="close" />
				</div>
			</div>
			<canvas
				ref={canvas}
				onMouseMove={mouseMoveHandler}
				onMouseUp={mouseUpHandler}
				onMouseDown={mouseDownHandler}
			></canvas>
		</StyledDiv>
	);
};

export default SketchPad;

const StyledDiv = styled.div`
	background: #ffffff;
	z-index: 10000;
	position: relative;
	margin-left: 335px;
	margin-right: 8px;

	height: 495px;
	border: 0.5px solid #000000;

	canvas {
		cursor: crosshair;

		background: #ffffff;
	}

	#tab-li {
		text-transform: capitalize;

		font-size: 0.9rem;

		padding-top: 2px;
		padding-bottom: 2px;
	}

	input {
		height: 100%;
	}
	& > div {
		background: #090909;
		z-index: 10000;

		display: flex;
		align-items: stretch;
		padding: 6px 8px;
		border-bottom: 1px solid black;
		gap: 24px;
	}

	#brush-width {
		width: 80px;
		padding-left: 25px;
	}

	button {
		background-color: #383838;
		border: 0;
		color: #ffffff;
		cursor: pointer;
		padding: 4px 12px;
		text-align: center;
		font-size: 0.9rem;
	}

	.color-picker {
		border-color: white;
		cursor: pointer;
	}

	.close {
		background-color: #383838;
		margin-left: 32px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		cursor: pointer;

		img {
			width: 30px;
		}
	}
`;
