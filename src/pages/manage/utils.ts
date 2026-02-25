import { deepClone } from "@/utils";
import { CustomerModel } from "@/models/customers";
import type { UnifiedCustomerAddressType, UnifiedCustomerType } from "@use-stall/types";

const E164_REGEX = /^\+[1-9]\d{1,14}$/;

export const normalizePhoneToE164 = (value: unknown): string => {
  if (typeof value === "number") {
    return normalizePhoneToE164(String(value));
  }

  if (typeof value !== "string") {
    return "";
  }

  const trimmed = value.trim();
  if (!trimmed) {
    return "";
  }

  const compactValue = trimmed.replace(/[\s()-]/g, "");
  if (E164_REGEX.test(compactValue)) {
    return compactValue;
  }

  const digits = compactValue.replace(/\D/g, "");
  return digits ? `+${digits}` : "";
};

const normalizeAddressPhone = <T extends UnifiedCustomerAddressType>(address: T): T => {
  const addressRecord = address as T & { phone?: unknown };

  if (addressRecord.phone === undefined || addressRecord.phone === null) {
    return address;
  }

  return {
    ...addressRecord,
    phone: normalizePhoneToE164(addressRecord.phone),
  } as T;
};

export const normalizeCustomerPhoneFields = (
  customer: UnifiedCustomerType,
): UnifiedCustomerType => {
  return {
    ...customer,
    phone: normalizePhoneToE164(customer.phone),
    billing_address: normalizeAddressPhone(customer.billing_address),
    shipping_address: normalizeAddressPhone(customer.shipping_address),
  };
};

export const getInitialFormData = () => {
  return normalizeCustomerPhoneFields(deepClone(new CustomerModel()));
};
