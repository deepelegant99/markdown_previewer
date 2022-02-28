import React from 'react';
import styles from "./Editor.module.css";


export const Editor = () => {
  return (
    <div style={{backgroundColor:'blue', width:'30%', height:'40%'}}>Editor
    <textarea id="Editor" className={styles.Editor}/>
    </div>
  )
}
