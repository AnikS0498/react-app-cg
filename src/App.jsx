import "./App.css";
import ClickCounter from "./components/ClickCounter";
import Footer from "./components/Footer";
import Greet from "./components/Greet";
import Header from "./components/Header";
import HoverCounter from "./components/HoverCounter";
import LifeCycleMethods from "./components/LifeCycleMethods";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Header compName="Capgemini" location="Pune" />
      {/* <Greet /> */}
      {/* <Login /> */}
      {/* <Footer /> */}
      {/* <HoverCounter />
      <ClickCounter /> */}
      <LifeCycleMethods />
    </div>
  );
}

export default App;
