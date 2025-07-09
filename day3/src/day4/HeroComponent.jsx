 import { useState } from "react";

function HeroComponent({ characters }) {
  const [heroList, setHeroList] = useState([]);

  const handleHero = (typeHero) => {
    setHeroList(characters[typeHero]); // Correct way to access dynamic key
  };

  return (
    <>
      <button onClick={() => handleHero("heroes")}>Show Heroes</button>
      <button onClick={() => handleHero("villains")}>Show Villains</button>

      <ul>
        {heroList.map(({ name, powers, costume }, index) => (
          <li key={index}>
            <strong>Name:</strong> {name}, <strong>Powers:</strong> {powers},{" "}
            <strong>Costume:</strong> {costume}
          </li>
        ))}
      </ul>
    </>
  );
}

export default HeroComponent;
