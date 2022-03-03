import React, { useState } from "react";
import styles from "./Editor.module.css";

export const Editor = ({ text, editorHandler }) => {
  return (
    <div style={{ backgroundColor: "blue", width: "30%", height: "40%" }}>
      Editor
      <textarea id="Editor" className={styles.Editor} onChange={editorHandler} value={text} />
    </div>
  );
};
