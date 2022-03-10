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



- We can also make some markdown list.
  - Item 1.
    - Item 2.
      - Item 3.
        - Item 4.


1. Here is a number list
1. Item 1
1. Item 2
1. Item 3
1. Item 4


>This is a blockquote

![x-factor](https://terrigen-cdn-dev.marvel.com/content/prod/1x/0_0e5a.jpg )

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
