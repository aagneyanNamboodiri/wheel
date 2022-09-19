import React from "react";

import { MenuHorizontal } from "neetoicons";
import { Typography, Dropdown, Avatar } from "neetoui";

const MenuIcon = () => (
  <Dropdown buttonStyle="text" icon={MenuHorizontal}>
    <li>Edit</li>
    <li>Delete</li>
  </Dropdown>
);

export const USER_IMG_URL =
  "https://www.gravatar.com/avatar/1b8fabaa8d66250a7049bdb9ecf44397?s=250&d=mm&r=x";

export const COLUMN_DATA = [
  {
    title: "Name & Role",
    dataIndex: "name",
    key: "name",
    render: (name, { role, USER_IMG_URL }) => (
      <div className="flex">
        <Avatar />
        <div>
          <Typography
            className="pl-2"
            style="h4"
            user={{
              imageUrl: USER_IMG_URL,
              name,
            }}
          >
            {name}
          </Typography>
          <Typography className="pl-2 text-gray-500" style="body3">
            {role}
          </Typography>
        </div>
      </div>
    ),
    width: 150,
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    width: 200,
    ellipsis: {
      showTitle: false,
    },
  },
  {
    title: "Created at",
    dataIndex: "created_at",
    key: "created_at",
    ellipsis: {
      showTitle: false,
    },
    width: 75,
  },
  {
    dataIndex: "icon_button",
    fixed: "right",
    key: "icon_button",
    render: MenuIcon,
    title: "",
    width: 150,
  },
];

export const ROW_DATA = [
  {
    name: "Oliver Smith",
    email: "oliver@example.com",
    created_at: "August 17, 2022",
    role: "Software Engineer",
  },
  {
    name: "Jacon Jones",
    email: "jacob@example.com",
    created_at: "August 17, 2022",
    role: "Full stack developer",
  },
  {
    name: "Ronald Richards",
    email: "ronald@example.com",
    created_at: "August 17, 2022",
    role: "Tech Lead",
  },
];

export const ROLES = [
  {
    label: "Software Engineer",
    value: "value1",
  },
  {
    label: "Full Stack Developer",
    value: "value2",
  },
  {
    label: "Tech Lead",
    value: "value3",
  },
];
