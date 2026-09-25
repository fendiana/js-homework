import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const [value, useValue] = useState(0);

  const Change = () => {
    useValue(value + 1);
  };

  return (
    <div className="block">
      <p>Counter</p>
      <p>{value}</p>
      <button onClick={Change}>Click</button>
    </div>
  );
};
export default Home;
