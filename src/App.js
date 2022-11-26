import { useState } from "react";
import styled from "styled-components";
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
      <Container>
        <Letras toggle={toggle} setLetrasChutadas={setLetrasChutadas}></Letras>
        <Chute toggle={toggle}></Chute>
      </Container>
    </>
  );
}

function selecionaPalavra(arr) {
  const index = Math.round(Math.random() * arr.length);
  return arr[index];
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
