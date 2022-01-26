import * as Yup from "yup";

// it helps validation for frontend. Without these requiretments the form will not be submitted.
export const CustomerSchema = Yup.object().shape({
  customerNumber: Yup.number().required("Customer number is required"),
  userName: Yup.string()
    .required("User Name is required")
    .min(3, "Must be more than 3 characters")
    .max(30, "Must be less than 30 characters"),
  firstName: Yup.string()
    .required("First Name is required")
    .min(2, "Must be more than 2 characters")
    .max(150, "Must be less than 150 characters"),
  surname: Yup.string()
    .required("Last Name is required")
    .min(2, "Must be more than 2 characters")
    .max(150, "Must be less than 150 characters"),
  email: Yup.string()
    .email("Invalid Email")
    .required("Email is required!!")
    .min(2, "Must be more than 2 characters")
    .max(300, "Must be less than 300 characters"),
  password: Yup.string()
    .required("No password provided.")
    .max(150)
    .min(8, "Password is too short - schold be 8 chars minimum. "),
});
