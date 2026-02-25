/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ExtensionLookupGroup } from "@use-stall/types";

const to_page_path = (path: string, item: any) => {
  if (!item?.id) return path;
  return `${path}?id=${item.id}`;
};

export const LOOK_UP: ExtensionLookupGroup[] = [
  {
    id: "customers",
    title: "Customers",
    description: "A list of all your customers",
    data_origin: "local",
    source: "customers",
    filters: [],
    sorting: {
      key: "first_name",
      order: "asc",
    },
    keys: {
      id: "id",
      image: "profile",
      fallback: "/icons/customers.svg",
      title: { value: "{{first_name}} {{last_name}}", format: "string" },
      description: {
        value: "{{email}}",
        format: "none",
        className: "lowercase",
      },
    },
    actions: [
      // {
      //   id: "add-customer-to-order",
      //   label: "Add to Cart",
      //   close_on_complete: true,
      //   paths: ["/extensions/retail-pos"],
      //   run: ({ item, helpers }) => {
      //     if (!item) return;
      //     helpers.navigate("/extensions/retail-pos");
      //   },
      // },
      {
        id: "view-customer",
        label: "View Customer",
        close_on_complete: true,
        reopen_on_return: true,
        run: ({ item, helpers }) => {
          if (!item) return;
          helpers.navigate(
            to_page_path("/extensions/customers/view-customer", item),
            { replace: true },
          );
        },
      },
      {
        id: "linked-orders",
        label: "Linked Orders",
        close_on_complete: false,
        run: ({ item, helpers }) => {
          helpers.open_group({
            group: {
              id: "orders",
              title: "Linked Orders",
              extension: {
                id: "orders",
                title: "Orders",
              },
              filters: [
                {
                  key: "customer_id",
                  type: "string",
                  query_value: "id",
                  dynamic: true,
                },
              ],
            },
            item: item ?? {},
          });
        },
      },
      {
        id: "parked-orders",
        label: "Parked Orders",
        close_on_complete: false,
        run: ({ item, helpers }) => {
          helpers.open_group({
            group: {
              id: "parked-orders",
              title: "Parked Orders",
              extension: {
                id: "retail-pos",
                title: "Retail POS",
              },
              filters: [
                {
                  key: "customer_id",
                  type: "string",
                  query_value: "id",
                  dynamic: true,
                },
              ],
            },
            item: item ?? {},
          });
        },
      },
      {
        id: "create-customer",
        label: "Create Customer",
        close_on_complete: true,
        reopen_on_return: true,
        always_show: true,
        run: ({ helpers }) => {
          helpers.navigate("/extensions/customers/new-customer");
        },
      },
    ],
  },
];
