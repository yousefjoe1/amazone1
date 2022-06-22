import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Checkout from "./Components/checkout/Checkout";
import Signin from "./Components/Signin1/Signin";
import CreateAcc from "./Components/Register/CreateAcc";
import { createContext } from "react";
import { useState } from "react";

export let TheConext = createContext();

function App() {
  const [basket, setBasket] = useState([]);
  let func = (e) => {
    let newbasket = [...basket, e];
    setBasket(newbasket);
  };

  const removeproduct = (e) => {
    let maponbasket = basket.filter((pr) => {
      return pr.id !== e;
    });
    setBasket(maponbasket);
  };

  return (
    <div className="App">
      <TheConext.Provider value={basket}>
        <Header />
        <Routes>
          <Route path="/" element={<Home func={(e) => func(e)} />} />
          <Route
            path="/checkout"
            element={<Checkout removeP={(e) => removeproduct(e)} />}
          />
          <Route path="/sign" element={<Signin />} />
          <Route path="/register" element={<CreateAcc />} />
        </Routes>
      </TheConext.Provider>
    </div>
  );
}

export default App;
