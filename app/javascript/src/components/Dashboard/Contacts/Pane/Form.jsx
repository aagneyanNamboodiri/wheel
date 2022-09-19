import React, { useState } from "react";

import { Formik, Form } from "formik";
import { Pane, Toastr, Button } from "neetoui";
import { Input, Select } from "neetoui/formik";

import {
  CONTACTS_FORM_VALIDATION_SCHEMA,
  ROLE_LIST,
  CONTACTS_FORM_INITIAL_FORM_VALUES,
} from "../constants";

const ContactForm = ({ onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    Toastr.success("New contact added");
    onClose();
  };

  return (
    <Formik
      initialValues={CONTACTS_FORM_INITIAL_FORM_VALUES}
      validateOnBlur={submitted}
      validateOnChange={submitted}
      validationSchema={CONTACTS_FORM_VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="w-full">
          <Pane.Body className="space-y-8">
            <div className="flex w-full flex-row space-x-6">
              <Input
                required
                className="w-full flex-grow-0"
                label="First Name"
                name="firstname"
                placeholder="Enter first name"
              />
              <Input
                required
                className="w-full flex-grow-0"
                label="Last Name"
                name="lastname"
                placeholder="Enter last name"
              />
            </div>
            <Input
              required
              className="w-full flex-grow-0"
              label="Email Address"
              name="email"
              placeholder="Enter your email address"
            />
            <Select
              isSearchable
              required
              className="w-full flex-grow-0"
              label="Role"
              name="role"
              options={ROLE_LIST}
              placeholder="Select Role"
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              className="mr-3"
              disabled={isSubmitting}
              label="Save Changes"
              loading={isSubmitting}
              size="large"
              style="primary"
              type="submit"
            />
            <Button label="Reset" size="large" style="text" type="reset" />
          </Pane.Footer>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
