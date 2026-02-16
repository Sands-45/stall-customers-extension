import React from "react";
import { Button, FancyButton } from "@use-stall/ui";
import { StArrowBack } from "@use-stall/icons";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const MotionButton = motion.create(Button);

interface HeaderProps {
  loading: boolean;
  isUpdate: boolean;
}

export const Header = ({ loading, isUpdate }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <div
      className="w-full h-fit shrink-0 flex items-center justify-between gap-2 sticky -top-5
             py-4 backdrop-blur-sm z-10"
    >
      <MotionButton
        disabled={loading}
        onClick={() => {
          navigate(-1);
        }}
        variant={"outline"}
        size={"icon"}
        type="button"
        layoutId="extension-runtime-back"
        className="text-xs size-10 shrink-0 z-10"
      >
        <StArrowBack />
      </MotionButton>
      <FancyButton
        type="submit"
        loading={loading}
        className="h-10 shrink-0 w-28"
      >
        {loading ? "Saving..." : isUpdate ? "Update" : "Create"}
      </FancyButton>
    </div>
  );
};
