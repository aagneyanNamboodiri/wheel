import { MenuIcon, UserData } from "./TableIconRenders";

export const USER_IMG_URL =
  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80";

export const COLUMN_DATA = [
  {
    title: "Name & Role",
    dataIndex: "name_and_role",
    key: "name_and_role",
    render: UserData,
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
    name_and_role: "Oliver Smith",
    email: "oliver@example.com",
    created_at: "August 17, 2022",
  },
  {
    name_and_role: "Bilbo Baggins",
    email: "bilbo@baggins.com",
    created_at: "August 17, 2022",
  },
  {
    name_and_role: "Frodo Baggins",
    email: "frodo@baggins.com",
    created_at: "August 17, 2022",
  },
];
