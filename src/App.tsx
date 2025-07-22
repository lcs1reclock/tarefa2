import './App.css'
import MovieCard from './components/Movie';

function App() {
  const tituloCentral: string = "Catálogo de Filmes";

  const filmes = [
    {
      id: '1',
      titulo: 'Os Vingadores',
      ano: 2012,
      imagem: 'https://i0.wp.com/cinegrandiose.com/wp-content/uploads/Avengers-1.png?fit=960%2C540&ssl=1',
      descricao: '"Os Vingadores" (2012), é um filme de super-heróis da Marvel que reúne os principais personagens do Universo Cinematográfico Marvel (UCM)'
    },
    {
      id: '2',
      titulo: 'Vingadores: Era de Ultron',
      ano: 2015,
      imagem: 'https://sm.ign.com/t/ign_br/articlepage/b/behold-the-new-poster-for-marvels-avengers-age-of/behold-the-new-poster-for-marvels-avengers-age-of_qrch.1280.jpg',
      descricao: 'Ao tentar proteger o planeta de ameaças, Tony Stark constrói um sistema de inteligência artificial que cuidaria da paz mundial.'
    },
    {
      id: '3',
      titulo: 'Vingadores Guerra Infinita',
      ano: 2018,
      imagem: 'https://loggado.com/wp-content/uploads/2018/04/guerra-infinita.jpg',
      descricao: 'Em Vingadores: Guerra Infinita, Thanos enfim chega à Terra, disposto a reunir as Joias do Infinito.'
    },
    {
      id: '4',
      titulo: 'Vingadores Ultimato',
      ano: 2019,
      imagem: 'https://lbatistaautor.com/wp-content/uploads/2023/06/scale.jpg',
      descricao: 'Após Thanos eliminar metade das criaturas vivas em Vingadores: Guerra Infinita, os heróis precisam lidar com a dor da perda de amigos e seus entes queridos.'
    },
  ];


  return (
    <div className="container-fluid"> {/* container-fluid ocupa 100% da largura */}
      <h1 className="text-center mb-12"> {tituloCentral} </h1>

      <div className="container"> {/* container padrão para centralizar e dar um espaçamento na tela */}
        <div className="row"> {/* row para agrupar as colunas */}

          <div className="col-12 col-sm-12 col-md-6 col-lg-3">
            <MovieCard
              id={filmes[0].id}
              titulo={filmes[0].titulo}
              ano={filmes[0].ano}
              imagem={filmes[0].imagem}
              descricao={filmes[0].descricao}
            />
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-3">
            <MovieCard
              id={filmes[1].id}
              titulo={filmes[1].titulo}
              ano={filmes[1].ano}
              imagem={filmes[1].imagem}
              descricao={filmes[1].descricao}
            />

          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-3">
            <MovieCard
              id={filmes[2].id}
              titulo={filmes[2].titulo}
              ano={filmes[2].ano}
              imagem={filmes[2].imagem}
              descricao={filmes[2].descricao}
            />
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-3">
            <MovieCard
              id={filmes[3].id}
              titulo={filmes[3].titulo}
              ano={filmes[3].ano}
              imagem={filmes[3].imagem}
              descricao={filmes[3].descricao}
            />
          </div>

        </div>
      </div>
    </div >
  );
}

export default App
