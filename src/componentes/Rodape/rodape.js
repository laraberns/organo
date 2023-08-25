import "./rodape.css"

const Rodape = () => {
    return (
        <footer className="rodape">
            <div className="redes">
                <a href="https://www.facebook.com/AluraCursosOnline/?locale=pt_BR" target="_blank"><img src="/imagens/fb.png" alt="imagem do rodape"/></a>
                <a href="https://twitter.com/aluraonline?lang=en" target="_blank"><img src="/imagens/tw.png" alt="imagem do rodape" /></a>
                <a href="https://www.instagram.com/aluraonline/?hl=en" target="_blank"><img src="/imagens/ig.png" alt="imagem do rodape" /></a>
            </div>
            <div className="logo">
                <img src="/imagens/logo.png" alt="imagem do rodape" />
            </div>
            <div className="texto-alura">
                <p>Desenvolvido pela Lara </p>
            </div>
        </footer>
    )
}

export default Rodape