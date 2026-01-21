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
      
      <Counter />
      <h1>Learn web development</h1>
      <ButtonResult /> 

    
    </>

  )
}

export default App
