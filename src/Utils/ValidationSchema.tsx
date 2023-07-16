import * as Yup from "yup";

const err = "This field is required";

export const signUpValidationSchema = Yup.object().shape({
	firstName: Yup.string().required(err).min(2, "The name must be more than 2 characters"),
	secondName: Yup.string().required(err).min(2, "The second name must be more than 2 characters"),
	phone: Yup.number()
		.typeError("Amount must be a number")
		.required(err)
		.min(7, "it is not correct number"),
	email: Yup.string().email().required(err).min(2, "min 2"),
	country: Yup.string().required(err),
	password: Yup.string().required(err).min(6, "Password must be at least 6 characters"),
	repeatPassword: Yup.string()
		.required(err)
		.oneOf([Yup.ref("password")], "Passwords must match"),
	agreement: Yup.boolean().required(),
});
