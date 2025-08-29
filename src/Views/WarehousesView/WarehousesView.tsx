import { Link, Outlet } from "react-router";
import { warehousesPath } from "../../routes/paths";

const WarehousesView = () => {
  return (
    <>
      <Link to={`${warehousesPath}/1`}>Warehouse1</Link>
      <Link to={`${warehousesPath}/2`}>Warehouse2</Link>
      <Link to={`addNewWarehouse`}>Add New Warehouse</Link>
      <Link to={`editWarehouse/1`}>Edit Warehouse 1</Link>
      <Outlet />
    </>
  );
};

export default WarehousesView;
