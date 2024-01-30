import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./Pages/Main";
import Footer from "./components/footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
