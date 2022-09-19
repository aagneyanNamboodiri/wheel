import React, { useState } from "react";

import { Table as NeetoUITable, Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import { COLUMN_DATA, ROW_DATA } from "./constants";
import HeaderMenu from "./HeaderMenu";
import NewContactPane from "./Pane/Create";

const Contact = () => {
  const [menuBarVisibility, setMenuBarVisibility] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showNewContactPane, setShowNewContactPane] = useState(false);
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
          columnData={COLUMN_DATA}
          rowData={ROW_DATA}
        />
        <NewContactPane
          setShowPane={setShowNewContactPane}
          showPane={showNewContactPane}
        />
      </Container>
    </>
  );
};

export default Contact;
