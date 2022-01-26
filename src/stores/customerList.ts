import { action, computed, makeObservable, observable, toJS } from "mobx";
import { compareAsc, compareDesc } from "../helper/sortFunctions";

export class CustomerList {
  @observable.shallow customers: SortedCustomer[] | any[] = [];

  constructor() {
    makeObservable(this);
  }

  // to take the data from api.
  @action
  getCustomers = async () => {
    try {
      const res = await fetch("http://localhost:5000/api");
      const resData = await res.json();
      const data = resData.customers;
      this.customers = data;
    } catch (err) {
      console.log(`err`, err);
    }
  };

  //to add a new customer to database

  @action
  addNewCustomer = async (
    customerNumber: number,
    userName: string,
    firstName: string,
    surname: string,
    email: string,
    birth: Date,
    password: string
  ) => {
    await fetch("http://localhost:5000/api/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        customerNumber: customerNumber,
        userName: userName,
        firstName: firstName,
        surname: surname,
        email: email,
        birth: birth,
        password: password,
      }),
    });
  };

  // remove customer from database
  @action
  removeCusto = async (id: number) => {
    await fetch(`http://localhost:5000/api/${id}/delete`);
    this.customers = this.customers.filter((kunde) => kunde.id !== id);
  };

  // edit function for backend

  @action
  editCustomer = async (
    id: number,
    customerNumber: number,
    userName: string,
    firstName: string,
    surname: string,
    email: string,
    birth: Date,
    password: string
  ) => {
    await fetch(`http://localhost:5000/api/${id}/edit`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        customerNumber: customerNumber,
        userName: userName,
        firstName: firstName,
        surname: surname,
        email: email,
        birth: birth,
        password: password,
      }),
    });
  };

  @computed
  get ascCustomerNumbers(): SortedCustomer[] {
    return this.customers?.sort(
      (a: any, b: any) => a?.customerNumber - b?.customerNumber
    );
  }

  @computed
  get descCustomerNumbers(): SortedCustomer[] {
    return this.customers?.sort(
      (a: any, b: any) => b?.customerNumber - a?.customerNumber
    );
  }
  @computed
  get ascUserNames(): SortedCustomer[] {
    return this.customers?.sort((a: any, b: any) =>
      compareAsc(a?.userName.toUpperCase(), b?.userName.toUpperCase())
    );
  }

  @computed
  get descUserNames(): SortedCustomer[] {
    return this.customers?.sort((a: any, b: any) =>
      compareDesc(a?.userName.toUpperCase(), b?.userName.toUpperCase())
    );
  }
  @computed
  get ascFirstNames(): SortedCustomer[] {
    return this.customers?.sort((a: any, b: any) =>
      compareAsc(a?.firstName.toUpperCase(), b?.firstName.toUpperCase())
    );
  }

  @computed
  get descFirstNames(): SortedCustomer[] {
    return this.customers?.sort((a: any, b: any) =>
      compareDesc(a?.firstName.toUpperCase(), b?.firstName.toUpperCase())
    );
  }
  @computed
  get ascSurnames(): SortedCustomer[] {
    return this.customers?.sort((a: any, b: any) =>
      compareAsc(a?.surname.toUpperCase(), b?.surname.toUpperCase())
    );
  }

  @computed
  get descSurnames(): SortedCustomer[] {
    return this.customers?.sort((a: any, b: any) =>
      compareDesc(a?.surname.toUpperCase(), b?.surname.toUpperCase())
    );
  }
  @computed
  get ascMails(): SortedCustomer[] {
    return this.customers?.sort((a: any, b: any) =>
      compareAsc(a?.email.toUpperCase(), b?.email.toUpperCase())
    );
  }

  @computed
  get descMails(): SortedCustomer[] {
    return this.customers?.sort((a: any, b: any) =>
      compareDesc(a?.email.toUpperCase(), b?.email.toUpperCase())
    );
  }
}

// We need to this in typescript. In our data has these parameters,
//so we can use as a parameter in the functions which these parameter need.

export interface SortedCustomer {
  id: number;
  customerNumber: number;
  userName: string;
  firstName: string;
  surname: string;
  email: string;
  birth: Date;
  password: string;
}
