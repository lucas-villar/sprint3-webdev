import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Vantagens from "./Vantagens";
// import Funcionalidades from "./Funcionalidades";
// import Contato from "./Contato";
// import Tarefas from "./Tarefas";


function App() {
  // Definir o estado para qual seção mostrar
  const [componenteAtual, setComponenteAtual] = useState("home");

  // Funções para mudar o estado e renderizar o componente correto
  const mudarParaHome = () => setComponenteAtual("home");
  const mudarParaVantagens = () => setComponenteAtual("vantagens");
  const mudarParaFuncionalidades = () => setComponenteAtual("funcionalidades");
  const mudarParaContato = () => setComponenteAtual("contato");
  const mudarParaTarefas = () => setComponenteAtual("tarefas");

  return (
    <div className="app">
      <Header
        mudarParaHome={mudarParaHome}
        mudarParaVantagens={mudarParaVantagens}
        mudarParaFuncionalidades={mudarParaFuncionalidades}
        mudarParaContato={mudarParaContato}
        mudarParaTarefas={mudarParaTarefas}
      />
      <main>
        {/* Renderiza o componente com base no estado */}
        {componenteAtual === "home" && <Home />}
        {componenteAtual === "vantagens" && <Vantagens />}
        {componenteAtual === "funcionalidades" && <Funcionalidades />}
        {componenteAtual === "contato" && <Contato />}
        {componenteAtual === "tarefas" && <Tarefas />}
      </main>
        <Footer />
    </div>
  );
}

export default App;