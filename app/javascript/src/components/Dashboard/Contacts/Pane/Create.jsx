import React from "react";

import { Pane, Typography } from "neetoui";

import ContactForm from "./Form";

const NewContactPane = ({ showPane, onClose }) => (
  <div>
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Create New Contact
        </Typography>
      </Pane.Header>
      <ContactForm onClose={onClose} />
    </Pane>
  </div>
);

export default NewContactPane;
