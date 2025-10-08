import style from "../header/Header.module.css"

export default function Header (){
    return(
        <header>
            <img src="../src/assets/logo.jpg" alt="SushiGuide" title="SushiGuide" />
            <form action="">
                <input type="text" placeholder=" 🔍︎  Buscar"/>
            </form>
        </header>
    );
}