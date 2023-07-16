import { RefObject, forwardRef } from "react";
import styled from "styled-components";

interface InputProps {
	icon: string;
	placeholder: string;
	errorText?: string;
	type?: "number" | "text" | "password";
}

type Ref =
	| ((instance: HTMLInputElement | null) => void)
	| RefObject<HTMLInputElement>
	| null
	| undefined;

export const Input = forwardRef((props: InputProps, ref: Ref) => {
	const { icon, placeholder, errorText, type = "text", ...other } = props;

	return (
		<InputContainer className="InputContainer">
			<InputIcon src={icon} />
			<InputField ref={ref} type={type} {...other} required />
			<FloatingLabel>{placeholder}</FloatingLabel>
			<InputError>{errorText}</InputError>
		</InputContainer>
	);
});

const InputError = styled.div`
	position: absolute;
	bottom: -16px;
	right: 0;
	color: #da5050;
	text-align: right;
	font-size: 10px;
	font-weight: 500;
	line-height: 10px;
`;

const InputContainer = styled.div`
	position: relative;
	filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.3));
	background: rgba(0, 0, 0, 0.2);
	width: 300px;
	@media (max-width: 650px) {
		margin-bottom: 30px;
	}
`;
const InputIcon = styled.img`
	position: absolute;
	top: 16px;
	left: 16px;
	z-index: 5;
`;
const InputField = styled.input`
	z-index: 10;
	width: 300px;
	height: 56px;
	background: transparent;
	padding: 22px 20px 11px 50px;
	border: 1px solid #fff;
	border-radius: 3px;
	color: #e0e0e0;
	font-size: 19px;
	font-weight: 300;
	outline: none;
	transition: all.3s;
	&:focus {
		border: 1px solid #6ceec7;
		transition: all.3s;
	}
	&:valid {
		.InputContainer & {
			transition: all.3s;
			filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.3));

			background: rgba(0, 0, 0, 0.1);
		}
	}
	&:focus ~ label,
	&:valid ~ label {
		top: 8px;
		color: #67d9b7;
		font-size: 11px;
		transition: all.3s;
	}
`;

const FloatingLabel = styled.label`
	color: #e0e0e0;
	position: absolute;
	pointer-events: none;
	left: 50px;
	top: 17px;
	transition: 0.2s ease all;
	font-size: 19px;
	font-style: normal;
	font-weight: 300;
`;
