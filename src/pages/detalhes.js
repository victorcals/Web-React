import React from 'react';
import { useParams } from 'react-router-dom';



const filmes = [{
    "nome": "attack on titan",
    "duracao": "2H30",
    "foto": "aot.png",
    "ano": 2014,
    "genero": "Ação",
    "descricao": "Anime",
    "nota": 7
},
{
    "nome": "Avatar 2",
    "duracao": "3H",
    "foto": "avatar2.png",
    "ano": 2023,
    "genero": "Ação",
    "descricao": "filme do avatar",
    "nota": 8
},
{
    "nome": " Jujutsu",
    "duracao": "2h",
    "foto": "jujutsu.png",
    "ano": 2015,
    "genero": "Anime",
    "descricao": "Anime ",
    "nota": 10
}
]
function Detalhes() {
    const { filme } = useParams();

    return (
        < div class="container" >
            <h1> filme escolhido: {filme}</h1>
            <div>

                {(() => {
                    if (filme == 'attack on titan') {
                        return (
                            <div>
                                <h3> {filmes[0].descricao}</h3>
                                <h4> {filmes[0].genero}</h4>
                            </div>
                        )
                    }
                    else if (filme == 'Avatar 2') {
                        return (
                            <div>
                                <h3> {filmes[0].descricao}</h3>
                                <h4> {filmes[0].genero}</h4>
                            </div>
                        )
                    }
                    else {
                        return (
                            <div>
                                <h3> {filmes[0].descricao}</h3>
                                <h4> {filmes[0].genero}</h4>
                            </div>
                        )
                    }
                }

                )()}
            </div>
        </div>
    )
}

export default Detalhes;