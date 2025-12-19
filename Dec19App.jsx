import { useState } from "react";

function App() {
  const [isRed, setIsRed] = useState(true);

  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          width: "200px",
          height: "100px",
          backgroundColor: isRed ? "red" : "blue",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "10px",
        }}
      >
        Color Box
      </div>

      <button onClick={() => setIsRed(!isRed)}>
        Change Color
      </button>
    </div>
  );
}

export default App;
