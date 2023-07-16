import React, { forwardRef } from "react";
import styled from "styled-components";

interface Props {
	checked?: boolean;
	onValueChange?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Checkbox = forwardRef(({ onValueChange, checked, ...other }: Props, ref: Ref) => {
	return (
		<Label>
			<Input
				onChange={() => (onValueChange ? onValueChange(!checked) : null)}
				checked={checked}
				ref={ref}
				{...other}
				type="checkbox"
			/>
			<CustomCheckbox className="custom-checkbox"></CustomCheckbox>I agree to the
			<span> Terms & Conditions</span>
		</Label>
	);
});

const Label = styled.label`
	display: flex;
	align-items: center;
	color: #e0e0e0;
	font-family: Rubik;
	font-size: 15px;
	font-weight: 300;
	line-height: normal;
	& > span {
		color: #6ceec7;
		margin-left: 3px;
		border-bottom: 1px solid #6ceec7;
		padding-bottom: 2px;
		cursor: pointer;
	}
`;
const Input = styled.input`
	width: 0;
	opacity: 0;
	transform: translateX(-2000px);
	&:checked + .custom-checkbox {
		background: #6ceec7;
		transition: all.2s;
		&::after {
			opacity: 1;
		}
	}
`;
const CustomCheckbox = styled.span`
	width: 20px;
	height: 20px;
	border-radius: 3px;
	background: transparent;
	border: 1px solid #6ceec7;
	display: inline-block;
	margin-right: 10px;
	position: relative;
	transition: all.2s;
	&::after {
		content: "";
		left: 3px;
		top: 5px;
		position: absolute;
		width: 13px;
		height: 10px;
		background-image: url("./vector.svg");
		background-repeat: no-repeat;
		opacity: 0;
		transition: 0.1s;
	}
`;

type Ref =
	| ((instance: HTMLInputElement | null) => void)
	| React.RefObject<HTMLInputElement>
	| null
	| undefined;
