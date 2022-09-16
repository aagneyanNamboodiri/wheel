import React from "react";

import { MenuVertical } from "neetoicons";
import { Dropdown } from "neetoui";

const DropdownMenu = ({ note, handleNoteDeletion }) => {
  const handleDelete = () => {
    handleNoteDeletion(note.id);
  };
  return (
    <Dropdown buttonStyle="text" icon={MenuVertical}>
      <li>Edit</li>
      <li onClick={handleDelete}>Delete</li>
    </Dropdown>
  );
};

export default DropdownMenu;
