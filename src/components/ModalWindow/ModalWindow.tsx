import React, { FunctionComponent } from "react";
import { Dialog } from "@mui/material";

type ModalWindowProps = {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
};

const ModalWindow: FunctionComponent<ModalWindowProps> = ({
  children,
  open,
  onClose,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          backgroundColor: "rgba(15, 15, 20, 0.95)",
          border: "1px solid rgba(244, 197, 66, 0.2)",
          borderRadius: "12px",
        },
      }}
      sx={{
        "& .MuiBackdrop-root": {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
        },
      }}
    >
      {children}
    </Dialog>
  );
};

export default ModalWindow;
