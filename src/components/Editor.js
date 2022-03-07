import React, { useState } from "react";
import styles from "./Editor.module.css";

export const Editor = ({ text, editorHandler }) => {
  return (
    <textarea
      className={styles.TextArea}
      id="Editor"
      onChange={editorHandler}
      value={text}
    />
  );
};
