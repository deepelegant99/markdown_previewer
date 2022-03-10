import styles from "./App.module.css";
import React, { useState } from "react";
import { Editor } from "./components/Editor";
import { Preview } from "./components/Preview";

function App() {
  const defaulttext = `

# Welcome to my React Markdown Previewer!
## This is a sub-heading...`
+
` 
This is how you do a link:
[links](https://www.freecodecamp.org)
` +
`
The followng is a inline code: 
 \` d=2 \`
` + 
`
The following is a code block: 
 \`\`\`javascript I'm A tab
console.log('Code Tab A');
\`\`\`
`; 

 
  
  const [text, setText] = useState(defaulttext); 

  function editorHandler(event) {
    // console.log(event.target.value);
    setText(event.target.value);
  }

  return (
    <div className={styles.App}>
      <Editor text={text} editorHandler={editorHandler} />
      <Preview text={text} />
    </div>
  );
}

export default App;
