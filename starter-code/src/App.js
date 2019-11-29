import React, { Component } from "react";
import IdCard from "./IdCard";
import Random from "./Random";
import Greetings from "./Greetings";
import BoxColor from "./BoxColor";
import CreditCard from "./CreditCard";
import berlin from "./data/berlin.json";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        {berlin.map((card, i) => (
          <IdCard
            picture={card.img}
            lastName={card.lastName}
            firstName={card.firstName}
            country={card.country}
            isStudent={card.isStudent}
            key={i}
          />
        ))}
        <h1>Greetings</h1>
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
        <Greetings lang="cz">Pavel</Greetings>
        <h1>Random</h1>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
        <h1>Box Color</h1>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
        <h1>CreditCard</h1>
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />
        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />
        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
      </div>
    );
  }
}

export default App;
