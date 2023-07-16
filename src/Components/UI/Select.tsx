import React, { forwardRef, useState } from "react";
import styled from "styled-components";
import { IOption } from "../../Types";

interface SelectProps {
	icon: string;
	placeholder: string;
	options: IOption[];
	errorText?: string;
	onChooseCountry: (country: string) => void;
}

export const Select = forwardRef((props: SelectProps, ref: any) => {
	const { icon, placeholder, options, onChooseCountry, errorText, ...other } = props;

	const [selectedOption, setSelectedOption] = useState("");

	const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedOption(e.target.value);
		onChooseCountry(e.target.value);
	};

	return (
		<SelectContainer className="SelectContainer">
			<SelectIcon src={icon} />
			<StyledSelect
				{...other}
				ref={ref}
				value={selectedOption}
				onChange={handleSelectChange}
				required
			>
				<option value="" disabled hidden></option>
				{options.map((el: IOption, id: number) => {
					return (
						<option key={id} value={el.name}>
							{el.name}
						</option>
					);
				})}
			</StyledSelect>
			<FloatingLabel>{placeholder}</FloatingLabel>
			<SelectError>{selectedOption ? "" : errorText}</SelectError>
			<SelectArrow src="./arrow.svg" />
		</SelectContainer>
	);
});

const SelectError = styled.div`
	position: absolute;
	bottom: -16px;
	right: 0;
	color: #da5050;
	text-align: right;
	font-size: 10px;
	font-weight: 500;
	line-height: 10px;
`;
const SelectArrow = styled.img`
	position: absolute;
	top: 15px;
	right: 15px;
`;

const SelectContainer = styled.div`
	position: relative;
	width: 300px;
	filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.3));
	background: rgba(0, 0, 0, 0.2);
	@media (max-width: 650px) {
		margin-bottom: 30px;
	}
`;
const SelectIcon = styled.img`
	position: absolute;
	top: 16px;
	left: 16px;
`;

const StyledSelect = styled.select`
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
	transition: all 0.3s;

	&:focus,
	&:valid {
		border: 1px solid #6ceec7;
		transition: all 0.3s;
		+ label {
			top: 8px;
			color: #67d9b7;
			font-size: 11px;
			transition: all 0.3s;
		}
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
