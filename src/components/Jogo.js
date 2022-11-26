import styled from "styled-components";
import forca0 from "../assets/forca0.png";
import forca1 from "../assets/forca1.png";
import forca2 from "../assets/forca2.png";
import forca3 from "../assets/forca3.png";
import forca4 from "../assets/forca4.png";
import forca5 from "../assets/forca5.png";
import forca6 from "../assets/forca6.png";

const images = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];

export default function Jogo(props) {
  function formatarPalavra() {
    console.log(props.letrasChutadas, props.palavra);
    const letras = props.palavra.split("");
    const formatado = letras.map((l) =>
      props.letrasChutadas.includes(l) ? l : " _ "
    );
    return formatado.join("");
  }

  return (
    <Container>
      <img src={images[props.contador]} />
      <button onClick={() => props.iniciaJogo()}>Escolher Palavra</button>
      <Palavra>{formatarPalavra()}</Palavra>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 466px;
  position: relative;
  margin-bottom: 70px;

  img {
    height: 466px;
  }

  button {
    width: 200px;
    height: 60px;
    border: none;
    border-radius: 8px;
    font-size: 20px;
    font-weight: 700;
    color: white;
    background-color: var(--verde);
    position: absolute;
    right: 0px;
    top: 30px;
    cursor: pointer;
  }
`;

const Palavra = styled.p`
  margin-bottom: 26px;
  margin-right: 8px;
  font-family: "Noto Sans", "Roboto", sans-serif !important;
  font-size: 50px;
  font-weight: 700;
`;
