import { useState } from "react"

function Counter() {

    const [conta, setConta] = useState(0)

    return (
        <>
            <h3>sono il counter</h3>

            <div>
                {/* ritorno la variabile che conta */}
                <div>questa è la variabile che vado a modificare</div>
                <div>{conta}</div>
                <div>l'evento onclick si aspetta una funzione, quindi senza function non vedrò nulla in pagina, <br />la funzione avrei potuto scriverla anche precedentemente per poi essere chiamata successivamente <div />
                    <button onClick={() => setConta(conta + 1)}>incrementa</button>
                    <button onClick={() => setConta(conta - 1)}>decrementa</button>


                </div>
            </div>
        </>
    )
}

export default Counter