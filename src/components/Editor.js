import React, { useState } from "react";
import styles from "./Editor.module.css";

export const Editor = ({ text, editorHandler }) => {
  return (
    <textarea
      className={styles.TextArea}
      id="editor"
      onChange={editorHandler}
      value={text}
    />
  );
};
