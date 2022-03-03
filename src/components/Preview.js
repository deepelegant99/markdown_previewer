import React from 'react'
import styles from './Preview.module.css';

export const Preview = ({word}) => {
  return (
    <div id="Preview"  className={styles.Preview}>
      Preview

      {word}
    
    </div>
  )
}
