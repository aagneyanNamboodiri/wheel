import React from "react";

import { MenuVertical } from "neetoicons";
import { Dropdown } from "neetoui";

const DropdownMenu = ({ note, handleNoteDeletion }) => (
  <Dropdown buttonStyle="text" icon={MenuVertical}>
    <li>Edit</li>
    <li onClick={() => handleNoteDeletion(note.id)}>Delete</li>
  </Dropdown>
);

export default DropdownMenu;
