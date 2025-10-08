import { sushis } from "../../data/sushis";
import styles from "./SushiCards.module.css";

export default function SushiCards ({nome, descricao}){
    return(
        <div className={styles.teste}>
            <div>
                <h2>{nome}</h2>
                <p>{descricao}</p>
            </div>
        </div>
    );
}