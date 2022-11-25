const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function Letras(props) {
  return (
    <div className="letras">
      {alfabeto.map((a) => (
        <button
          key={a}
          className={`botao ${props.toggle ? "botao--desabilitado" : ""}`}
          disabled={props.toggle}
          onClick={alert}
        >
          {a}
        </button>
      ))}
    </div>
  );
}
