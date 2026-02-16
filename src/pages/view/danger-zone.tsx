import React from "react";
import { Card, FancyButton, ConfirmDialog } from "@use-stall/ui";

interface DangerZoneProps {
  loading: boolean;
  onDelete: () => void;
}

export const DangerZone = ({ loading, onDelete }: DangerZoneProps) => {
  return (
    <Card className="p-5">
      <h2 className="text-lg font-semibold text-foreground">Danger Zone</h2>
      <p className="text-sm text-muted-foreground">
        Proceed cautiously as this action cannot be reversed. Ensure you have
        backed up any important information before proceeding.
      </p>
      <ConfirmDialog
        trigger={
          <FancyButton
            type="button"
            variant="destructive"
            className="mt-2 w-32"
            loading={loading}
          >
            Delete
          </FancyButton>
        }
        confirmAction={onDelete}
      />
    </Card>
  );
};
