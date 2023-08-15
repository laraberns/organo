import "./rodape.css"

const Rodape = () => {
    return (
        <footer className="rodape">
            <div className="redes">
                <img src="/imagens/fb.png" alt="imagem do rodape" />
                <img src="/imagens/tw.png" alt="imagem do rodape" />
                <img src="/imagens/ig.png" alt="imagem do rodape" />
            </div>
            <div className="logo">
                <img src="/imagens/logo.png" alt="imagem do rodape" />
            </div>
            <div className="texto-alura">
                <p>Desenvolvido por Alura.</p>
            </div>
        </footer>
    )
}

export default Rodape