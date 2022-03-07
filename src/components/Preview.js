import React from "react";
import styles from "./Preview.module.css";
import { marked } from "marked";
import Reactmarkdown from "react-markdown";

export const Preview = ({ text }) => {
  const getMarkdownText = () => {
    const rawMarkup = marked(text, { sanitize: true });
    return { __html: rawMarkup };
  };
  return (
    <div
      id="preview"
      dangerouslySetInnerHTML={getMarkdownText()}
      className={styles.Preview}
    />
  );
};
