import { deepClone } from "@/utils";
import { CustomerModel } from "@/models/customers";

export const getInitialFormData = () => {
  return deepClone(new CustomerModel());
};
