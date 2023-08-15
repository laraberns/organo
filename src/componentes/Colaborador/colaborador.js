import "./colaborador.css"

// utiliza {} em vez de props = mesma coisa
const Colaborador = ({imagem, nome, cargo, corDeFundo}) => {
    return (
        <div className="colaborador">
            <div className="cabecalho" style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nome} />
            </div>
            <div className="rodape-colaborador">
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador