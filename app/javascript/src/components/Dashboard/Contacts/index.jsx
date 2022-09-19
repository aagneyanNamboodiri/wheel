import React, { useState } from "react";

import { Table as NeetoUITable, Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import { buildColumnData, ROW_DATA } from "./constants";
import DeleteAlert from "./DeleteAlert";
import HeaderMenu from "./HeaderMenu";
import NewContactPane from "./Pane/NewContactPane";

const Contact = () => {
  const [menuBarVisibility, setMenuBarVisibility] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showNewContactPane, setShowNewContactPane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  return (
    <>
      <HeaderMenu showMenu={menuBarVisibility} />
      <Container>
        <Header
          title="All Contacts"
          actionBlock={
            <Button
              icon="ri-add-line"
              label="Add New Contact"
              onClick={() => setShowNewContactPane(true)}
            />
          }
          menuBarToggle={() => {
            setMenuBarVisibility(prevState => !prevState);
          }}
          searchProps={{
            placeholder: "Search name, Email, Phone Number, Ect.",
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        <NeetoUITable
          allowRowClick
          columnData={buildColumnData(setShowDeleteAlert)}
          rowData={ROW_DATA}
        />
        <NewContactPane
          showPane={showNewContactPane}
          onClose={() => setShowNewContactPane(false)}
        />
        {showDeleteAlert && (
          <DeleteAlert
            setShowDeleteAlert={setShowDeleteAlert}
            onClose={() => setShowDeleteAlert(false)}
          />
        )}
      </Container>
    </>
  );
};

export default Contact;
