import React from "react";

import { MenuHorizontal } from "neetoicons";
import { Typography, Dropdown, Avatar } from "neetoui";
import * as yup from "yup";

export const USER_IMG_URL =
  "https://www.gravatar.com/avatar/1b8fabaa8d66250a7049bdb9ecf44397?s=250&d=mm&r=x";

export const buildColumnData = setShowDeleteAlert => [
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
    render: () => (
      <Dropdown buttonStyle="text" icon={MenuHorizontal}>
        <li>Edit</li>
        <li onClick={() => setShowDeleteAlert(true)}>Delete</li>
      </Dropdown>
    ),
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
    name: "Jacob Jones",
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

export const ROLE_LIST = [
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

export const CONTACTS_FORM_VALIDATION_SCHEMA = yup.object().shape({
  firstname: yup.string().required("First name is required"),
  lastname: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Please enter a valid E-mail address")
    .required("Email address is required"),
  role: yup
    .object()
    .nullable()
    .shape({
      label: yup.string().oneOf(ROLE_LIST.map(role => role.label)),
      value: yup.string().oneOf(ROLE_LIST.map(role => role.value)),
    })
    .required("Please select a role"),
});

export const CONTACTS_FORM_INITIAL_FORM_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  role: null,
};
