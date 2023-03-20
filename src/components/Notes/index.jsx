import { useCallback, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import NotePage from "../NotePage";
import {
  Button,
  Container,
  FooterNote,
  Icons,
  IconsWrapper,
  Input,
  Modal,
  TitleWrapper,
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
  showDetailsMode,
  showDetails,
  onShowDetails,
  onHideDetails,
  details,
}) => {
  const closeOnEscapeKeyDown = useCallback(
    (e) => {
      if ((e.charCode || e.keyCode) === 27) {
        onHideDetails();
        onAskCancel();
      }
    },
    [onAskCancel, onHideDetails]
  );
  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, [closeOnEscapeKeyDown]);

  // const navigate = useNavigate();

  const editMode = (note) => {
    enterEditMode(note);
    onOpenEdit();
  };

  const deleteMode = (note) => {
    askDeleteMode(note);
    onAskDelete();
  };

  const detailsMode = (note) => {
    showDetailsMode(note);
    onShowDetails();
  };

  // console.log(details?.title);

  return (
    <Container>
      {/* <NotePage details={details} /> */}

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
          <Icons.Details
            size="20px"
            onClick={() => {
              // console.log(details?.title);
              // navigate("/note");
              return detailsMode({ id, title, todos, todos1, todos2 });

              // return navigate("/note");
            }}
          />
          {showDetails ? (
            <Modal onClick={() => onHideDetails()}>
              <Wrapper details onClick={(e) => e.stopPropagation()}>
                <TitleWrapper>
                  <h2>Details of: {details?.title} </h2>
                  <Icons.Close size="20px" onClick={() => onHideDetails()} />
                </TitleWrapper>
                {/* 
                {details?.todos && <h3>First todo is: {details?.todos} </h3>}
                {details?.todos1 && <h4>Second todo is: {details?.todos1} </h4>}
                {details?.todos2 && <h5>Third todo is: {details?.todos2} </h5>} */}

                {details?.todos && <p>First todo is: {details?.todos} </p>}
                {details?.todos1 && <p>Second todo is: {details?.todos1} </p>}
                {details?.todos2 && <p>Third todo is: {details?.todos2} </p>}
              </Wrapper>
            </Modal>
          ) : null}
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
                <h1>
                  Are you sure to delete:
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
