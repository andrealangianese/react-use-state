import languages from "../assets/data/languages"
import Button from "./Button"

// destrutturo per importare i dati e sostituirli
//const { id, title, description } = andrea

function ButtonResult() {
    return (
        <div>
            {languages.map((andrea) => {
                return(
                <div>
                    <div key={andrea.id}> 
                        <button >
                            {andrea.title}
                        </button>
                    </div>
                    <div>{andrea.description}</div>
                </div>)
            })}
        </div>
    )
}
export default ButtonResult