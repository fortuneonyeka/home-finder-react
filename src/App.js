import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Companies from "./components/companies/Companies";
import Redidencies from "./components/residencies/Redidencies";
import Value from "./components/values/Value";
import Contacts from "./components/contacts/Contacts";

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
        <Value />
        <Contacts />
    </div>
  );
}

export default App;
