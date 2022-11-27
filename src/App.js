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
  const [status, setStatus] = useState("");

  const props = {
    normalizaPalavra,
    finalizaJogo,
    palavras,
    toggle,
    setToggle,
    palavra,
    setPalavra,
    contador,
    setContador,
    letrasChutadas,
    setLetrasChutadas,
    status,
    setStatus,
  };

  function finalizaJogo(resultado) {
    setToggle(true);
    setStatus(resultado);
    if (resultado === "perdeu") setContador(6);
  }

  function normalizaPalavra(string) {
    return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  function verificaSeAcertou() {
    const palavraFormatada = normalizaPalavra(palavra);
    const acertou = palavraFormatada
      .split("")
      .every((l) => letrasChutadas.includes(l));
    return acertou;
  }

  if (verificaSeAcertou() && !status) finalizaJogo("venceu");

  return (
    <>
      <Jogo {...props}></Jogo>
      <Container>
        <Letras {...props}></Letras>
        <Chute {...props}></Chute>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
