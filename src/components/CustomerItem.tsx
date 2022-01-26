import React, { FC } from "react";
import { useStore } from "../context/StoreContex";
import { SortedCustomer } from "../stores/customerList";
import { Link } from "react-router-dom";

interface Props {
  customer: SortedCustomer;
}

const CustomerItem: FC<Props> = ({ customer }) => {
  const customerList = useStore();

  const onDelete = (id: number) => {
    customerList.removeCusto(id);
  };

  return (
    <tr>
      <td> {customer.customerNumber} </td>
      <td> {customer.userName} </td>
      <td> {customer.firstName} </td>
      <td> {customer.surname} </td>
      <td> {customer.email} </td>
      <td className="actions">
        <Link to={`/edit/${customer.id}`}>
          <img
            src="https://img.icons8.com/office/21/000000/edit.png"
            alt="edit"
          />
        </Link>
        /
        <img
          src="https://img.icons8.com/color/21/000000/delete-forever.png"
          alt="delete"
          onClick={() => onDelete(customer.id)}
        />
      </td>
    </tr>
  );
};

export default CustomerItem;
