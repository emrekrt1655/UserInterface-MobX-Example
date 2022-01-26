import React, { FC, useState, useEffect } from "react";
import { useStore } from "../context/StoreContex";
import "./styles/CustomerAdd.scss";
import { SortedCustomer } from "../stores/customerList";
import { useParams, useHistory } from "react-router-dom";

const EditCustomer: FC = () => {
  const customerList = useStore();
  let { id } = useParams<{ id?: string }>();
  const history = useHistory();

  const [customerNumber, setCustomerNumber] = useState<number>(0);
  const [username, setUsername] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [mail, setMail] = useState<string>("");
  const [birth, setBirth] = useState<Date>(new Date());
  const [password, setPassword] = useState<string>("");

  let ids: number;
  ids = Number(id);
  console.log(`ids`, ids);

  // we need to id to take  related data

  const editedCustomer = async () => {
    try {
      let customers = customerList.customers[0]?.filter(
        (customer: SortedCustomer) => customer.id === ids
      );
      setCustomerNumber(customers[0].customerNumber);
      setUsername(customers[0].userName);
      setName(customers[0].firstName);
      setLastname(customers[0].surname);
      setMail(customers[0].email);
      setBirth(customers[0].birth);
      setPassword(customers[0].firstName);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    editedCustomer();
  }, []);

  const saveEdit = async (
    ids: number,
    customerNumber: number,
    username: string,
    name: string,
    lastname: string,
    mail: string,
    birth: Date,
    password: string
  ) => {
    try {
      customerList.editCustomer(
        ids,
        customerNumber,
        username,
        name,
        lastname,
        mail,
        birth,
        password
      );
    } catch (err) {
      console.log(err);
    }
  };

  const saveEditandRedirect = () => {
    saveEdit(
      ids,
      customerNumber,
      username,
      name,
      lastname,
      mail,
      birth,
      password
    ).then(() => history.push("/"));
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
          <h1>Edit Customer</h1>
          <form onSubmit={saveEditandRedirect}>
            <label htmlFor="customerNumber">Customer Number</label>
            <input
              type="number"
              placeholder="Customer Number"
              value={customerNumber}
              onChange={(e) => setCustomerNumber(Number(e.target.value))}
            ></input>

            <label htmlFor="userName">User Name</label>
            <input
              type="text"
              placeholder="User Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>

            <label htmlFor="firstName">Name</label>
            <input
              type="text"
              placeholder="First Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>

            <label htmlFor="surname">Last Name</label>
            <input
              type="text"
              placeholder="Surname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            ></input>

            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Email"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            ></input>

            <label htmlFor="birth">Date of Birth</label>
            <input
              type="date"
              placeholder={"birth"}
              value={String(birth)}
              readOnly
            ></input>

            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>

            <button type="submit">Edit Customer</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditCustomer;
