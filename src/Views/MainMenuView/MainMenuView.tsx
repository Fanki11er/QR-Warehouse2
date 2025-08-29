import { Link } from "react-router";
import { qrScannerPath, warehousesPath } from "../../routes/paths";

const MainMenuView = () => {
  return (
    <div>
      <h1>Main Menu</h1>
      <nav>
        <div>
          <Link to={qrScannerPath}>QR Scanner</Link>
          <Link to={warehousesPath}>Warehouses</Link>
        </div>
      </nav>
    </div>
  );
};

export default MainMenuView;
