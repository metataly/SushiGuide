import Header from "./components/header/header";
import { useState } from "react";
import SushiContent from "./components/sushiContent/sushiContent";
import "./App.css";


function App() {
  const [busca, setBusca] = useState("");

  return (
    <>
      <Header busca={busca} setBusca={setBusca}/>
      <section>
        <SushiContent busca={busca}/>
      </section>
    </>
  )
}

export default App
