import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Companies from "../components/companies/Companies";
import Redidencies from "../components/residencies/Redidencies";
import Value from "../components/values/Value";
import Contacts from "../components/contacts/Contacts";
import GetStarted from "../components/getStarted/GetStarted";
import Footer from "../components/footer/Footer";

const Website = () => {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />

        <Hero />
      </div>
      <Companies />
      <Redidencies />
      <Value />
      <Contacts />
      <GetStarted />
    </div>
  );
};

export default Website;
