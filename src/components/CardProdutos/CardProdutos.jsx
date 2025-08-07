import styles from "./CardProdutos.module.css";

const CardProdutos = ({ produto }) => {
    return (
        <div className={styles.CardProdutos} data-categoria={produto.categoria}>
            <div className={styles.produtoimagem}>
                <img src={produto.imagem} alt={produto.nome} />
            </div>
            <div className={styles.produtonome}>{produto.nome}</div>
            <div className={styles.produtodpreco}>{produto.preco}</div>
            <div className={styles.produtodescricao}>{produto.descricao}</div>
            <div className={styles.produtoavaliacao}>
                <span className={styles.estrelas}>
                    {"★".repeat(produto.avaliação.estrelas)}
                    {"☆".repeat(5 - produto.avaliação.estrelas)}
                </span>
                <span className={styles.contagem}>
                    {produto.avaliação.contagem} ({produto.avaliação.resenhas} resenhas)
                </span>
            </div>
        </div>
    )
}

export default CardProdutos;