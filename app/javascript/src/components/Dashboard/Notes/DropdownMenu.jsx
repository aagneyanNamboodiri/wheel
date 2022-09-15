import React, { useState } from "react";

import { MenuVertical } from "neetoicons";
import { Dropdown } from "neetoui";

import DeleteAlert from "./DeleteAlert";

const DropdownMenu = ({ refetch, noteId, setSelectedNoteIds }) => {
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  const handleDelete = () => {
    setShowDeleteAlert(true);
  };
  return (
    <>
      <Dropdown buttonStyle="text" icon={MenuVertical}>
        <li>Edit</li>
        <li onClick={handleDelete}>Delete</li>
      </Dropdown>
      {showDeleteAlert && (
        <DeleteAlert
          refetch={refetch}
          selectedNoteIds={[noteId]}
          setSelectedNoteIds={setSelectedNoteIds}
          onClose={() => setShowDeleteAlert(false)}
        />
      )}
    </>
  );
};

export default DropdownMenu;
