import { useState } from "react";
import styled from "styled-components";

const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function Letras(props) {
  return (
    <Container>
      {alfabeto.map((a) => (
        <Button key={a} value={a} {...props} />
      ))}
    </Container>
  );
}

function Button(props) {
  const [clicado, setClicado] = useState(false);

  function validaChute(event) {
    const letra = event.target.innerHTML.toLowerCase();
    props.setLetrasChutadas([...props.letrasChutadas, letra]);
    setClicado(true);
    if (!props.palavra.includes(letra)) {
      props.setContador(props.contador + 1);
    }
  }

  return (
    <StyledButton
      cor={(props.toggle || clicado) === false ? "azul" : "cinza"}
      disabled={props.toggle || clicado}
      onClick={(e) => validaChute(e)}
    >
      {props.value}
    </StyledButton>
  );
}

const Container = styled.div`
  width: 664px;
  display: grid;
  grid-template-columns: repeat(13, 40px);
  grid-template-rows: repeat(2, 40px);
  gap: 12px;
  margin-bottom: 56px;
`;

const StyledButton = styled.button`
  border-radius: 3px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  background-color: var(--background-${(props) => props.cor});
  color: var(--fonte-${(props) => props.cor});
  border: 1px solid var(--borda-${(props) => props.cor});
`;
