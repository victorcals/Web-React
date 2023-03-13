import React from 'react';
import Footer from './../components/Footer/index';
import { useParams } from 'react-router-dom';

const filmes = [{
    "nome": "Vingadores",
    "genero": "Ação/Nerd",
    "descricao": "Filme da Marvel com super-heróis",
    "nota": 5
},
{
    "nome": "Vingadores 2",
    "genero": "Ação/Nerd",
    "descricao": "Filme da Marvel com super-heróis",
    "nota": 5
},
{
    "nome": "Vingadores 3",
    "genero": "Ação/Nerd",
    "descricao": "Filme da Marvel com super-heróis",
    "nota": 5
}
]


function Detalhes() {
    const { filme } = useParams();

    return (
        <div>
            <p>Filme: {filme}</p>
            {(() => {
                if (filme == 'Vingadores') {
                    return (
                        <div>
                            <p>{filmes[0].descricao}</p>
                            <p>{filmes[0].genero}</p>
                        </div>
                    )
                } else if (filme == 'Vingadores 2') {
                    return (
                        <div>
                            <p>{filmes[1].descricao}</p>
                            <p>{filmes[1].genero}</p>
                        </div>
                    )
                } else {
                    return (
                        <div>
                            <p>{filmes[2].descricao}</p>
                            <p>{filmes[2].genero}</p>
                        </div>
                    )
                }
            })()}
            <Footer />
        </div>
    )
}

export default Detalhes;