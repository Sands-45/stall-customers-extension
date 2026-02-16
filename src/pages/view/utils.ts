import type { UnifiedCustomerAddressType } from "@use-stall/types";

export const getFullName = (firstName: string, lastName: string) => {
  return `${firstName} ${lastName}`.trim() || "N/A";
};

export const formatAddress = (address: UnifiedCustomerAddressType) => {
  if (!address) return "N/A";
  const parts = [
    address.address_1,
    address.address_2,
    address.city,
    address.province,
    address.postal_code,
    address.country_code?.toUpperCase(),
  ].filter(Boolean);

  return parts.join(", ") || "No address details provided";
};
