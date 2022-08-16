import styled from "styled-components";

const Modal = ({ modalToggle, closeModal, children }) => {
	return (
		<>
			{modalToggle && (
				<ModalBackGround onClick={closeModal}>
					<ModalBody onClick={(e) => e.stopPropagation()}>
						<button onClick={closeModal} className="button-close">
							<img src="./images/close-btn.svg" alt="" />
						</button>
						{children}
					</ModalBody>
				</ModalBackGround>
			)}
		</>
	);
};
export default Modal;

const ModalBackGround = styled.div`
	position: fixed;
	z-index: 1;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: auto;
	background-color: rgba(0, 0, 0, 0.5);
	display: grid;
	place-content: center;
`;

const ModalBody = styled.div`
	background: white;
	border-radius: 8px;
	padding: 20px;
	background: #151515;
	width: max-content;
	margin-bottom: 60px;

	button {
		cursor: pointer;
	}
	.button-close {
		background: none;
		border: 0;
		img {
			width: 20px;
		}
	}
`;
