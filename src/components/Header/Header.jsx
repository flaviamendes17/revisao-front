import styles from './Header.module.css';

    const Header = ({ titulo, descricao, totalProdutos }) => {
    const tituloExibido = titulo ? titulo : " 🔁 LoopTech – Pra quem vive conectado. 📲";
    const descricaoExibida = descricao ? descricao : "Essa é a loja de eletrônicos perfeita pra você. Conheça nossos produtos topzera e entre no loop da tecnologia!";

    return (
    <div className={styles.header}>
    <h1>{tituloExibido}</h1>
    <p>{descricaoExibida}</p>
    <p>📊 Total de produtos no momento👇🏻: <span>{totalProdutos}</span></p>
    </div>
);
};

export default Header;