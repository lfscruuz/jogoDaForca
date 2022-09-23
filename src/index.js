import ReactDOM from "react-dom";
import "./style.css"
import "./reset.css"
import forca0 from "./assets/forca0.png";

function Topo() {
    return (
        <div className="topo">
            <img src={forca0} alt="forca0" />
            <button>Escolher Palavra</button>
        </div>
    )
}

function Alfabeto() {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    return (
        <ul className="alfabeto">
            {alfabeto.map(letra => <li className="letra">{letra}</li>)}
        </ul>
    )
}

function App() {
    return (
        <div className="webpage">
            <Topo />
            <div>
                <Alfabeto />
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector(".root"))