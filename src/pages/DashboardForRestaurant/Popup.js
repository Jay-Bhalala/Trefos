import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import { Button } from "@mui/material";

function Popup(props) {
  return (
    <Dialog
      open={props.openPopup}
      PaperProps={{ sx: { width: "100%", height: "auto" } }}
    >
      <DialogTitle>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div>{props.title}</div>
          <Button color="error" onClick={() => props.setOpenPopup(false)}>
            X
          </Button>
        </div>
      </DialogTitle>
      <DialogContent>{props.children}</DialogContent>
    </Dialog>
  );
}

export default Popup;
