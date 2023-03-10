import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Modal,
  Container,
  FooterNote,
  Form,
  Icons,
  Input,
  InputField,
} from "./styled";

export const EditNote = ({
  completed,
  isEditing,
  onCloseEdit,
  editedTask,
  updateNote,
}) => {
  const [updateNotes, setUpdateNotes] = useState(editedTask);
  const titleRef = useRef("");
  const todosRef = useRef("");
  const todos1Ref = useRef("");
  const todos2Ref = useRef("");

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
    if (
      titleRef?.current?.value?.trim().length > 0 &&
      todosRef?.current?.value?.trim().length > 0
    ) {
      updateNote({
        ...editedTask,
        title: titleRef.current.value,
        todos: todosRef.current.value,
        todos1: todos1Ref.current.value,
        todos2: todos2Ref.current.value,
        date: dateLocal + " edited*",
      });
      onCloseEdit();
    } else {
      alert(
        `Please fill ${
          titleRef?.current?.value?.trim().length > 0 ? "" : "title "
        }${
          todosRef?.current?.value?.trim().length > 0
            ? ""
            : "at least one todo field"
        }
          `
      );
    }
  };

  return (
    <>
      {/* {isEditing ? ( */}
      <Modal onClick={onCloseEdit}>
        <Container onClick={(e) => e.stopPropagation()}>
          <Form onSubmit={onSubmitHandler} close>
            <label style={{ flex: "1", marginRight: "10px" }}>
              <InputField
                type="text"
                name="title"
                placeholder="Enter title ..."
                ref={titleRef}
                defaultValue={updateNotes.title || ""}
                // value={updateNotes.title || ""}
                // onChange={OnChange}
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
                <label style={{ flex: "1", marginRight: "42px" }}>
                  <InputField
                    type="text"
                    name="todos"
                    placeholder="Enter todo items ..."
                    ref={todosRef}
                    defaultValue={updateNotes.todos || ""}
                    // value={updateNotes.todos || ""}
                    // onChange={OnChange}
                    required
                  />
                </label>
              </li>
              {updateNotes.todos1 && (
                <li>
                  <label>
                    <Input type="checkbox" checked={completed} disabled />
                  </label>
                  <label style={{ flex: "1", marginRight: "42px" }}>
                    <InputField
                      type="text"
                      name="todos1"
                      placeholder="Enter todo items ..."
                      ref={todos1Ref}
                      defaultValue={updateNotes.todos1 || ""}
                      // value={updateNotes.todos1 || ""}
                      // onChange={OnChange}
                    />
                  </label>
                </li>
              )}
              {updateNotes.todos2 && (
                <li>
                  <label>
                    <Input type="checkbox" checked={completed} disabled />
                  </label>
                  <label style={{ flex: "1", marginRight: "42px" }}>
                    <InputField
                      type="text"
                      name="todos2"
                      placeholder="Enter todo items ..."
                      ref={todos2Ref}
                      defaultValue={updateNotes.todos2 || ""}
                      // value={updateNotes.todos2 || ""}
                      // onChange={OnChange}
                    />
                  </label>
                </li>
              )}
            </ul>
          </Form>
          <FooterNote>
            <p>{dateLocal}</p>
            <Icons.Done onClick={onSubmitHandler} size="20px" />
          </FooterNote>
        </Container>
      </Modal>

      {/* ) : null} */}
    </>
  );
};

export default EditNote;
