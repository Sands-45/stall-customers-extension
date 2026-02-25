import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Input,
  Label,
  PhoneNumberInput,
} from "@use-stall/ui";
import type { UnifiedCustomerType } from "@use-stall/types";
import { normalizePhoneToE164 } from "./utils";

interface BasicDetailsProps {
  formdata: UnifiedCustomerType;
  setFormdata: React.Dispatch<React.SetStateAction<UnifiedCustomerType>>;
}

export const BasicDetails = ({ formdata, setFormdata }: BasicDetailsProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base font-semibold">Basic Details</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="w-full flex flex-col md:flex-row items-center gap-3">
          <div className="w-full md:w-1/2 grid gap-1.5">
            <Label className="text-xs font-medium" htmlFor="first_name">
              First name
            </Label>
            <Input
              type="text"
              id="first_name"
              name="first_name"
              required
              autoFocus
              value={formdata.first_name}
              onChange={(e) => {
                setFormdata({ ...formdata, first_name: e.target.value });
              }}
              className="bg-main-background"
              placeholder="e.g. John"
            />
          </div>
          <div className="w-full md:w-1/2 grid gap-1.5">
            <Label className="text-xs font-medium" htmlFor="last_name">
              Last name
            </Label>
            <Input
              type="text"
              id="last_name"
              name="last_name"
              value={formdata.last_name}
              onChange={(e) =>
                setFormdata({ ...formdata, last_name: e.target.value })
              }
              className="bg-main-background"
              placeholder="e.g. Doe"
            />
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center gap-3">
          <div className="w-full md:w-1/2 grid gap-1.5">
            <Label className="text-xs font-medium" htmlFor="email">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formdata.email}
              onChange={(e) =>
                setFormdata({ ...formdata, email: e.target.value })
              }
              placeholder="e.g. john@example.com"
              className="bg-main-background"
            />
          </div>
          <div className="w-full md:w-1/2 grid gap-1.5">
            <Label className="text-xs font-medium" htmlFor="phone">
              Phone
            </Label>
            <PhoneNumberInput
              id="phone"
              name="phone"
              value={normalizePhoneToE164(formdata.phone)}
              onChange={(e: unknown) =>
                setFormdata({ ...formdata, phone: normalizePhoneToE164(e) })
              }
              placeholder="e.g. 012 345 6789"
              className="**:bg-main-background"
            />
          </div>
        </div>
        <div className="grid gap-1.5">
          <Label className="text-xs font-medium" htmlFor="company_name">
            Company Name
          </Label>
          <Input
            type="text"
            id="company_name"
            name="company_name"
            value={formdata.company_name}
            onChange={(e) =>
              setFormdata({ ...formdata, company_name: e.target.value })
            }
            placeholder="e.g. Acme Corp"
            className="bg-main-background"
          />
        </div>
      </CardContent>
    </Card>
  );
};
