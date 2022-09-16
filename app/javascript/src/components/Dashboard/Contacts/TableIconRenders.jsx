import React from "react";

import { MenuHorizontal } from "neetoicons";
import { Typography, Dropdown, Avatar } from "neetoui";

import { USER_IMG_URL } from "./constants";

const MenuIcon = () => (
  <Dropdown buttonStyle="text" icon={MenuHorizontal}>
    <li>Edit</li>
    <li>Delete</li>
  </Dropdown>
);

const UserData = () => (
  <div className="flex">
    <Avatar />
    <div>
      <Typography
        className="pl-2"
        style="h4"
        user={{
          imageUrl: USER_IMG_URL,
          name: "Oliver",
        }}
      >
        Aagneyan
      </Typography>
      <Typography className="pl-2 text-gray-500" style="body3">
        Role
      </Typography>
    </div>
  </div>
);

export { MenuIcon, UserData };
