import { useState } from "react";
import Chute from "./components/Chute";
import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import palavras from "./palavras";

export default function App() {
  const [palavra, setPalavra] = useState("");
  const [toggle, setToggle] = useState(true);
  const [contador, setContador] = useState(0);
  const [letrasChutadas, setLetrasChutadas] = useState([]);
  console.log(`NOVO JOGO INICIADO\nPalavra sorteada: ${palavra}`);

  function iniciaJogo() {
    setPalavra(selecionaPalavra(palavras));
    setToggle(false);
    setContador(0);
    setLetrasChutadas([]);
  }

  return (
    <>
      <Jogo
        iniciaJogo={iniciaJogo}
        palavra={palavra}
        letrasChutadas={letrasChutadas}
        contador={contador}
      ></Jogo>
      <div className="container">
        <Letras toggle={toggle} setLetrasChutadas={setLetrasChutadas}></Letras>
        <Chute toggle={toggle}></Chute>
      </div>
    </>
  );
}

function selecionaPalavra(arr) {
  const index = Math.round(Math.random() * arr.length);
  return arr[index];
}
