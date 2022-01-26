import React, { useState, useEffect } from "react";
import { useStore } from "../context/StoreContex";
import "./styles/Home.scss";
import TableHead from "./TableHead";
import Search from "./Search";
import CustomerItem from "./CustomerItem";
import { toJS } from "mobx";

const Home: React.FC = () => {
  const customerList = useStore();
  let customers: any = [];

  const [searchTerm, setSearchTerm] = useState(""); // to  search  data
  const [sort, setSort] = useState(""); // to sort the data
  const [counter, setCounter] = useState(0);
  //to fetch the data from database when the page load.
  //the data comes with useEffect but  setCounter function updates the state so it helps to print the data

  switch (sort) {
    case "asc-cn":
      customerList.ascCustomerNumbers?.map((a) => customers?.push(a));
      break;
    case "desc-cn":
      customerList.descCustomerNumbers?.map((a) => customers?.push(a));
      break;
    case "asc-un":
      customerList.ascUserNames?.map((a) => customers?.push(a));
      break;
    case "desc-un":
      customerList.descUserNames?.map((a) => customers?.push(a));
      break;
    case "asc-fn":
      customerList.ascFirstNames?.map((a) => customers?.push(a));
      break;
    case "desc-fn":
      customerList.descFirstNames?.map((a) => customers?.push(a));
      break;
    case "asc-ln":
      customerList.ascSurnames?.map((a) => customers?.push(a));
      break;
    case "desc-ln":
      customerList.descUserNames?.map((a) => customers?.push(a));
      break;
    case "asc-ll":
      customerList.ascMails?.map((a) => customers?.push(a));
      break;
    case "desc-ll":
      customerList.descMails?.map((a) => customers?.push(a));
      break;
    default:
      customers = customerList?.customers;
      break;
  }

  useEffect(() => {
    customerList.getCustomers();
    setTimeout(() => setCounter(1), 500);
  }, [customerList]);

  return (
    <div className="container">
      <div className="home">
        <div className="header">
          <h1>Milon Customers</h1>
          <Search setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
          <table>
            <tbody>
              <TableHead sort={sort} setSort={setSort} />
              {/* sorted func as you see over the page, it takes customer as a list and returns it back with
              the wished values and since returning value is a list we can use filter and map methods   */}
              {sort
                ? customers
                    ?.filter((item: any) => {
                      if (searchTerm === "") {
                        return item;
                      } else if (
                        item.userName
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase())
                      ) {
                        return item;
                      }
                    })
                    .map((customer: any) => (
                      <CustomerItem customer={customer} key={customer.id} />
                    ))
                : customers
                    ?.filter((item: any) => {
                      if (searchTerm === "") {
                        return item;
                      } else if (
                        item?.userName
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase())
                      ) {
                        return item;
                      }
                    })
                    .map((customer: any) => (
                      <CustomerItem customer={customer} key={customer?.id} />
                    ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
