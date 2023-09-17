/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

              <ChatGPT jsonData={jsonData}/>
                                  <pre>{JSON.stringify(jsonData, null, 2)}</pre>


export default App;*/

import React, { useState } from "react";
import ChatGPT from "./ChatGPT";
import TableComponent from "./TableComponent";
import AssetStatistics from "./AssetStatistics";

const App = () => {
    const hello = "hello";
    const [jsonData, setJsonData] = useState(null);

    const convertCSVToJson = (csvData) => {
        const lines = csvData.split("\n");
        const headers = lines[0].split(",");
        const result = [];

        for (let i = 1; i < lines.length; i++) {
            const obj = {};
            const currentLine = lines[i].split(",");

            for (let j = 0; j < headers.length; j++) {
                obj[headers[j].trim()] = currentLine[j].trim();
            }

            result.push(obj);
        }

        return result;
    };

    const handleCSVInputChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            const csvData = e.target.result;
            const jsonData = convertCSVToJson(csvData);
            setJsonData(jsonData);
        };

        reader.readAsText(file);
    };

    return ( <
        div >
        <
        input type = "file"
        accept = ".csv"
        onChange = { handleCSVInputChange }
        />

        {
            jsonData ? ( <
                div className = "json-container" >
                <
                AssetStatistics data = { jsonData }
                /> <
                TableComponent data = { jsonData }
                />

                <
                /div>
            ) : ( <
                p > Please select a CSV file. < /p>
            )
        } <
        /div>
    );
};

export default App;