import React from 'react';
import styles from "./Editor.module.css";


export const Editor = () => {

  function testHandle(evt){
    console.log(evt.target.value);
  }
  return (
    <div style={{backgroundColor:'blue', width:'30%', height:'40%'}}>Editor
    <textarea id="Editor" className={styles.Editor}  onChange={testHandle}/>
    </div>
  )
}
