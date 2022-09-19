import React from "react";

import { Pane, Typography } from "neetoui";

const NewContactPane = ({ showPane, setShowPane }) => (
  <div>
    <Pane isOpen={showPane} onClose={() => setShowPane(false)}>
      <Pane.Header>
        <Typography>Create a new contact</Typography>
      </Pane.Header>
    </Pane>
  </div>
);

export default NewContactPane;
