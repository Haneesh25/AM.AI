/* ChatGPT.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ChatGPT({ jsonData }) {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const fetchResponse = async () => {
      const OPENAI_API_URL = "https://api.openai.com/v1/engines/davinci/completions";

      try {
        const result = await axios.post(OPENAI_API_URL, jsonData, {
          headers: {
            'Authorization': `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`,
            'Content-Type': 'application/json'
          }
        });
        
        if (result.data && result.data.choices && result.data.choices[0]) {
          setResponse(result.data.choices[0].text.trim());
        }
      } catch (error) {
        console.error("Error fetching data from ChatGPT:", error);
      }
    };

    fetchResponse();
  }, [jsonData]);

  return <h1>{response}</h1>;
}

export default ChatGPT;*/


import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ChatGPT({ jsonData }) {  
    const [response, setResponse] = useState("");

      
    useEffect(() => {     const fetchResponse = async() => {       const OPENAI_API_URL = "https://api.openai.com/v1/engines/davinci/completions";

                   // Construct the prompt using JSON data
                   const promptText = `Tell me a story about a person named ${jsonData}`;

                   try {         const result = await axios.post(OPENAI_API_URL, { prompt: promptText, max_tokens: 150 }, {           headers: {             'Authorization': `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`,              'Content-Type': 'application/json'           }         });                 if (result.data && result.data.choices && result.data.choices[0]) {           setResponse(result.data.choices[0].text.trim());         }       } catch (error) {         console.error("Error fetching data from ChatGPT:", error);       }     };

            
        fetchResponse();   }, [jsonData]);

      
    return <h1 > { response } < /h1>;
}

export default ChatGPT;