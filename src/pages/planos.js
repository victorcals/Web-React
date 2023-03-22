import React from 'react';
import "./JinPlanos.css";


const valores = [{

    "nome": "Plano Basico",
    "valor": "0U$",
    "disponivel": "1",
    "Propagandas": "Propagandas a cada 10 minutos",

},
{
    "nome": "Plano Medio",
    "valor": "5U$",
    "disponivel": "10",
    "Propagandas": "1 Propaganda por filme",

},
{
    "nome": " Plano Pro",
    "valor": "25U$",
    "disponivel": "Ilimitado",
    "Propagandas": "Sem Propagandas",
}
]


function Planos() {
    return (

        <div className="container text-center">
            <div class="row">
                {valores.map((valores, i) => (


                    <div className="col" key={i}>
                        <div>

                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h2 className="card-title">{valores.nome}</h2><br></br>

                                <h5> Valor mensal {valores.valor} R$</h5><br></br>

                                <h5>filmes disponíveis diariamente  {valores.disponivel}</h5><br></br>

                                <h5>  {valores.Propagandas} minutos</h5><br></br>

                                <a href={`/detalhes/${valores.nome}`}><br></br><br></br>

                                    <div className="btn btn-dark">
                                        Detalhes  </div>
                                </a>


                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Planos;