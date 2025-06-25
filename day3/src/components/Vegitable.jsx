 import { useState } from "react";

function Vegitable({ vegetables }) {
    const [highlight, setHighlight] = useState(false);

    return (
        <>
            <h2>Vegetables List</h2>
            <ol>
                {vegetables.map(({ id, name, pickDate }) => (
                    <li
                        key={id}
                        style={{
                            backgroundColor:
                                highlight && pickDate === "2023-03-30"
                                    ? "lightgreen"
                                    : "transparent"
                        }}
                    >
                        id: {id}, name: {name}, pickDate: {pickDate}
                    </li>
                ))}
            </ol>
            <button onClick={() => setHighlight(true)}>
                Highlight Fresh Vegetables
            </button>
        </>
    );
}

export default Vegitable;
