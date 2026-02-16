import type {
  UnifiedCustomerType,
  UnifiedCustomerAddressType,
} from "@use-stall/types";

export class UnifiedCustomerAddressModel implements UnifiedCustomerAddressType {
  address_name = "";
  company = "";
  first_name = "";
  last_name = "";
  address_1 = "";
  address_2 = "";
  city = "";
  country_code = "";
  province = "";
  postal_code = "";
  metadata: Record<string, any> = {};

  constructor(init?: Partial<UnifiedCustomerAddressType>) {
    if (init) {
      Object.assign(this, init);
    }
  }
}

export class CustomerModel implements UnifiedCustomerType {
  id = "";
  email = "";
  company_name = "";
  first_name = "";
  last_name = "";
  billing_address = new UnifiedCustomerAddressModel();
  shipping_address = new UnifiedCustomerAddressModel();
  phone = "";
  metadata = {
    stall_offline_id: "",
    stall_offline_created_at: "",
    stall_offline_updated_at: "",
    stall_offline_deleted_at: "",
  };
  created_at = "";
  updated_at = "";
  deleted_at = "";

  constructor(init?: Partial<UnifiedCustomerType>) {
    if (init) {
      Object.assign(this, init);
    }
  }
}
