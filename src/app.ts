import type { StallExtension } from "@use-stall/types";
import { LOOK_UP } from "./look-up";

const app: StallExtension = {
  pages: [
    {
      index: false,
      id: "view-customer",
      title: "View Customer",
      description: "View Customer Details",
      ui: "view_customer",
    },
    {
      index: false,
      id: "new-customer",
      title: "Manage Customer",
      description: "Create a new customer",
      ui: "manage_customer",
    },
  ],
  lookup: LOOK_UP,
};

export default app;
