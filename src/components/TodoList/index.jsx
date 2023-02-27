import React from "react";
import { Container, Input, InputWrapper, Span } from "./styled";

export const Todo = ({ todo, removeTodo, handleChange, enterEditMode }) => {
  const handleCheckboxChange = () => {
    if (todo.done) return null;
    handleChange(todo.id);
  };

  return (
    <Container>
      <InputWrapper>
        <InputWrapper flex="true">
          <Input
            type="checkbox"
            checked={todo.done}
            onChange={() => handleCheckboxChange(todo.id)}
          />
          <Span
            textOverflow="true"
            style={todo.done ? { textDecoration: "line-through" } : null}
            onClick={() => handleCheckboxChange()}
          >
            {todo.title}
          </Span>
        </InputWrapper>
        <InputWrapper flexEnd="true">
          <Span edit onClick={() => handleChange(todo.id)}>
            {todo.done ? "undo" : "redo"}
          </Span>
          <Span edit onClick={() => enterEditMode(todo)}>
            edit
          </Span>
          <Span onClick={() => removeTodo(todo.id)}>x</Span>
          <button type="reset">reset</button>
        </InputWrapper>
      </InputWrapper>
    </Container>
  );
};

// import React from "react";
// import Button from "../Button";
// import Checkbox from "../Checkbox";

// export const List = ({list, onChangeBox, handleDel}) => (
// <ul>
//   {
//   list.map(item =>(
//   <li
//   key={item.id}
//   style={{textDecoration: item.done ? 'line-through': null}
// }
//   >
//     <Checkbox
//     onClick={()=> onChangeBox(item)}
//     defaultChecked={item.done}
//     />
//     {item.name}
//     <Button onClick={handleDel}>Delete</Button>
//     </li>
//   ))}
// </ul>
//   );

// export default List;
