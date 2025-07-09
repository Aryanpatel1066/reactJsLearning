 import { useState } from "react";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    if (input.trim()) {
      setTodos([...todos, { item: input }]);
      setInput("");
    }
  };

  return (
    <>
      <input
        placeholder="enter task"
        value={input}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo.item}</li>
        ))}
      </ul>
    </>
  );
}

export default TodoApp;
