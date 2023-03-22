import "./Filme.css";

const filmes = [{
  "nome": "attack on titan",
  "duracao": " Duração 2H30",
  "foto": "aot.png",

},
{
  "nome": "Avatar 2",
  "duracao": "Duração 3H",
  "foto": "avatar2.png",

},
{
  "nome": " Jujutsu Kaisen",
  "duracao": " Duração 2h",
  "foto": "jujutsu.png",
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
                <h5 className="card-title">{filme.nome}  </h5>

                <p>{filme.duracao}</p>

                <a href={`/detalhes/${filme.nome}`}>

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