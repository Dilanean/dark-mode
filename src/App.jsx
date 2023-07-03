import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // Verifico se nel localStorage c'è l'elemento mode e mi ritorna questo oppure se non c'è nulla mi restituisce la stringa "light-mode"
  const getFromLocalStorage = () => {
    if (localStorage.getItem("mode")) {
      return localStorage.getItem("mode");
    } else {
      return "light-mode";
    }
  };

  // Il valore di default di mode sarà il valore che ritorna la funzione getFromLocalStorage
  const [mode, setMode] = useState(getFromLocalStorage());

  // Funzione che mi gestisce il valore del mode
  const changeMode = () => {
    setMode((mode) => {
      return mode === "light-mode" ? "dark-mode" : "light-mode";
    });
  };

  // Mi gestisce la classe di html e il localStorage
  useEffect(() => {
    document.documentElement.className = mode; // Attaco la classe mode all'html
    localStorage.setItem("mode", mode);
  }, [mode]);

  return (
    <>
      <div>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>
      <button className="btn" onClick={changeMode}>
        Change
      </button>
    </>
  );
}

export default App;
