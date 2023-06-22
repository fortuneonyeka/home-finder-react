import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Companies from "./components/companies/Companies";
import Redidencies from "./components/residencies/Redidencies";
import Value from "./components/values/Value";
import Contacts from "./components/contacts/Contacts";
import GetStarted from "./components/getStarted/GetStarted";

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
        <GetStarted />
    </div>
  );
}

export default App;
