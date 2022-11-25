const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function Letras() {
  return (
    <div className="letras">
      {letras.map((l) => (
        <button key={l} className="botao botao--desabilitado" disabled>
          {l}
        </button>
      ))}
    </div>
  );
}
