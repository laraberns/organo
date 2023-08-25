import { useState } from 'react';
import Banner from './componentes/Banner/banner';
import Formulario from './componentes/Formulario/formulario';
import Time from './componentes/Time/time';
import Rodape from './componentes/Rodape/rodape';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState([
    {
      nome: "Programação",
      cor: "#57C278",
      id: uuidv4()
    },
    {
      nome: "Front-End",
      cor: "#82CFFA",
      id: uuidv4()
    },
    {
      nome: "Data Science",
      cor: "#A6D157",
      id: uuidv4()
    },
    {
      nome: "DevOps",
      cor: "#E06B69",
      id: uuidv4()
    },
    {
      nome: "UX e Design",
      cor: "#DB6EBF",
      id: uuidv4()
    },
    {
      nome: "Mobile",
      cor: "#FFBA05",
      id: uuidv4()
    },
    {
      nome: "Inovação e Gestão",
      cor: "#FF8A29",
      id: uuidv4()
    }
  ])

  const inicial = [
    {
      nome: 'Lara Pereira',
      cargo: 'Desenvolvedora Front-End',
      imagem: 'https://github.com/laraberns.png',
      time: times[1].nome,
      id: uuidv4(),
      favorito: false
    }
  ]

  const [colaboradores, setColaboradores] = useState(inicial)

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  function mudarCorDoTime(cor, id) {
    setTimes(times.map(time => {
      if (time.id === id) {
        time.cor = cor
      }
      return time
    }))
  }

  function cadastrarTime(novoTime) {
    setTimes([...times, { ...novoTime, id: uuidv4() }])
  }

  function resolverFavorito(id) {
    setColaboradores(colaboradores.map(colaborador => {
      if (colaborador.id === id) {
        colaborador.favorito = !colaborador.favorito
      }
      return colaborador
    }))
  }

  return (
    <div className="App">
      <Banner />

      <Formulario
        times={times.map(time => time.nome)}
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
        cadastrarTime={cadastrarTime}
      />

      {times.map((time, indice) =>
        <Time
          key={indice}
          time={time}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar={deletarColaborador}
          mudarCor={mudarCorDoTime}
          aoFavoritar={resolverFavorito}
        />
      )}

      <Rodape />
    </div>
  )
}

export default App;
