import styled from "styled-components";
import { Input } from "./UI/Input";
import { Select } from "./UI/Select";
import { useForm } from "react-hook-form";
import { countries } from "../Mock/Countries";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "./UI/Button";
import { Checkbox } from "./UI/Checkbox";
import { IOption } from "../Types";
import { signUpValidationSchema } from "../Utils/ValidationSchema";

export const FormComponent = () => {
	const formOptions = { resolver: yupResolver(signUpValidationSchema) };

	const {
		register,
		formState: { errors },
		setValue,
		reset,
		handleSubmit,
	} = useForm({ ...formOptions });

	const onChooseCountry = (country: string) => {
		const code = countries.find((el: IOption) => el.name === country);
		setValue("phone", code?.code ? +code.code : 0);
	};

	const onSendForm = (data: {}) => {
		alert("Your info has been sended, you can check details in console");
		console.log(data);
		reset({
			firstName: "",
			secondName: "",
			password: "",
			repeatPassword: "",
			email: "",
			agreement: false,
		});
	};

	return (
		<Wrapper noValidate onSubmit={handleSubmit(onSendForm)}>
			<ImageWrapper>
				<img src="./logo.svg" alt="logo" />
			</ImageWrapper>
			<h3>
				<a href="">Sign Up</a> and find the best place to rest while traveling
			</h3>
			<InputWrapper>
				<Input
					errorText={errors?.firstName ? String(errors?.firstName.message) : ""}
					{...register("firstName")}
					placeholder="First Name"
					icon="./user.svg"
				/>
				<Input
					errorText={errors?.secondName ? String(errors?.secondName.message) : ""}
					{...register("secondName")}
					placeholder="Second Name"
					icon="./users.svg"
				/>
			</InputWrapper>
			<InputWrapper>
				<Select
					errorText={errors?.country ? String(errors?.country.message) : ""}
					{...register("country")}
					options={countries}
					icon="./location.svg"
					placeholder="Country"
					onChooseCountry={onChooseCountry}
				/>
				<Input
					errorText={errors?.phone ? String(errors?.phone.message) : ""}
					{...register("phone")}
					placeholder="Phone"
					icon="./phone.svg"
				/>
			</InputWrapper>
			<InputWrapper>
				<Input
					errorText={errors?.password ? String(errors?.password.message) : ""}
					{...register("password")}
					placeholder="Password"
					icon="./password.svg"
					type="password"
				/>
				<Input
					errorText={errors?.repeatPassword ? String(errors?.repeatPassword.message) : ""}
					{...register("repeatPassword")}
					placeholder="Confirm Password"
					icon="./passwords.svg"
					type="password"
				/>
			</InputWrapper>
			<InputWrapper>
				<Input
					errorText={errors?.email ? String(errors?.email.message) : ""}
					{...register("email")}
					placeholder="Email"
					icon="./email.svg"
				/>
				<CheckboxWrapper>
					<Checkbox {...register("agreement")} />
				</CheckboxWrapper>
			</InputWrapper>
			<InputWrapper>
				<Button>Sign Up</Button>
			</InputWrapper>
		</Wrapper>
	);
};

const Wrapper = styled.form`
	width: 630px;
	margin-top: 10%;
	z-index: 3;

	& > h3 {
		margin-bottom: 55px;
		text-align: center;
		color: #fff;
		font-size: 24px;
		line-height: 24px;
		font-weight: 500;
		& > a {
			color: #6ceec7;
		}
	}
	@media (max-width: 650px) {
		margin-top: 5%;
		& > h3 {
			font-size: 19px;
			max-width: 330px;
			text-align: center;
			margin: 0 auto 30px;
		}
	}
`;
const ImageWrapper = styled.div`
	text-align: center;
	margin-bottom: 30px;
	@media (max-width: 650px) {
		display: none;
	}
`;
const InputWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 30px;
	@media (max-width: 650px) {
		text-align: center;
		flex-direction: column;
		margin-bottom: 0;
	}
`;
const CheckboxWrapper = styled.div`
	width: 300px;
`;
