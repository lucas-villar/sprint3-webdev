import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Vantagens from "./Vantagens";
import Funcionalidades from "./Funcionalidades";
import Contato from "./Contato";


function App() {
  // Definir o estado para qual seção mostrar
  const [componenteAtual, setComponenteAtual] = useState("home");

  // Funções para mudar o estado e renderizar o componente correto
  const mudarParaHome = () => setComponenteAtual("home");
  const mudarParaVantagens = () => setComponenteAtual("vantagens");
  const mudarParaFuncionalidades = () => setComponenteAtual("funcionalidades");
  const mudarParaContato = () => setComponenteAtual("contato");

  return (
    <div className="app">
      <Header
        mudarParaHome={mudarParaHome}
        mudarParaVantagens={mudarParaVantagens}
        mudarParaFuncionalidades={mudarParaFuncionalidades}
        mudarParaContato={mudarParaContato}
      />
      <main>
        {/* Renderiza o componente com base no estado */}
        {componenteAtual === "home" && <Home />}
        {componenteAtual === "vantagens" && <Vantagens />}
        {componenteAtual === "funcionalidades" && <Funcionalidades />}
        {componenteAtual === "contato" && <Contato />}
      </main>
        <Footer />
    </div>
  );
}

export default App;