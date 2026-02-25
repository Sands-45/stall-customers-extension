import React from "react";
import { Card } from "@use-stall/ui";
import { StBuilding } from "@use-stall/icons";
import { getFullName } from "./utils";
import type { UnifiedCustomerType } from "@use-stall/types";

export const ProfileCard = ({
  customer,
}: {
  customer: UnifiedCustomerType;
}) => {
  return (
    <Card className="w-full shadow-none flex items-center p-5 gap-4 overflow-hidden">
      <div className="rounded-xl overflow-hidden shrink-0 size-20 bg-accent">
        <img
          src="/icons/customers.svg"
          alt="avatar"
          className="w-full h-full"
        />
      </div>
      <div className="w-full flex flex-col">
        <div className="w-full flex gap-2 items-center justfy-between">
          <h1 className="text-xl font-semibold text-foreground">
            {getFullName(customer.first_name, customer.last_name)}
          </h1>
        </div>
        <div className="mt-1 flex items-center gap-2 text-sm">
          <StBuilding className="h-4 w-4 text-muted-foreground" />
          <span className="font-medium">{customer.company_name || "N/A"}</span>
        </div>
      </div>
    </Card>
  );
};
