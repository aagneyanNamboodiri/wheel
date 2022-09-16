import React, { useState } from "react";

import { Table as NeetoUITable, Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import { COLUMN_DATA } from "./constants";
import HeaderMenu from "./HeaderMenu";

const Contact = () => {
  const [menuBarVisibility, setMenuBarVisibility] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <HeaderMenu showMenu={menuBarVisibility} />
      <Container>
        <Header
          actionBlock={<Button icon="ri-add-line" label="Add New Contact" />}
          title="All Contacts"
          menuBarToggle={() => {
            setMenuBarVisibility(prevState => !prevState);
          }}
          searchProps={{
            placeholder: "Search name, Email, Phone Number, Ect.",
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        <NeetoUITable allowRowClick columnData={COLUMN_DATA} rowData={[]} />
      </Container>
    </>
  );
};

export default Contact;
