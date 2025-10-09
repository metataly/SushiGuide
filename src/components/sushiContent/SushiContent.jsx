import { sushis } from "../../data/sushis";
import styles from "../sushiContent/SushiContent.module.css";


export default function SushiContent({busca}){
    const content = sushis.filter((item) => item.nome.toLowerCase().includes(busca.toLowerCase()))

    return(
        <div className={styles.card}>
         {content.map((item) => (
                <div className={styles.content} key = {item.id}>
                    <h2>{item.nome}</h2>
                    <p>{item.descricao}</p>
                </div> 
            ))}
        </div>
    );

}