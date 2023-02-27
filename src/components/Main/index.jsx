import React, { useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { EditTask } from "../EditTask";
import { AddTodo } from "../AddTodo";
import { Todo } from "../TodoList";
import { Text } from "./styled";

export const TodoContainer = () => {
  const [todos, setTodos] = useLocalStorage("todo", []);
  const [editedTask, setEditedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const addTask = (task) => {
    console.log(task + "okey");
    const newTodoList = [...todos, task];
    setTodos(newTodoList);
    // setTodos(prev=> [...prev, task])
  };

  const removeTodo = (id) => {
    const newTodoList = todos.filter((todo) => todo.id !== id);
    setTodos(newTodoList);
    // setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleChange = (id) => {
    const newTodoList = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done };
      } else {
        return todo;
      }
    });
    setTodos(newTodoList);
    // setTodos(prev=> prev.map(todo => (
    //   todo.id === id
    //   ? {...todo, done: !todo.done}
    //   : todo
    //   )))
  };

  const handleCancel = (id) => {
    const newTodoList = todos.map((todo) => {
      if (todo.id === id) {
        console.log(todo.title);
        return { ...todo, title: todo.title };
      } else {
        // console.log(todo.title);
        return todo;
      }
    });
    setTodos(newTodoList);
  };

  const updateTask = (task) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === task.id ? { ...todo, title: task.title } : todo
      )
    );
    closeEditMode();
  };

  const closeEditMode = () => {
    setIsEditing(false);
  };

  const enterEditMode = (todo) => {
    setEditedTask(todo);
    setIsEditing(true);
  };

  console.log();

  return (
    <div>
      <header>
        {isEditing ? (
          <h1 align="center" style={{ color: "red", margin: "10px" }}>
            Edit Todo list
          </h1>
        ) : (
          <h1 align="center" style={{ color: "#0d263b", margin: "10px" }}>
            Add todo list
          </h1>
        )}
      </header>
      {isEditing ? (
        <EditTask
          editedTask={editedTask}
          updateTask={updateTask}
          // closeEditMode={closeEditMode}
        />
      ) : (
        <AddTodo
          addTask={addTask}
          todos={todos}
          enterEditMode={enterEditMode}
        />
      )}
      {/* <h1>okey got you {}</h1> */}
      {todos.length ? (
        todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            handleChange={handleChange}
            enterEditMode={enterEditMode}
            handleCancel={handleCancel}
            editedTask={editedTask}
            // editTask={editTask}
          />
        ))
      ) : (
        <Text>There is no pending todos </Text>
      )}
      <hr />
    </div>
  );
};

// import React, { useState } from "react";
// import Button from "../Button";
// import Input from "../Input";
// import List from "../List";
// import { Container, Wrapper, WrapperMain } from "./styled";

// export const Main = () => {
//   const [todoText, setTodoText] = useState('');
//   const [todos, setTodos] = useState([
//     {
//   id: 1,
//   name: 'read',
//   done: true,
// },
//     {
//   id: 2,
//   name: 'wtite',
//   done: false,
// }
//   ]);

// const onChangeInput = (e)=>{
//   setTodos({ todos: e.target.value });
// }

//   const onClick = () =>{
//   setTodos(({todos, todoText})=> ({
//   todos: [...todos, { id: todos.length + 1, name: todoText, done: false}],
// todoText: ""
// }))}

// const changeBox = (item) =>{
// setTodos(({todos})=> ({
// todos: todos.map(el=>
//   el.id ===item.id ? {...el,done: !el.done} : el
//   )
// }))
// }

// const handleDel = (item) =>{
//   setTodos(({todos}) => ({
//     todos: todos.filter(el =>el.id !== item.id)
//   }))
// }

//   return (
// <Container>
// <Wrapper>All notes</Wrapper>
// <WrapperMain>
//   <div>
//     <h1>Todo list</h1>
//   <Input  value={todoText} onChange={onChangeInput} />
//   {/* <Input type="checkbox" name="second" id="note" placeholder="notes" /> */}
// <Button onClick={onClick}>add</Button>
// <List
// list={todos}
// onChangeBox={changeBox}
// handleDel={handleDel}
// />
//   </div>
// </WrapperMain>
// {/* <ButtonWrapper>
// <Button>edit</Button>
// <Button>delete</Button>
// </ButtonWrapper> */}
//     </Container>
//   );
// };
// export default Main;
