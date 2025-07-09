 import { useState } from "react";

function MarkStrike({ todoItems2 }) {
  const [todoItems, setTodoItems] = useState(todoItems2);

  function removeItem(targetId) {
    const newItems = todoItems.filter(({ id }) => id !== targetId);
    setTodoItems(newItems);
 console.log(targetId)
  }

  return (
    <ul>
      {todoItems.map(({ id, task, isDone }) => (
        <li
          key={id}
          style={{ textDecoration: isDone ? "line-through" : "none" }}
        >
          {task}
          <button onClick={() => removeItem(id)}>X</button>
        </li>
      ))}
    </ul>
  );
}

export default MarkStrike;
