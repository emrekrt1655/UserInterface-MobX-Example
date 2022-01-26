import React, { FC } from "react";
import { useStore } from "../context/StoreContex";
import "./styles/CustomerAdd.scss";
import { Formik } from "formik";
import { CustomerSchema } from "../helper/validation";

interface CustomerAddValues {
  customerNumber: number;
  userName: string;
  firstName: string;
  surname: string;
  email: string;
  birth: Date;
  password: string;
}

const CustomerAdd: FC = () => {
  const customerList = useStore();

  const initialValues: CustomerAddValues = {
    customerNumber: 12345,
    userName: "",
    firstName: "",
    surname: "",
    email: "",
    birth: new Date(),
    password: "",
  };

  return (
    <div className="container">
      <div className="addform">
        <div className="left">
          <img
            src="https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="fitness"
          />
        </div>
        <div className="right">
          <h1>Add New Customer</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={CustomerSchema}
            onSubmit={async (values, { resetForm }) => {
              try {
                customerList.addNewCustomer(
                  values.customerNumber,
                  values.userName,
                  values.firstName,
                  values.surname,
                  values.email,
                  values.birth,
                  values.password
                );
                resetForm();
              } catch (err) {
                console.log(err);
              }
            }}
          >
            {({ handleSubmit, touched, errors, getFieldProps }) => (
              <form onSubmit={handleSubmit}>
                <label htmlFor="customerNumber">Customer Number</label>
                <input
                  type="text"
                  placeholder="Customer Number"
                  {...getFieldProps("customerNumber")}
                ></input>
                {touched.customerNumber && errors.customerNumber && (
                  <span>{errors.customerNumber}</span>
                )}

                <label htmlFor="userName">User Name</label>
                <input
                  type="text"
                  placeholder="User Name"
                  {...getFieldProps("userName")}
                ></input>
                {touched.userName && errors.userName && (
                  <span>{errors.userName}</span>
                )}

                <label htmlFor="firstName">Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  {...getFieldProps("firstName")}
                ></input>
                {touched.firstName && errors.firstName && (
                  <span>{errors.firstName}</span>
                )}

                <label htmlFor="surname">Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  {...getFieldProps("surname")}
                ></input>
                {touched.surname && errors.surname && (
                  <span>{errors.surname}</span>
                )}
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  {...getFieldProps("email")}
                ></input>
                {touched.email && errors.email && <span>{errors.email}</span>}

                <label htmlFor="birth">Date of Birth</label>
                <input
                  type="date"
                  placeholder="Date of Birth"
                  {...getFieldProps("birth")}
                ></input>
                {touched.birth && errors.birth && <span>{errors.birth}</span>}

                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  {...getFieldProps("password")}
                ></input>
                {touched.password && errors.password && (
                  <span>{errors.password}</span>
                )}

                <button type="submit">Add Customer</button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default CustomerAdd;
