import React, { useState } from "react";
import Plot from "react-plotly.js";

function App() {
  const [data, setData] = useState([0]);

  return (
    <div>
      <Plot
        data={[
          {
            type: "histogram",
            x: data,
            marker: {
              color: "red",
            },
          },
        ]}
        layout={{ width: 1000, height: 500, title: "A Fancy Plot" }}
      />
      <button onClick={() => setData([...data, Math.random()])}>ABC</button>
    </div>
  );
}

export default App;
