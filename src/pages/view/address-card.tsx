import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@use-stall/ui";
import type { UnifiedCustomerAddressType } from "@use-stall/types";
import { formatAddress, getFullName } from "./utils";

interface AddressCardProps {
  title: string;
  address: UnifiedCustomerAddressType;
}

export const AddressCard = ({ title, address }: AddressCardProps) => {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-base font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 text-sm">
        {address.address_name && (
          <div className="font-medium text-foreground mb-1">
            {address.address_name}
          </div>
        )}
        <div className="text-muted-foreground pl-3 border-l-2 border-muted space-y-1">
          {(address.first_name || address.last_name) && (
            <div className="text-foreground">
              {getFullName(address.first_name, address.last_name)}
            </div>
          )}
          {address.company && (
            <div className="font-medium">{address.company}</div>
          )}
          <div>{formatAddress(address)}</div>
        </div>
      </CardContent>
    </Card>
  );
};
