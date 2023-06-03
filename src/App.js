import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Companies from "./components/companies/Companies";
import Redidencies from "./components/residencies/Redidencies";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header />
        <Hero />
      </div>
        <Companies />

        <Redidencies />
    </div>
  );
}

export default App;
