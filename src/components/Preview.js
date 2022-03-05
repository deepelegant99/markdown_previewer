import React from "react";
import styles from "./Preview.module.css";
import { marked } from "marked";
import Reactmarkdown from "react-markdown";

export const Preview = ({ text }) => {
  return (
    <div id="Preview" className={styles.Preview}>
      {/* <Markdown>{marked.parse(text)}</Markdown> */}
      <Reactmarkdown children={text} />
    </div>
  );
};
