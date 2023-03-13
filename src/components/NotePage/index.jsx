// import React, { useState } from "react";
// import useLocalStorage from "../../hooks/useLocalStorage";
// import { EditTask } from "../EditTask";
// import { AddTodo } from "../AddTodo";
// import { Todo } from "../TodoList";
// import { Text } from "./styled";
// import NoteList from "../NoteList";

const NotePage = ({ details }) => {
  // console.log(details);
  // console.log(details?.title);

  return (
    <div>
      <header></header>
      {/* {details?.title} 
      {details?.todos} */}
    </div>
  );
};

export default NotePage;

// const NotePage = () => {
// const [todos, setTodos] = useLocalStorage("todo", []);
// const [editedTask, setEditedTask] = useState(null);
// const [isEditing, setIsEditing] = useState(false);

// const addTask = (task) => {
//   console.log(task + "okey");
//   const newTodoList = [...todos, task];
//   setTodos(newTodoList);
//   // setTodos(prev=> [...prev, task])
// };

// const removeTodo = (id) => {
//   const newTodoList = todos.filter((todo) => todo.id !== id);
//   setTodos(newTodoList);
//   // setTodos((prev) => prev.filter((todo) => todo.id !== id));
// };

// const handleChange = (id) => {
//   const newTodoList = todos.map((todo) => {
//     if (todo.id === id) {
//       return { ...todo, done: !todo.done };
//     } else {
//       return todo;
//     }
//   });
//   setTodos(newTodoList);
//   // setTodos(prev=> prev.map(todo => (
//   //   todo.id === id
//   //   ? {...todo, done: !todo.done}
//   //   : todo
//   //   )))
// };

// const handleCancel = (id) => {
//   const newTodoList = todos.map((todo) => {
//     if (todo.id === id) {
//       console.log(todo.title);
//       return { ...todo, title: todo.title };
//     } else {
//       // console.log(todo.title);
//       return todo;
//     }
//   });
//   setTodos(newTodoList);
// };

// const updateTask = (task) => {
//   console.log(task);
//   setTodos((prev) =>
//     prev.map((todo) =>
//       todo.id === task.id ? { ...todo, title: task.title } : todo
//     )
//   );
//   closeEditMode();
// };

// const closeEditMode = () => {
//   setIsEditing(false);
// };

// const enterEditMode = (todo) => {
//   setEditedTask(todo);
//   setIsEditing(true);
// };

// return (
//   <div>
//     <header>
//       {isEditing ? (
//         <h1 align="center" style={{ color: "red", margin: "10px" }}>
//           Edit Todo list
//         </h1>
//       ) : (
//         <h1 align="center" style={{ color: "#0d263b", margin: "10px" }}>
//           Add todo list
//         </h1>
//       )}
//     </header>
//     {isEditing ? (
//       <EditTask
//         editedTask={editedTask}
//         updateTask={updateTask}
//         // closeEditMode={closeEditMode}
//       />
//     ) : (
//       <AddTodo
//         addTask={addTask}
//         todos={todos}
//         enterEditMode={enterEditMode}
//       />
//     )}
//     {todos.length ? (
//       todos.map((todo) => (
//         <Todo
//           key={todo.id}
//           todo={todo}
//           removeTodo={removeTodo}
//           handleChange={handleChange}
//           enterEditMode={enterEditMode}
//           handleCancel={handleCancel}
//           editedTask={editedTask}
//           // editTask={editTask}
//         />
//       ))
//     ) : (
//       <Text>There is no pending todos </Text>
//     )}

// </div>
//   );
// };
// export default NotePage;
