import { useCallback, useEffect } from "react";
import {
  Button,
  Container,
  FooterNote,
  Icons,
  IconsWrapper,
  Input,
  Modal,
  Wrapper,
} from "./styled";

export const Notes = ({
  id,
  title,
  todos,
  todos1,
  todos2,
  date,
  completed,
  deleteHandler,
  enterEditMode,
  onOpenEdit,
  askDelete,
  onAskDelete,
  onAskCancel,
  askDeleteMode,
  deletedNote,
}) => {
  const closeOnEscapeKeyDown = useCallback(
    (e) => {
      if ((e.charCode || e.keyCode) === 27) {
        onAskCancel();
      }
    },
    [onAskCancel]
  );
  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, [closeOnEscapeKeyDown]);

  const editMode = (note) => {
    enterEditMode(note);
    onOpenEdit();
  };

  const deleteMode = (note) => {
    askDeleteMode(note);
    onAskDelete();
  };

  return (
    <Container>
      <h1
        className="inline
      "
      >
        {title}
      </h1>
      <ul>
        <li>
          <label>
            <Input type="checkbox" checked={completed} disabled />
            <p className="inline">{todos}</p>
          </label>
        </li>
        {todos1 && (
          <li>
            <label>
              <Input type="checkbox" checked={completed} disabled />
              <p className="inline">{todos1}</p>
            </label>
          </li>
        )}
        {todos2 && (
          <li>
            <label>
              <Input type="checkbox" checked={completed} disabled />
              <p className="inline">{todos2}</p>
            </label>
          </li>
        )}
      </ul>
      <FooterNote>
        <small>{date}</small>
        <IconsWrapper>
          <Icons.Edit
            size="20px"
            onClick={() =>
              editMode({ id, title, todos, todos1, todos2, date, completed })
            }
          />
          {/* <Icons.Trash size="20px" onClick={() => deleteHandler(id)} /> */}
          <Icons.Trash size="20px" onClick={() => deleteMode({ id, title })} />

          {askDelete ? (
            <Modal onClick={() => onAskCancel()}>
              <Wrapper onClick={(e) => e.stopPropagation()}>
                <h1 style={{ color: "#0d263b" }}>
                  Are you sure to delete:{" "}
                  <span style={{ color: "#cf142b" }}>
                    {" "}
                    "{deletedNote?.title}" ?
                  </span>{" "}
                </h1>

                <Button onClick={() => deleteHandler(deletedNote?.id)}>
                  Yes, delete please
                </Button>
                <Button onClick={() => onAskCancel()}>Cancel</Button>
              </Wrapper>
            </Modal>
          ) : null}
        </IconsWrapper>
      </FooterNote>
    </Container>
  );
};

export default Notes;
