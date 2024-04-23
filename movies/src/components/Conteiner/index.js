import styles from "./Conteiner.module.css";

function Conteiner({ children }) {
    return(
        <section className={styles.conteiner}>
            {children}
        </section>
    );
}

export default Conteiner;