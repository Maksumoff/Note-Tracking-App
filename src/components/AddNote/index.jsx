import React, { useCallback, useEffect, useRef, useState } from "react";
import { Modal, Container, FooterNote, Form, Icons, Input } from "./styled";
import { InputField } from "../EditNote/styled";

export const AddNote = ({ addNoteHandler, completed, show, onClose }) => {
  // const [addNotes, setAddNotes] = useState([]);
  const titleRef = useRef("");
  const todosRef = useRef("");
  const todos1Ref = useRef("");
  const todos2Ref = useRef("");

  const [addState, setaddState] = useState(0);

  const closeOnEscapeKeyDown = useCallback(
    (e) => {
      if ((e.charCode || e.keyCode) === 27) {
        onClose();
        setaddState(0);
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

  const dateLocal = new Date(Date.now()).toLocaleDateString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  // const OnChange = ({ target }) => {
  //   const nameHandler = { ...addNotes, [target.name]: target.value };
  //   setAddNotes(nameHandler);
  // };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    let NewTodo = {
      // id: nanoid(),
      id: Date.now(),
      title: titleRef.current.value,
      todos: todosRef.current.value,
      todos1: todos1Ref.current.value,
      todos2: todos2Ref.current.value,
      date: dateLocal,
      completed: false,
    };

    if (
      titleRef?.current?.value?.trim().length > 0 &&
      todosRef?.current?.value?.trim().length > 0
    ) {
      addNoteHandler(NewTodo);
      setaddState(0);
      onClose();
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
      {show ? (
        <Modal
          onClick={() => {
            onClose();
            return setaddState(0);
          }}
        >
          <Container onClick={(e) => e.stopPropagation()}>
            <Form onSubmit={onSubmitHandler} close>
              <label>
                <InputField
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
              <Icons.Close
                size="20px"
                onClick={() => {
                  onClose();
                  return setaddState(0);
                }}
              />
            </Form>

            <Form onSubmit={onSubmitHandler}>
              <ul>
                <li>
                  <label>
                    <Input type="checkbox" checked={completed} disabled />
                  </label>
                  <label>
                    <InputField
                      type="text"
                      name="todos"
                      placeholder="Enter todo items ..."
                      ref={todosRef}
                      // value={addNotes.todos || ""}
                      // onChange={OnChange}
                      required
                    />
                  </label>

                  {/* {addState < 2 ? (
                    <Icons.AddTodo
                      size="20px"
                      onClick={() => setaddState((prev) => prev + 1)}
                    />
                  ) : null} */}

                  {addState < 2 ? (
                    <Icons.AddTodo
                      size="20px"
                      onClick={() => setaddState((prev) => prev + 1)}
                    />
                  ) : (
                    <Icons.AddTodo size="20px" notallowed="true" />
                  )}
                </li>
                {addState > 0 ? (
                  <li>
                    <label>
                      <Input type="checkbox" checked={completed} disabled />
                    </label>
                    <label>
                      <InputField
                        type="text"
                        name="todos1"
                        placeholder="Enter todo items ..."
                        ref={todos1Ref}
                        // value={addNotes.todos1 || ""}
                        // onChange={OnChange}
                      />
                    </label>
                  </li>
                ) : null}
                {addState > 1 ? (
                  <li>
                    <label>
                      <Input type="checkbox" checked={completed} disabled />
                    </label>
                    <label>
                      <InputField
                        type="text"
                        name="todos2"
                        placeholder="Enter todo items ..."
                        ref={todos2Ref}
                        // value={addNotes.todos2 || ""}
                        // onChange={OnChange}
                      />
                    </label>
                  </li>
                ) : null}
              </ul>
            </Form>

            <FooterNote>
              <small>{dateLocal}</small>
              <Icons.Done onClick={onSubmitHandler} size="20px" />
            </FooterNote>
          </Container>
        </Modal>
      ) : null}
    </>
  );
};

export default AddNote;
