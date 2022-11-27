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
  function iniciaJogo() {
    const index = Math.round(Math.random() * props.palavras.length);
    props.setPalavra(props.palavras[index]);
    props.setToggle(false);
    props.setContador(0);
    props.setLetrasChutadas([]);
    props.setStatus("");
  }

  function formataPalavra() {
    if (props.status) return props.palavra;
    const letras = props.palavra.split("");
    const formatado = letras.map((l) => {
      const letra = props.normalizaPalavra(l);
      return props.letrasChutadas.includes(letra) ? l : " _";
    });
    return formatado.join("");
  }

  function selecionaCor() {
    if (!props.status) return "black";
    if (props.status === "venceu") return "var(--verde)";
    return "var(--vermelho)";
  }

  return (
    <Container>
      <img data-test="game-image" src={images[props.contador]} />
      <button data-test="choose-word" onClick={iniciaJogo}>
        Escolher Palavra
      </button>
      <Palavra
        data-test="word"
        data-answer={props.palavra}
        cor={selecionaCor()}
      >
        {formataPalavra()}
      </Palavra>
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
    transition: 0.3s;
    :active {
      transform: scale(0.9);
    }
    :hover {
      background-color: #289154;
    }
  }
`;

const Palavra = styled.p`
  margin-bottom: 26px;
  margin-right: 8px;
  font-family: "Noto Sans", "Roboto", sans-serif !important;
  font-size: 50px;
  font-weight: 700;
  color: ${(props) => props.cor};
`;
