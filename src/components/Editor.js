import React from 'react';
import editCSS from "./Editor.module.css";


export const Editor = () => {
  return (
    <div style={{backgroundColor:'blue', width:'30%', height:'40%'}}>Editor
    <textarea id="Editor" className={editCSS.Editor}/>
    </div>
  )
}
