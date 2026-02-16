import { customers } from "@use-stall/core";
import type { CoreConfig, UnifiedCustomerType } from "@use-stall/types";
import { get_error_message } from "@/utils";

export const create_customer_service = async (
  data: UnifiedCustomerType,
  stall: CoreConfig,
): Promise<UnifiedCustomerType> => {
  try {
    const res = await customers.create({
      sdk: stall,
      data: data,
    });

    return res as UnifiedCustomerType;
  } catch (error: unknown) {
    const message = get_error_message(error);
    console.log(message);
    throw new Error(message);
  }
};

export const update_customer_service = async (
  data: UnifiedCustomerType,
  stall: CoreConfig,
): Promise<UnifiedCustomerType> => {
  try {
    const res = await customers.update({
      sdk: stall,
      data: data,
      id: data.id,
    });

    return res as UnifiedCustomerType;
  } catch (error: unknown) {
    const message = get_error_message(error);
    console.log(message);
    throw new Error(message);
  }
};

export const delete_customer_service = async (
  stall: CoreConfig,
  id: string,
): Promise<void> => {
  try {
    const res = await customers.delete({
      sdk: stall,
      id: id,
    });

    return;
  } catch (error: unknown) {
    const message = get_error_message(error);
    console.log(message);
    throw new Error(message);
  }
};
