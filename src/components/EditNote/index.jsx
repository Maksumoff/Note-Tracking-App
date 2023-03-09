import React, { useCallback, useEffect, useRef, useState } from "react";
import { Modal, Container, FooterNote, Form, Icons, Input } from "./styled";

export const EditNote = ({
  addNoteHandler,
  completed,
  show,
  onClose,
  isEditing,
  onOpenEdit,
  onCloseEdit,
  editedTask,
  updateNote,
}) => {
  // const [addBtn, setAddBtn] = useState(false);
  const [updateNotes, setUpdateNotes] = useState(editedTask);
  const titleRef = useRef("");

  const closeOnEscapeKeyDown = useCallback(
    (e) => {
      if ((e.charCode || e.keyCode) === 27) {
        onCloseEdit();
      }
    },
    [onCloseEdit]
  );
  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, [closeOnEscapeKeyDown]);

  const dateLocal = new Date(Date.now()).toLocaleDateString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const OnChange = ({ target }) => {
    const nameHandler = { ...updateNotes, [target.name]: target.value };
    setUpdateNotes(nameHandler);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    updateNote({
      ...editedTask,
      title: updateNotes.title,
      todos: updateNotes.todos,
      todos1: updateNotes.todos1,
      todos2: updateNotes.todos2,
      date: dateLocal + " edited*",
    });
    //  console.log(editedTask);

    onCloseEdit();
  };

  // const onSubmitHandler = (e) => {
  //   e.preventDefault();
  //   let NewTodo = {
  //     id: editedTask.id,
  //     title: titleRef.current.value,
  //     todos: updateNotes.todos,
  //     todos1: updateNotes.todos1,
  //     todos2: updateNotes.todos2,
  //     date: dateLocal,
  //     completed: false,
  //   };

  //   if (
  //     NewTodo?.title?.trim().length > 0 &&
  //     updateNotes?.todos?.trim().length > 0
  //   ) {
  //     updateNote({
  //       ...editedTask,
  //       id: NewTodo.id,
  //       title: NewTodo.title,
  //       todos: NewTodo.todos,
  //     });

  //     setUpdateNotes("");
  //     titleRef.current.value = "";
  //     // setAddBtn((prev) => !prev);
  //     onCloseEdit();

  //     console.log(NewTodo);
  //     // console.log(updateNotes);
  //   } else {
  //     alert(
  //       `Please fill ${updateNotes?.title?.trim().length > 0 ? "" : "title "}${
  //         updateNotes?.todos?.trim().length > 0 ? "" : "todos"
  //       }
  //         `
  //     );
  //   }
  // };

  // console.log(updateNotes.title);
  // console.log(updateNotes.todos);
  // console.log(editedTask.title);
  return (
    <>
      <h1>Edit note</h1>
      {isEditing ? (
        <Modal onClick={onCloseEdit}>
          <Container onClick={(e) => e.stopPropagation()}>
            <Form onSubmit={onSubmitHandler} close>
              <label>
                <input
                  type="text"
                  name="title"
                  placeholder="Enter title ..."
                  // ref={titleRef}
                  // defaultValue={updateNotes.title || ""}
                  value={updateNotes.title || ""}
                  onChange={OnChange}
                  autoFocus
                  required
                />
              </label>
              <Icons.Close size="20px" onClick={onCloseEdit} />
            </Form>
            <Form onSubmit={onSubmitHandler}>
              <ul>
                <li>
                  <label>
                    <Input type="checkbox" checked={completed} disabled />
                  </label>
                  <label>
                    <input
                      type="text"
                      name="todos"
                      placeholder="Enter todo items ..."
                      value={updateNotes.todos || ""}
                      onChange={OnChange}
                      required
                    />
                  </label>
                </li>
                {updateNotes.todos1 && (
                  <li>
                    <label>
                      <Input type="checkbox" checked={completed} disabled />
                    </label>
                    <label>
                      <input
                        type="text"
                        name="todos1"
                        placeholder="Enter todo items ..."
                        value={updateNotes.todos1 || ""}
                        onChange={OnChange}
                      />
                    </label>
                  </li>
                )}
                {updateNotes.todos2 && (
                  <li>
                    <label>
                      <Input type="checkbox" checked={completed} disabled />
                    </label>
                    <label>
                      <input
                        type="text"
                        name="todos2"
                        placeholder="Enter todo items ..."
                        value={updateNotes.todos2 || ""}
                        onChange={OnChange}
                      />
                    </label>
                  </li>
                )}
              </ul>
            </Form>
            <FooterNote>
              <p>{dateLocal}</p>
              <Icons.Done onClick={onSubmitHandler} size="1.2em" />
            </FooterNote>
          </Container>
        </Modal>
      ) : null}
    </>
  );
};

export default EditNote;
