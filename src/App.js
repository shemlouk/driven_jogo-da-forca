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

  console.log(letrasChutadas, palavra);

  const props = {
    finalizaJogo: finalizaJogo,
    palavras: palavras,
    toggle: toggle,
    setToggle: setToggle,
    palavra: palavra,
    setPalavra: setPalavra,
    contador: contador,
    setContador: setContador,
    letrasChutadas: letrasChutadas,
    setLetrasChutadas: setLetrasChutadas,
    status: status,
    setStatus: setStatus,
  };

  function finalizaJogo(resultado) {
    setToggle(true);
    setStatus(resultado);
    if (resultado === "perdeu") setContador(6);
  }

  const venceu = palavra.split("").every((l) => letrasChutadas.includes(l));
  if (venceu && !status) finalizaJogo("venceu");

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
