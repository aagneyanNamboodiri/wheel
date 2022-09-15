import React from "react";

import { MenuVertical } from "neetoicons";
import { Dropdown } from "neetoui";

const DropdownMenu = () => (
  <Dropdown buttonStyle="text" icon={MenuVertical}>
    <li>Edit</li>
    <li>Delete</li>
  </Dropdown>
);

export default DropdownMenu;
