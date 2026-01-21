import Button from "./components/Button"
import ButtonResult from "./components/ButtonResult"
import Counter from "./components/Counter"
import languages from "./assets/data/languages"
import { useState } from "react"

function App() {
 // useState per tab attiva
 const [seletedLang, setSelectedLang] = useState(languages[2])



  return (
    <>
      <h1>Learn web development</h1>
      {/* <Counter />
      <ButtonResult /> */}

      <div>
        {languages.map((element)=>(

          <button onClick={() => setSelectedLang(element)}>{element.title}</button>
        ))}
      </div>


      <div>
        <h2>{seletedLang.title}</h2>
        <p>{seletedLang.description}</p>
      </div>
    </>

  )
}

export default App
