import { BiLineChart } from "react-icons/bi";
import User from "./User";

const Header = () => {
  return (
    <div className="header">
      <div className="title">
        <BiLineChart className="logo_analyze" />
        <div className="stock_analyze">Stock Analyze</div>
      </div>
      <User />
    </div>
  );
};

export default Header;
