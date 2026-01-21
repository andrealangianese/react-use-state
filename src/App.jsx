import Button from "./components/Button"
import ButtonResult from "./components/ButtonResult"
import Counter from "./components/Counter"
import languages from "./assets/data/languages"
import { useState } from "react"

function App() {
 // useState per tab attiva

 //seletedlang è il linguaggio attualmente selezionato
 //setseletedlang è la funzione per modificarlo
 //usestate la keyword, e (languages[2]) il valore iniziale che mostra
 const [seletedLang, setSelectedLang] = useState(languages[2])



  return (
    <>
      <h1>Learn web development</h1>
      {/* <Counter />
      <ButtonResult /> */}

      <div>
        {/* qua ciclo sull'array languages */}
        {languages.map((element)=>(
          // al click la funzione fa cambiare la UI
          <button onClick={() => setSelectedLang(element)}>{element.title}</button>
        ))}
      </div>

      {/* contenuto che vado ad aggiornare di volta in volta */}
      <div>
        <h2>{seletedLang.title}</h2>
        <p>{seletedLang.description}</p>
      </div>
    </>

  )
}

export default App
