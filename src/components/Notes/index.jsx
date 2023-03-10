import { Container, FooterNote, Icons, IconsWrapper, Input } from "./styled";

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
}) => {
  const editMode = (note) => {
    enterEditMode(note);

    onOpenEdit();
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
          <Icons.Trash size="20px" onClick={() => deleteHandler(id)} />
        </IconsWrapper>
      </FooterNote>
    </Container>
  );
};

export default Notes;
