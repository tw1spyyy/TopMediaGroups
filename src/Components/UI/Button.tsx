import { ReactNode } from "react";
import styled from "styled-components";

interface ButtonProps {
	children: ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
	return <Wrapper type="submit">{children}</Wrapper>;
};

const Wrapper = styled.button`
	padding: 15px 47px;
	color: #6ceec7;
	text-align: center;
	font-size: 19px;
	font-weight: 500;
	line-height: normal;
	border: 1px solid #6ceec7;
	border-radius: 3px;
	height: 54px;
	background: transparent;
	cursor: pointer;
	@media (max-width: 650px) {
		width: 300px;
		margin-top: 20px;
		background: #6ceec7;
		color: #000;
	}
`;
