import Header from "./components/header/header"
import { useState } from "react";
import SushiContent from "./components/sushiContent/sushiContent";


function App() {
  const [busca, setBusca] = useState("");

  return (
    <>
      <Header busca={busca} setBusca={setBusca}/>
      <SushiContent busca={busca}/>
    </>
  )
}

export default App
