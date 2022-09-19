import React from "react";

import { Pane, Typography } from "neetoui";

import ContactForm from "./Form";

const NewContactPane = ({ showPane, setShowPane }) => (
  <div>
    <Pane isOpen={showPane} onClose={() => setShowPane(false)}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Create New Contact
        </Typography>
      </Pane.Header>
      <ContactForm />
    </Pane>
  </div>
);

export default NewContactPane;
