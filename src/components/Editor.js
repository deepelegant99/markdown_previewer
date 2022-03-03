
import React, { useState } from 'react';
import styles from "./Editor.module.css";


export const Editor = () => {

  const [word, setWord] = useState();

  function testHandle(word){
    console.log(word.target.value);
    setWord(word.target.value);
  }
  return (
    <div style={{backgroundColor:'blue', width:'30%', height:'40%'}}>Editor
    <textarea id="Editor" className={styles.Editor}  onChange={testHandle}/>
    </div>
  )
}
