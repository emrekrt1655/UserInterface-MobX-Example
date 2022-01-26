import { createContext, useContext } from "react";
import { CustomerList } from "../stores/customerList";

const StoreContext = createContext<CustomerList>({} as CustomerList);

const StoreProvider = StoreContext.Provider;

const useStore = (): CustomerList => useContext(StoreContext);

export { StoreProvider, useStore };
