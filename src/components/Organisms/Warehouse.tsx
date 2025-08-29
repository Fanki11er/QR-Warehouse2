import { Link, Outlet, useParams } from "react-router";
import { warehousesPath } from "../../routes/paths";

const Warehouse = () => {
  const { warehouseId } = useParams();
  return (
    <div>
      Warehouse: {warehouseId}
      <Link to={`${warehousesPath}/${warehouseId}/0011`}>Item 0011</Link>
      <Outlet />
    </div>
  );
};

export default Warehouse;
