import { Link, Outlet } from "react-router";
import { qrScannerPath, warehousesPath } from "../routes/paths";

const WithNavigationLayout = () => {
  return (
    <>
      <nav>
        <Link to={qrScannerPath}>QR Scanner</Link>
        <Link to={warehousesPath}>Warehouses</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default WithNavigationLayout;
