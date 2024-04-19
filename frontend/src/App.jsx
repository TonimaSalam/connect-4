import GameBoard from "./components/GameBoard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./components/components.css";

function App() {
  return (
    <div>
      <GameBoard></GameBoard>
      <ToastContainer />
    </div>
  );
}

export default App;
