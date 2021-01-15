import React from 'react';
const TodoList = ({todos, removeHandler, updateTodo}) => (
    <div>
      {todos.map((t, i) => (
        <TodoItem key={i} todo={t} removeHandler={removeHandler} updateTodo={updateTodo} />
      ))}
    </div>
  );
  
// const TodoList = ({ todos}) => <div>
//     {
//         todos.map((t,i) => (
//             <div key={i}>{t.title}</div>
//         ))
//     }
// </div>;

export default TodoList;