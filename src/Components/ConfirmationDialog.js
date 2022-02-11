import React, { useState } from "react";
import { useDialog } from "react-mui-dialog";
import { ReminderForm } from "./ReminderForm";

export const Dialog = ({ children }) => {
  const { openDialog, closeDialog } = useDialog();
  const [description, setDescription] = useState();
  const [city, setCity] = useState();

  const handleClick = () =>
    openDialog({
      customContent: (
        <ReminderForm
          onCancel={closeDialog}
          setCity={(e) => setCity(e.target.value)}
          setDescription={(e) => setDescription(e.target.value)}
        />
      ),
    });

  return <div onClick={handleClick}>{children}</div>;
};

export default Dialog;
