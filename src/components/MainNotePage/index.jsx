import React, { useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { Icons } from "../AddNote/styled";
import NoteList from "../NoteList";
import { Container, Wrapper } from "./styled";

const MainPage = () => {
  const [notes, setNotes] = useLocalStorage("notes", []);
  const [show, setShow] = useState(false);
  const [askDelete, setAskDelete] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(null);
  const [deletedNote, setDeletedNote] = useState(null);
  const [addState, setAddState] = useState(0);

  const addNoteHandler = (note) => {
    setNotes((prev) => [...prev, note]);
    // console.log(note);
  };

  const deleteHandler = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
    setAskDelete(false);
    // console.log(id);
  };

  const updateNote = (updateNote) => {
    setNotes((prev) =>
      prev.map((notes) =>
        notes.id === updateNote.id
          ? {
              ...notes,
              // id: updateNote.id,
              id: Date.now(),
              title: updateNote.title,
              todos: updateNote.todos,
              todos1: updateNote.todos1,
              todos2: updateNote.todos2,
              date: updateNote.date,
              completed: updateNote.completed,
            }
          : notes
      )
    );
  };

  const enterEditMode = ({
    id,
    title,
    todos,
    todos1,
    todos2,
    date,
    completed,
  }) => {
    setEditedTask({ id, title, todos, todos1, todos2, date, completed });
    setIsEditing(true);
    todos2 && setAddState((prev) => prev + 2);
    // console.log(todos2);
    // console.log(addState + "notes add state))");
  };

  const askDeleteMode = ({ id, title }) => {
    setDeletedNote({ id, title });
    setAskDelete(true);
  };

  return (
    <Container>
      <Wrapper>
        <h1 style={{ color: "#0d263b", padding: "10px" }}>Main page </h1>
        <Icons.AddBtn size="3.2em" onClick={() => setShow(true)} />
      </Wrapper>
      <NoteList
        notes={notes}
        addNoteHandler={addNoteHandler}
        deleteHandler={deleteHandler}
        show={show}
        onClose={() => setShow(false)}
        isEditing={isEditing}
        onOpenEdit={() => setIsEditing(true)}
        onCloseEdit={() => setIsEditing(false)}
        enterEditMode={enterEditMode}
        editedTask={editedTask}
        updateNote={updateNote}
        askDelete={askDelete}
        onAskDelete={() => setAskDelete(true)}
        askDeleteMode={askDeleteMode}
        onAskCancel={() => setAskDelete(false)}
        deletedNote={deletedNote}
        addState={addState}
        setAddState={setAddState}
      />
    </Container>
  );
};

export default MainPage;
