import { Header } from "../../components/Header";
import background from "../../assets/background.png";
import ItemList from "../../components/ItemList";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img src={background} className="background" alt="background app" />
        <div className="info">
          <div>
            <input name="usuario" placeholder="@username" />
            <button>Buscar</button>
          </div>
          <div className="perfil">
            <img
              src="https://avatars.githubusercontent.com/u/84539855?v=4"
              className="profile"
              alt="imagem de perfil"
            />
            <div>
              <h3>Diego Abenicio</h3>
              <span>@diegoabenicio</span>
              <p>
                I am seeking a professional opportunity that allows for my
                intellectual, professional, and technical growth, so that I can
                contribute to the company for a long
              </p>
            </div>
          </div>
          <hr />
          <div>
            <h4 className="repositorio">Repositorios</h4>
            <ItemList title="Teste 1" description="descripiton" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
