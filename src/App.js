import styles from "./App.module.css";
import { Editor } from "./components/Editor";
import { Preview } from "./components/Preview";
import editorCSS from "./components/Editor.module.css";
import previewCSS from "./components/Preview.module.css";

function App() {
  return (
    <div className={styles.App}>
      <Editor className={editorCSS.Editor}/>
      <Preview className={previewCSS.Preview} />
    </div>
  );
}

export default App;
