import { sushis } from "../../data/sushis";
import styles from "./SushiCards.module.css";

export default function SushiCards (){
    return(
        <div className={styles.teste}>
            {sushis.map((item) => (
                <div key = {item.id}>
                    <h2>{item.nome}</h2>
                    <p>{item.descricao}</p>
                </div>
            ))}
        </div>
    );
}