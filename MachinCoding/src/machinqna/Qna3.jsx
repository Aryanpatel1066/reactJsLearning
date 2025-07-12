 import { useState } from "react";

const list = [
  { name: "abc" },
  { name: "pqr" },
  { name: "xyz" }
];

function Qna3() {
  const [selectedItems, setSelectedItems] = useState({});

  const handleChange = (name) => {
    setSelectedItems((prev) => ({
      ...prev,
      [name]: !prev[name] // toggle true/false for that item
    }));
  };

  return (
    <>
      {list.map(({ name }) => (
        <div key={name}>
          <li
            style={{
              textDecoration: selectedItems[name] ? "line-through" : "none"
            }}
          >
            name: {name}
          </li>
          <input
            type="checkbox"
            checked={!!selectedItems[name]}
            onChange={() => handleChange(name)}
          />
        </div>
      ))}
    </>
  );
}

export default Qna3;
