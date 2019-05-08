import React, { useState } from "react";
import ReactDOM from "react-dom";
import CreditCardType from "credit-card-type";

import "./styles.css";

function App() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardType, setCardType] = useState("...");
  return (
    <div className="App">
      <h1>Please input your card number</h1>
      <input
        type="text"
        value={cardNumber}
        placeholder="Card Number..."
        onChange={e => {
          const cardNum = e.target.value;
          const cardTypeResult = CreditCardType(cardNum);
          if (cardTypeResult.length === 1)
            setCardType(cardTypeResult[0].niceType);
          else setCardType("...");
          setCardNumber(cardNum);
        }}
      />
      <h1>This card type is {cardType}</h1>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
