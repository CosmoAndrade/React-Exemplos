import { useState } from 'react';
import {DivStyled} from '../styled.js'

function CompInput() {

    const [texto,setTexto] = useState('');
    const [numero,setNumero] = useState(0)

    return (
        <DivStyled>
            <h1>{texto}</h1>
            <input type="text" value={texto} onChange={(e) => { setTexto(e.target.value) }} />

            <button onClick={() => { setNumero(numero + 1) }} >+</button>
            <h2>{numero}</h2>
            <button onClick={() => { setNumero(numero - 1) }}>-</button>
        </DivStyled>
    );
}

export default CompInput;