import styled from "styled-components";

const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function Letras(props) {
  return (
    <Container>
      {alfabeto.map((a) => (
        <Botao
          key={a}
          cor={props.toggle === false ? "azul" : "cinza"}
          disabled={props.toggle}
          onClick={alert}
        >
          {a}
        </Botao>
      ))}
    </Container>
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

const Botao = styled.button`
  border-radius: 3px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  background-color: var(--background-${(props) => props.cor});
  color: var(--fonte-${(props) => props.cor});
  border: 1px solid var(--borda-${(props) => props.cor});
`;
