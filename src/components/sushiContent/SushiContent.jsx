import { sushis } from "../../data/sushis";


export default function SushiContent({busca}){
    const content = sushis.filter((item) => item.nome.toLowerCase().includes(busca.toLowerCase()))

    return(
        <div>
         {content.map((item) => (
                <div key = {item.id}>
                    <h2>{item.nome}</h2>
                    <p>{item.descricao}</p>
                </div> 
            ))}
        </div>
    );

}