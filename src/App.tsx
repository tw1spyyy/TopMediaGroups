import { styled } from "styled-components";
import { FormComponent } from "./Components/Form";

export const App = () => {
	return (
		<Wrapper>
			<FormComponent />
			<SwitchForm>
				If you have an account, <a href="">Log In</a>
			</SwitchForm>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	height: 100vh;
	background-image: url("./cover.jpg");
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	align-items: center;
	position: relative;
	&::after {
		content: "";
		width: 60px;
		height: 84px;
		position: absolute;
		background-image: url("./decor2.svg");
		background-repeat: no-repeat;
		left: 0px;
		top: 100px;
		@media (min-width: 650px) {
			display: none;
		}
	}
	&::before {
		content: "";
		width: 114px;
		height: 90px;
		position: absolute;
		background-image: url("./decor1.svg");
		background-repeat: no-repeat;
		right: -32px;
		top: 10px;
		@media (min-width: 650px) {
			display: none;
		}
	}
`;
const SwitchForm = styled.div`
	color: #e0e0e0;
	font-size: 15px;
	font-weight: 300;
	line-height: normal;
	margin-bottom: 30px;
	& > a {
		color: #6ceec7;
		border-bottom: 1px solid #6ceec7;
	}
	&::after {
		content: "";
		width: 107px;
		height: 107px;
		position: absolute;
		background-image: url("./decor3.svg");
		background-repeat: no-repeat;
		bottom: -18px;
		right: -28px;
		@media (min-width: 650px) {
			display: none;
		}
	}
`;
