import styles from "./App.module.css";
import { Editor } from "./components/Editor";
import { Preview } from "./components/Preview";

function App() {
  return (
    <div className={styles.App}>
      <Editor/>
      <Preview/>
    </div>
  );
}

export default App;
