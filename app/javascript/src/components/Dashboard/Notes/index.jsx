import React, { useState, useEffect } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Button, PageLoader } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import notesApi from "apis/notes";
import EmptyState from "components/Common/EmptyState";

import DeleteAlert from "./DeleteAlert";
import HeaderMenu from "./HeaderMenu";
import Note from "./Note";
import NewNotePane from "./Pane/Create";

const Notes = () => {
  const [loading, setLoading] = useState(true);
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedNoteId, setSelectedNoteId] = useState(-1);
  const [notes, setNotes] = useState([]);
  const [menuBarVisibility, setMenuBarVisibility] = useState(false);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      const { data } = await notesApi.fetch();
      setNotes(data.notes);
    } catch (error) {
      logger.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleNoteDeletion = noteId => {
    setSelectedNoteId(noteId);
    setShowDeleteAlert(true);
  };

  if (loading) {
    return <PageLoader />;
  }

  return (
    <>
      <HeaderMenu showMenu={menuBarVisibility} />
      <Container>
        <Header
          title="All Notes"
          actionBlock={
            <Button
              icon="ri-add-line"
              label="Add New Note"
              onClick={() => setShowNewNotePane(true)}
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
        {notes.length ? (
          notes.map(note => (
            <Note
              handleNoteDeletion={handleNoteDeletion}
              key={note.id}
              note={note}
            />
          ))
        ) : (
          <EmptyState
            image={EmptyNotesListImage}
            primaryAction={() => setShowNewNotePane(true)}
            primaryActionLabel="Add New Note"
            subtitle="Add your notes to send customized emails to them."
            title="Looks like you don't have any notes!"
          />
        )}
        <NewNotePane
          fetchNotes={fetchNotes}
          setShowPane={setShowNewNotePane}
          showPane={showNewNotePane}
        />
        {showDeleteAlert && (
          <DeleteAlert
            refetch={fetchNotes}
            selectedNoteIds={selectedNoteId}
            setSelectedNoteIds={setSelectedNoteId}
            onClose={() => setShowDeleteAlert(false)}
          />
        )}
      </Container>
    </>
  );
};

export default Notes;
