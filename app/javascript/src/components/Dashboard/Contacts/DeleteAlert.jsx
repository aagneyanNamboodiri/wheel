import React from "react";

import { Alert, Toastr } from "neetoui";

const DeleteAlert = ({ onClose, setShowDeleteAlert }) => {
  const deleteNotePrompt = "Delete this Contact?";
  const deleteNoteMessage =
    "Are you sure you want to continue? This cannot be undone.";
  const toasterSuccess = "Contact deleted successfully";

  const deleteToaster = () => {
    Toastr.success(toasterSuccess);
    setShowDeleteAlert(false);
  };

  return (
    <Alert
      isOpen
      message={deleteNoteMessage}
      title={deleteNotePrompt}
      onClose={onClose}
      onSubmit={deleteToaster}
    />
  );
};

export default DeleteAlert;
