import Header from "./componets/Header";
import SideBar from "./componets/SideBar";
import StockData from "./componets/StockData";
import { useState } from "react";
//import { useState } from "react";

function App() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div>
      <div
        className="menu_block"
        style={{ opacity: click ? "0.6" : "0" }}
      ></div>
      <Header />
      <SideBar click={click} handleClick={handleClick} />
      <StockData />
    </div>
  );
}

export default App;
