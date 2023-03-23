import React from 'react';
import "./JinPlanos.css";
import { useParams } from 'react-router-dom';


const valores = [{

    "nome": "Basico",
    "valor": "0U$",
    "disponivel": "1",
    "Propagandas": "Propagandas a cada 10 minutos",

},
{
    "nome": "Medio",
    "valor": "5U$",
    "disponivel": "10",
    "Propagandas": "1 Propaganda por filme",

},
{
    "nome": " Pro",
    "valor": "25U$",
    "disponivel": "Ilimitado",
    "Propagandas": "Sem Propagandas",
}
]
function Contratar() {
    const { val } = useParams();

    return (
        < div cals="container" >
            <h1 className='pagamento'> Plano escolhido: {val}</h1>
            <div>

                {(() => {
                    if (val == 'Basico') {
                        return (
                            <div className='pagamento'>
                                <form >

                                    <h4> {valores[0].valor}</h4>
                                    <h4> {valores[0].disponivel}</h4>
                                    <h4> {valores[0].Propagandas}</h4>

                                    <button>
                                        Realizar pagamento
                                    </button>

                                </form>

                            </div>
                        )
                    }
                    else if (val == 'Medio') {
                        return (
                            <div>
                                <h3> {valores[0].nome}</h3>
                                <h4> {valores[0].valor}</h4>
                                <h4> {valores[0].disponivel}</h4>
                                <h4> {valores[0].Propagandas}</h4>
                            </div>
                        )
                    }
                    else {
                        return (
                            <div>
                                <h3> {valores[0].nome}</h3>
                                <h4> {valores[0].valor}</h4>
                                <h4> {valores[0].disponivel}</h4>
                                <h4> {valores[0].Propagandas}</h4>
                            </div>
                        )
                    }
                }

                )()}
            </div>
        </div>
    )
}

export default Contratar;