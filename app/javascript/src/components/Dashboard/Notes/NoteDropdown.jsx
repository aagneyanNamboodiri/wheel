import React from "react";

import { MenuVertical } from "@bigbinary/neeto-icons";
import { Dropdown } from "@bigbinary/neetoui";

const NoteDropdown = () => (
  <Dropdown buttonStyle="text" icon={MenuVertical}>
    <li>Edit</li>
    <li>Delete</li>
  </Dropdown>
);

export default NoteDropdown;
