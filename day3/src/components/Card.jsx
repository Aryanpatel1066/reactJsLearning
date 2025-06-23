 export default function Card({ children }) {
  return (
    <div style={{
      border: "2px solid yellow",
      padding: "1rem",
      margin: "1rem 0",
      backgroundColor: "#f9f9f9",
      borderRadius: "8px"
    }}>
      {children}
    </div>
  );
}
