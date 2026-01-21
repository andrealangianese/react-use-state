import languages from "../assets/data/languages"
import Button from "./Button"
import { useState } from "react"


function ButtonResult() {
    //seletedlang è il linguaggio attualmente selezionato
    //setseletedlang è la funzione per modificarlo
    //usestate la keyword, e (languages[2]) il valore iniziale che mostra
    const [selectedLang, setSelectedLang] = useState(languages[2])

   return (
    <>
      <div>
        {languages.map((element) => (
          <button
            key={element.id}
            onClick={() => setSelectedLang(element)}
          >
            {element.title}
          </button>
        ))}
      </div>

      <div>
        <h2>{selectedLang.title}</h2>
        <p>{selectedLang.description}</p>
      </div>
    </>
  )
}

export default ButtonResult