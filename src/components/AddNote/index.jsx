import React, { useCallback, useEffect, useRef, useState } from "react";
import { Modal, Container, FooterNote, Form, Icons, Input } from "./styled";
import { nanoid } from "nanoid";

export const AddNote = ({ addNoteHandler, completed, show, onClose }) => {
  // const [addBtn, setAddBtn] = useState(false);
  const [addNotes, setAddNotes] = useState([]);
  const titleRef = useRef("");

  const closeOnEscapeKeyDown = useCallback(
    (e) => {
      if ((e.charCode || e.keyCode) === 27) {
        onClose();
      }
    },
    [onClose]
  );
  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, [closeOnEscapeKeyDown]);

  // if (!show) {
  //   return null;
  // }

  const dateLocal = new Date(Date.now()).toLocaleDateString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const OnChange = ({ target }) => {
    const nameHandler = { ...addNotes, [target.name]: target.value };
    setAddNotes(nameHandler);
    // console.log(target.name, target.value);
    // console.log(setAddNotes({ [e.target.name]: e.target.value }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    let NewTodo = {
      id: nanoid(),
      title: titleRef.current.value,
      todos: addNotes.todos,
      todos1: addNotes.todos1,
      todos2: addNotes.todos2,
      date: dateLocal,
      completed: false,
    };

    if (
      NewTodo?.title?.trim().length > 0 &&
      addNotes?.todos?.trim().length > 0
    ) {
      addNoteHandler(NewTodo);
      setAddNotes("");
      titleRef.current.value = "";
      // setAddBtn((prev) => !prev);
      onClose();
    } else {
      alert(
        `Please fill ${addNotes?.title?.trim().length > 0 ? "" : "title "}${
          addNotes?.todos?.trim().length > 0 ? "" : "todos"
        }
          `
      );
    }
  };

  return (
    <>
      {show ? (
        <Modal onClick={onClose}>
          <Container onClick={(e) => e.stopPropagation()}>
            {/* {addBtn ? ( */}
            <>
              <Form onSubmit={onSubmitHandler} close>
                <label>
                  <input
                    type="text"
                    name="title"
                    placeholder="Enter title ..."
                    ref={titleRef}
                    // value={addNotes.title || ""}
                    // onChange={OnChange}
                    autoFocus
                    required
                  />
                </label>
                <Icons.Close size="20px" onClick={onClose} />
              </Form>
              <Form>
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
                        value={addNotes.todos || ""}
                        onChange={OnChange}
                        required
                      />
                    </label>
                  </li>
                  <li>
                    <label>
                      <Input type="checkbox" checked={completed} disabled />
                    </label>
                    <label>
                      <input
                        type="text"
                        name="todos1"
                        placeholder="Enter todo items ..."
                        value={addNotes.todos1 || ""}
                        onChange={OnChange}
                      />
                    </label>
                  </li>
                  <li>
                    <label>
                      <Input type="checkbox" checked={completed} disabled />
                    </label>
                    <label>
                      <input
                        type="text"
                        name="todos2"
                        placeholder="Enter todo items ..."
                        value={addNotes.todos2 || ""}
                        onChange={OnChange}
                      />
                    </label>
                  </li>
                </ul>
              </Form>
              <FooterNote>
                <p>{dateLocal}</p>
                <Icons.Done onClick={onSubmitHandler} size="20px" />
              </FooterNote>
            </>
            {/* ) : (
        <Icons.AddBtn size="3.5em" onClick={() => setAddBtn((prev) => !prev)} />
        )} */}
          </Container>
        </Modal>
      ) : null}
    </>
  );
};

export default AddNote;
