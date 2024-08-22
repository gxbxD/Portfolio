import React, { useState } from "react";
import profpic from '../profilepic.jpg';
import Contatos from "./Contatos";
import styles from '../styles/Sobremim.module.css';

function Sobremim() {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <section className={styles.sobremim}>
            <div className={`${styles.sobremimcontainer} ${isFlipped ? styles.flipped : ''}`}>
                <div className={styles.front}>
                    <div className={styles.profpiccontainer}>
                        <img src={profpic} className={styles.profpic} alt="profpic" />
                    </div>
                    <h1>Sobre mim...</h1>
                    <button onClick={handleFlip} className={styles.flipButton}>
                        Ver mais
                    </button>
                </div>
                <div className={styles.back}>
                    <div className={styles.info}>
                        <h1>Gabriel D'angelo</h1>
                        <p>
                            Desenvolvedor Fullstack em transição de carreira, com 7 anos de experiência em design e restauração de imagens. Nos últimos 18 meses, tenho me dedicado intensamente ao estudo e prática de desenvolvimento web. Busco oportunidades para aplicar minhas habilidades técnicas e criatividade em um ambiente colaborativo, onde possa continuar evoluindo como profissional de tecnologia.
                        </p>
                    </div>
                    <Contatos />
                    <button onClick={handleFlip} className={styles.flipButton}>
                        Voltar
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Sobremim;
