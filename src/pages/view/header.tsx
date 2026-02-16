import React from "react";
import { Button, FancyButton } from "@use-stall/ui";
import { StArrowBack } from "@use-stall/icons";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import type { UnifiedCustomerType } from "@use-stall/types";

const MotionButton = motion.create(Button);

interface HeaderProps {
  loading: boolean;
  customer: UnifiedCustomerType;
}

export const Header = ({ loading, customer }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <div
      className="w-full h-fit shrink-0 flex items-center justify-between gap-2 sticky -top-5
           py-4 backdrop-blur-sm z-20"
    >
      <MotionButton
        disabled={loading}
        onClick={() => navigate(-1)}
        variant={"outline"}
        size={"icon"}
        layoutId="extension-runtime-back"
        className="text-xs size-10 shrink-0"
      >
        <StArrowBack />
      </MotionButton>
      <FancyButton
        disabled={loading}
        onClick={() =>
          navigate("/extensions/customers/new-customer", {
            state: customer,
          })
        }
        className="h-10 shrink-0 w-28"
      >
        Update
      </FancyButton>
    </div>
  );
};
