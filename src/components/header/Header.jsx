import "./Header.css"

export default function Header ({busca, setBusca}){

    return(
        <header>
            <img src="/logo.jpg" alt="SushiGuide" title="SushiGuide" />
            <form>
                <input type="text"
                 placeholder=" 🔍︎  Buscar"
                 value={busca}
                 onChange={(e) => setBusca(e.target.value)}/>
            </form>
        </header>
    );
}