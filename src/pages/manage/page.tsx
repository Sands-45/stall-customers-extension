import { motion } from "framer-motion";
import type { RuntimeProps, UnifiedCustomerType } from "@use-stall/types";
import React from "react";
import { UnifiedCustomerAddressModel } from "@/models/customers";
import { PageTransitionVariants } from "@/constants/motion";
import { local_db } from "@use-stall/core";
import { toast } from "sonner";
import {
  create_customer_service,
  update_customer_service,
} from "@/services/customers.services";
import { useLocation, useNavigate } from "react-router-dom";
import { getInitialFormData } from "./utils";
import { Header } from "./header";
import { BasicDetails } from "./basic-details";
import { AddressFields } from "./address-fields";

const ManageCustomer = ({ stall }: RuntimeProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const customer = location.state as UnifiedCustomerType;

  const [loading, setLoading] = React.useState<boolean>(false);
  const [formdata, setFormdata] = React.useState<UnifiedCustomerType>(() =>
    customer?.id ? customer : getInitialFormData(),
  );

  const handleAddressFieldChange = (
    type: "billing_address" | "shipping_address",
    field: keyof UnifiedCustomerAddressModel,
    value: string,
  ) => {
    setFormdata((prev) => ({
      ...prev,
      [type]: {
        ...(prev[type as keyof UnifiedCustomerType] as object),
        [field]: value,
      },
    }));
  };

  // Handle Submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    // Check if the email exists
    if (formdata.email && !formdata.id) {
      const query = await local_db.customers
        .where("email")
        .equals(formdata.email)
        .first();

      if (query) {
        setLoading(false);
        const customer = query;
        const error_message = `Customer with the email already exists :
        \n\n ${customer.first_name} ${customer.last_name}`;
        return toast.error(error_message);
      }
    }

    const mutate = !formdata.id
      ? create_customer_service
      : update_customer_service;

    toast.promise(mutate(formdata, stall), {
      loading: "Saving changes...",
      success: (data) => {
        setLoading(false);
        setFormdata(getInitialFormData());
        navigate(`/extensions/customers/view-customer?id=${data.id}`, {
          replace: true,
        });
        return `Action completed successfully!`;
      },
      error: (error) => {
        setLoading(false);
        return error.message;
      },
    });
  };

  return (
    <motion.div
      variants={PageTransitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      key="orders"
      className="h-full w-full overflow-hidden overflow-y-auto p-5 flex justify-center"
    >
      <form
        id="new-customer-form"
        onSubmit={handleSubmit}
        className="w-full max-w-2xl min-h-full h-fit pb-6 relative"
      >
        <Header loading={loading} isUpdate={!!formdata.id} />

        <div className={"mt-4 w-full h-fit shrink-0 flex flex-col gap-6"}>
          <div className="grid gap-1">
            <h1 className="text-lg font-semibold">
              {formdata.id ? "Update" : "Create"} customer
            </h1>
            <p className="text-muted-foreground text-sm">
              Please fill the form below to proceed
            </p>
          </div>

          {/* Basic Details Section */}
          <BasicDetails formdata={formdata} setFormdata={setFormdata} />

          {/* Billing Address Section */}
          <AddressFields
            type="billing_address"
            formdata={formdata}
            handleAddressFieldChange={handleAddressFieldChange}
          />

          {/* Shipping Address Section */}
          <AddressFields
            type="shipping_address"
            formdata={formdata}
            handleAddressFieldChange={handleAddressFieldChange}
          />
        </div>
      </form>
    </motion.div>
  );
};

export default React.memo(ManageCustomer);
