export default function Chute() {
  return (
    <div className="chute">
      <label>
        Já sei a palavra!
        <input className="chute__texto" type="text" disabled></input>
        <input
          className="chute__botao botao"
          type="button"
          value="Chutar"
          disabled
        ></input>
      </label>
    </div>
  );
}
