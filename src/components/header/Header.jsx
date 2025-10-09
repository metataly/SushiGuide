import style from "../header/Header.module.css"

export default function Header ({busca, setBusca}){

    return(
        <header>
            <img src="../src/assets/logo.jpg" alt="SushiGuide" title="SushiGuide" />
            <form>
                <input type="text"
                 placeholder=" 🔍︎  Buscar"
                 value={busca}
                 onChange={(e) => setBusca(e.target.value)}/>
            </form>
        </header>
    );
}