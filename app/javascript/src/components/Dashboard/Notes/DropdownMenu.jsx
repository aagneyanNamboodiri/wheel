import React from "react";

import { MenuVertical } from "neetoicons";
import { Dropdown } from "neetoui";

const NoteDropdown = () => (
  <Dropdown buttonStyle="text" icon={MenuVertical}>
    <li>Edit</li>
    <li>Delete</li>
  </Dropdown>
);

export default NoteDropdown;
