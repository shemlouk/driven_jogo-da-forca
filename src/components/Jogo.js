export default function Jogo(props) {
  return (
    <div className="jogo">
      <img
        className="jogo__imagem"
        src={`./assets/forca${props.contador}.png`}
      />
      <button onClick={() => props.iniciaJogo()} className="jogo__botao">
        Escolher Palavra
      </button>
      <p className="jogo__palavra">
        {formatarPalavra(props.palavra, props.letrasChutadas)}
      </p>
    </div>
  );
}

function formatarPalavra(str, lst) {
  const letras = str.split("");
  const formatado = letras.map((l) => (lst.includes(l) ? l : " _ "));
  return formatado.join("");
}
