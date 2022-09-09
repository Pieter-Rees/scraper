import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch("/api")
      .then(response => {
        return response.json();
      })
      .then(data => {
        setData(data);
        console.log(data.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (data.message) {
    return (
      <div>
        <div>
          <button onClick={fetchData}>Refresh</button>
        </div>
        <ul>
          {data.message.map(article => (
            <li key={article.toString()}>
              <h4>{article.title}</h4>
              <a href={`https://www.nu.nl${article.anchor}`} rel="noopener noreferrer" target="_blank">
                https://nu.nl/{article.anchor}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
