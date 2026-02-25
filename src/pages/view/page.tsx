import type { RuntimeProps } from "@use-stall/types";
import { useLiveQuery } from "dexie-react-hooks";
import { local_db } from "@use-stall/core";
import { Loader } from "@use-stall/ui";
import React from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { delete_customer_service } from "@/services/customers.services";
import { toast } from "sonner";
import { get_error_message } from "@/utils";

import { Header } from "./header";
import { ProfileCard } from "./profile-card";
import { ContactDetails } from "./contact-details";
import { AddressCard } from "./address-card";
import { DangerZone } from "./danger-zone";

const ViewCustomer = ({ stall }: RuntimeProps) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const customer_id = searchParams.get("id") ?? "unknown";
  const [loading, setLoading] = React.useState<boolean>(false);

  const customer = useLiveQuery(
    () => local_db.customers.get(customer_id as never),
    [customer_id],
  );

  const handleDelete = async () => {
    if (!customer) return;
    setLoading(true);
    toast.promise(delete_customer_service(stall, customer.id), {
      loading: "Loading ...",
      success: () => {
        navigate(-1);
        setLoading(false);
        return "Customer deleted!";
      },
      error: (error: unknown) => {
        const message = get_error_message(error);
        setLoading(false);
        return message;
      },
    });
  };

  if (!customer) {
    return <Loader />;
  }

  return (
    <div className="h-full w-full overflow-hidden overflow-y-auto p-5 flex justify-center">
      <div className="w-full max-w-2xl min-h-full h-fit pb-6 relative">
        <Header loading={loading} customer={customer} />

        <div className="mt-4 flex flex-col gap-6">
          <div className="grid gap-1">
            <h1 className="text-lg font-semibold">Customer Details</h1>
            <p className="text-muted-foreground text-sm">
              Viewing information for {customer.first_name} {customer.last_name}
            </p>
          </div>

          <ProfileCard customer={customer} />

          <ContactDetails customer={customer} />

          {customer.billing_address && (
            <AddressCard
              title="Billing Address"
              address={customer.billing_address}
            />
          )}

          {customer.shipping_address && (
            <AddressCard
              title="Shipping Address"
              address={customer.shipping_address}
            />
          )}

          <DangerZone loading={loading} onDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
};

export default React.memo(ViewCustomer);
