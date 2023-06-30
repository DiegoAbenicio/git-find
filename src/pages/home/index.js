import { useState } from "react"; 
import { Header } from "../../components/Header";
import background from "../../assets/background.png";
import ItemList from "../../components/ItemList";
import "./styles.css";

function App() {
  const [user, setUser] = useState('');
  const [currentuUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);

  const handleGetData = async () =>{
    const userData = await fetch('https://api.github.com/users/${user}');
    const newUser = await userData.json();

    if(newUser.name){
      const {avatar_url, name, bio} = newUser;
      setCurrentUser({ avatar_url, name, bio });
    
      const reposData = await fetch("https://api.github.com/users/${user}/repos");
      const newRepos = await reposData.json();

      if(newRepos.lenght){
        setRepos(newRepos);
      }
    }
  }

  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img src={background} className="background" alt="background app" />
        <div className="info">
          <div>
            <input
              name="usuario"
              value={user}
              onChange={(event) => setUser(event.target.value)}
              placeholder="@username"
            />
            <button onClick={handleGetData}>Buscar</button>
          </div>
          {currentuUser?.name ? (
            <>
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
                    intellectual, professional, and technical growth, so that I
                    can contribute to the company for a long
                  </p>
                </div>
              </div>
              <hr />
            </>
          ) : null}
          {repos?.lenght ? (
            <div>
              <h4 className="repositorio">Repositorios</h4>
              <ItemList title="Teste 1" description="descripiton" />
            </div>
          ): null}
        </div>
      </div>
    </div>
  );
}

export default App;
