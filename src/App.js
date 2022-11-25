import Chute from "./components/Chute";
import Jogo from "./components/Jogo";
import Letras from "./components/Letras";

export default function App() {
  return (
    <>
      <Jogo></Jogo>
      <div className="container">
        <Letras></Letras>
        <Chute></Chute>
      </div>
    </>
  );
}
