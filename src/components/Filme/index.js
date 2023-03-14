import "./Filme.css";

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

export default function Filme() {
  return (
    <div className="container text-center">
      <div class="row">
        {filmes.map((filme, i) => (
          <div className="col" key={i}>
            <div className="card">
              <img src={'/assets/images/' + filme.foto} alt={filme.nome} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{filme.nome} ({filme.ano}) </h5>
                <p>Sinopse</p>
                <p className="card-text">{filme.descricao}</p>
                <p>{filme.duracao}</p>
                <p>{filme.genero}</p>
                <p>{filme.nota}</p>
                <a href="#" className="btn btn-primary">trailer</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}