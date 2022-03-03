import React from 'react'
import styles from './Preview.module.css';
import { marked } from 'marked';

export const Preview = ({text}) => {
  return (
    <div id="Preview" className={styles.Preview}>
      {marked.parse(text)}
    </div>
  );
}
