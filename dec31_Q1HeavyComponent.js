import React from "react";

const HeavyComponent = () => {
  console.log("🔥 HeavyComponent rendered");

  return (
    <div style={{ padding: "20px", border: "2px solid black" }}>
      <h2>Heavy UI Component</h2>
      <p>This component should render only once.</p>
    </div>
  );
};

export default React.memo(HeavyComponent);
