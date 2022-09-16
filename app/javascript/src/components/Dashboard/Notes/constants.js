import * as yup from "yup";

const CONTACTS_LIST = ["Oliver Smith", "Bilbo Baggins", "Frodo Baggins"];
const TAGS_LIST = [
  "Getting started",
  "Onboarding",
  "User Flow",
  "UX",
  "Bugs",
  "V2",
];

export const CONTACT_OPTIONS = [
  {
    label: "Oliver Smith",
    value: "value1",
  },
  {
    label: "Bilbo Baggins",
    value: "value2",
  },
  {
    label: "Frodo baggins",
    value: "value3",
  },
];

export const TAG_OPTIONS = [
  {
    label: "Getting started",
    value: "value1",
  },
  {
    label: "Onboarding",
    value: "value2",
  },
  {
    label: "UX",
    value: "value3",
  },
  {
    label: "Bugs",
    value: "value4",
  },
  {
    label: "User flow",
    value: "value5",
  },
  {
    label: "V2",
    value: "value6",
  },
];

export const USER_IMG_URL =
  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80";
export const NOTES_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
};

export const NOTES_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  contactList: yup.string().oneOf(CONTACTS_LIST),
  tagList: yup.string().oneOf(TAGS_LIST),
});

export const NOTES_TABLE_COLUMN_DATA = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    width: "30%",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    width: "70%",
  },
];
