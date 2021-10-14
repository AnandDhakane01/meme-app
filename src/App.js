import React, { useState, useEffect } from "react";
import "./app.css";
import Template from './Components/Template'
import SelectedTemplate from "./Components/SelectedTemplate";

function App() {
  const [templates, setTemplates] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  // fetch all the templates
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => setTemplates(data.data.memes));
  }, []);
  
  // render all the templates that have been fetched
  const templatesToRender = templates.map(template => {
    return <Template template={template} key={template.id} setSelectedTemplate={setSelectedTemplate}/>
  })

  return (
    <>
      <h1>Meme Generator</h1>

      {selectedTemplate == null ?

      <div className="container">
        { templatesToRender }
      </div>
      : 
      <SelectedTemplate meme={selectedTemplate} setSelectedTemplate={setSelectedTemplate}/>}
    </>
  );
}

export default App;
