import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@use-stall/ui";
import { StUser, StMail, StMobilePhone } from "@use-stall/icons";
import { getFullName } from "./utils";
import type { UnifiedCustomerType } from "@use-stall/types";

export const ContactDetails = ({
  customer,
}: {
  customer: UnifiedCustomerType;
}) => {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-base font-semibold">
          Contact Details
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-3">
          <div className="flex items-center gap-3 text-sm">
            <div className="size-8 rounded-full center-flex shrink-0 bg-main-background">
              <StUser className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                Name
              </span>
              <span className="font-medium text-foreground">
                {getFullName(customer.first_name, customer.last_name)}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <div className="size-8 rounded-full center-flex shrink-0 bg-main-background">
              <StMail className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="flex flex-col overflow-hidden">
              <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                Email
              </span>
              <span className="text-sky-600 truncate font-medium">
                {customer.email || "N/A"}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <div className="size-8 rounded-full center-flex shrink-0 bg-main-background">
              <StMobilePhone className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                Phone
              </span>
              <span className="font-medium">{customer.phone || "N/A"}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
