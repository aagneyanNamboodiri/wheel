import React from "react";

import { Formik, Form } from "formik";
import { Select } from "neetoui";
import { Input } from "neetoui/formik";

import { ROLES } from "../constants";

const ContactForm = () => (
  <Formik>
    <Form>
      <div className="space-y-4 p-6">
        <div className="flex space-x-5">
          <Input required label="First Name" name="firstName" />
          <Input required label="Last Name" name="lastName" />
        </div>
        <Input
          required
          className=" w-full flex-grow-0"
          label="Email"
          name="email"
        />
        <Select
          isClearable
          isSearchable
          label="Select"
          name="ValueList"
          options={ROLES}
          placeholder="Select a Role"
        />
      </div>
    </Form>
  </Formik>
);

export default ContactForm;
