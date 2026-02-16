import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Input,
  Label,
} from "@use-stall/ui";
import type { UnifiedCustomerType } from "@use-stall/types";
import { UnifiedCustomerAddressModel } from "@/models/customers";

interface AddressFieldsProps {
  type: "billing_address" | "shipping_address";
  formdata: UnifiedCustomerType;
  handleAddressFieldChange: (
    type: "billing_address" | "shipping_address",
    field: keyof UnifiedCustomerAddressModel,
    value: string,
  ) => void;
}

export const AddressFields = ({
  type,
  formdata,
  handleAddressFieldChange,
}: AddressFieldsProps) => {
  const address = formdata[type as keyof UnifiedCustomerType] as any;
  const title =
    type === "billing_address" ? "Billing Address" : "Shipping Address";

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-1.5">
          <Label
            className="text-xs font-medium"
            htmlFor={`${type}_address_name`}
          >
            Address Name
          </Label>
          <Input
            type="text"
            id={`${type}_address_name`}
            value={address?.address_name || ""}
            onChange={(e) =>
              handleAddressFieldChange(type, "address_name", e.target.value)
            }
            placeholder="e.g. Home, Office"
            className="bg-main-background"
          />
        </div>
        <div className="w-full flex flex-col md:flex-row items-center gap-3">
          <div className="w-full md:w-1/2 grid gap-1.5">
            <Label
              className="text-xs font-medium"
              htmlFor={`${type}_first_name`}
            >
              First Name
            </Label>
            <Input
              type="text"
              id={`${type}_first_name`}
              value={address?.first_name || ""}
              onChange={(e) =>
                handleAddressFieldChange(type, "first_name", e.target.value)
              }
              placeholder="First name"
              className="bg-main-background"
            />
          </div>
          <div className="w-full md:w-1/2 grid gap-1.5">
            <Label
              className="text-xs font-medium"
              htmlFor={`${type}_last_name`}
            >
              Last Name
            </Label>
            <Input
              type="text"
              id={`${type}_last_name`}
              value={address?.last_name || ""}
              onChange={(e) =>
                handleAddressFieldChange(type, "last_name", e.target.value)
              }
              placeholder="Last name"
              className="bg-main-background"
            />
          </div>
        </div>
        <div className="grid gap-1.5">
          <Label className="text-xs font-medium" htmlFor={`${type}_company`}>
            Company
          </Label>
          <Input
            type="text"
            id={`${type}_company`}
            value={address?.company || ""}
            onChange={(e) =>
              handleAddressFieldChange(type, "company", e.target.value)
            }
            placeholder="Company name"
            className="bg-main-background"
          />
        </div>
        <div className="grid gap-1.5">
          <Label className="text-xs font-medium" htmlFor={`${type}_address_1`}>
            Address Line 1
          </Label>
          <Input
            type="text"
            id={`${type}_address_1`}
            value={address?.address_1 || ""}
            onChange={(e) =>
              handleAddressFieldChange(type, "address_1", e.target.value)
            }
            placeholder="Street address"
            className="bg-main-background"
          />
        </div>
        <div className="grid gap-1.5">
          <Label className="text-xs font-medium" htmlFor={`${type}_address_2`}>
            Address Line 2 (Optional)
          </Label>
          <Input
            type="text"
            id={`${type}_address_2`}
            value={address?.address_2 || ""}
            onChange={(e) =>
              handleAddressFieldChange(type, "address_2", e.target.value)
            }
            placeholder="Apartment, suite, etc."
            className="bg-main-background"
          />
        </div>
        <div className="w-full flex flex-col md:flex-row items-center gap-3">
          <div className="w-full md:w-1/2 grid gap-1.5">
            <Label className="text-xs font-medium" htmlFor={`${type}_city`}>
              City
            </Label>
            <Input
              type="text"
              id={`${type}_city`}
              value={address?.city || ""}
              onChange={(e) =>
                handleAddressFieldChange(type, "city", e.target.value)
              }
              placeholder="City"
              className="bg-main-background"
            />
          </div>
          <div className="w-full md:w-1/2 grid gap-1.5">
            <Label
              className="text-xs font-medium"
              htmlFor={`${type}_postal_code`}
            >
              Postal Code
            </Label>
            <Input
              type="text"
              id={`${type}_postal_code`}
              value={address?.postal_code || ""}
              onChange={(e) =>
                handleAddressFieldChange(type, "postal_code", e.target.value)
              }
              placeholder="Postal code"
              className="bg-main-background"
            />
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center gap-3">
          <div className="w-full md:w-1/2 grid gap-1.5">
            <Label className="text-xs font-medium" htmlFor={`${type}_province`}>
              Province/State
            </Label>
            <Input
              type="text"
              id={`${type}_province`}
              value={address?.province || ""}
              onChange={(e) =>
                handleAddressFieldChange(type, "province", e.target.value)
              }
              placeholder="Province"
              className="bg-main-background"
            />
          </div>
          <div className="w-full md:w-1/2 grid gap-1.5">
            <Label
              className="text-xs font-medium"
              htmlFor={`${type}_country_code`}
            >
              Country Code
            </Label>
            <Input
              type="text"
              id={`${type}_country_code`}
              value={address?.country_code || ""}
              onChange={(e) =>
                handleAddressFieldChange(type, "country_code", e.target.value)
              }
              placeholder="e.g. US"
              className="bg-main-background"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
