import { Header } from "./components/header";
import { useToggle } from "./hooks/useToggle";
import { Home } from "./page/Home/index";
function App() {
  const { value: menuToggleValue, handleToggle } = useToggle();

  return (
    <div className="common-container">
      <div
        className="overlay-black"
        active={menuToggleValue ? "true" : "false"}
      ></div> 
      <Home menuToggle={menuToggleValue}></Home>
    </div>
  );
}

export default App;
