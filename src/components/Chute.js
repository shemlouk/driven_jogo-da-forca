export default function Chute(props) {
  return (
    <div className="chute">
      <label>
        Já sei a palavra!
        <input
          className="chute__texto"
          type="text"
          disabled={props.toggle}
        ></input>
        <input
          onClick={alert}
          className="chute__botao botao"
          type="button"
          value="Chutar"
          disabled={props.toggle}
        ></input>
      </label>
    </div>
  );
}
