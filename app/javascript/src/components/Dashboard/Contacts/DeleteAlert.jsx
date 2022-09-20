import React from "react";

import { Alert, Toastr } from "neetoui";

const DeleteAlert = ({ onClose, setShowDeleteAlert }) => {
  const deleteToaster = () => {
    Toastr.success("Contact deleted successfully");
    setShowDeleteAlert(false);
  };

  return (
    <Alert
      isOpen
      message={"Delete this Contact?"}
      title={"Are you sure you want to continue? This cannot be undone."}
      onClose={onClose}
      onSubmit={deleteToaster}
    />
  );
};

export default DeleteAlert;
