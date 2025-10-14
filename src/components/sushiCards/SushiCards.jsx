
export default function SushiCards ({imagem, nome, descricao}){
    return(
        <div>
            <img src={imagem}/>
            <h2>{nome}</h2>
            <p>{descricao}</p>
        </div>
    );
}