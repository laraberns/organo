import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import './colaborador.css'

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {

    const favorito = {
        size: 25,
        onClick: () => aoFavoritar(colaborador.id)
    }

    return (
        <div className="colaborador">
            <AiFillCloseCircle
                size={25}
                className='deletar'
                onClick={() => aoDeletar(colaborador.id)}
            />
            <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
                <img src={colaborador.imagem} alt={colaborador.nome} />
            </div>
            <div className="rodape-colaborador">
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
                <div className="favoritar">
                    {colaborador.favorito
                        ? <AiFillHeart
                            {...favorito}
                            color="red"
                        />
                        : <AiOutlineHeart
                            {...favorito}
                        />
                    }
                </div>
            </div>
        </div>)
}

export default Colaborador


//tentar arrow no colaborador.favorito