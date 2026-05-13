import { useEffect, useState } from "react"

export default function Usuarios() {

    const [cont, setCont] = useState(0)

    const aumenta = () => {
        setCont(cont + 1)
    }

    const diminui = () => {
        setCont(cont - 1)
    }

    useEffect(() => {
        document.title = `cont: ${cont}`
        if (cont > 10){
            alert("O cont passou de 10!")
        } else if (cont === -10){
            alert("O cont está exatamente em -10!")
        }

    }, [cont])

    return (
        <div>

            <h1>Usuarios</h1>
            {cont}

            <br />

            <button onClick={() => aumenta()}>AUMENTAR</button>
            <button onClick={() => diminui()}>DIMINUIR</button>

        </div>
    )
}