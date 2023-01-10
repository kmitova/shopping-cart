import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App(props) {
  const { cartItems } = props;
  return (
    <div className="App">
      <Navbar cartItemsLength={cartItems.length} />
      <Home />
    </div>
  );
}

export default App;
