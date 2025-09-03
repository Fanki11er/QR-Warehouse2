import { Link, Outlet, useParams } from "react-router";
import { warehousesPath } from "../../routes/paths";

const Warehouse = () => {
  const { warehouseId } = useParams();
  //Todo add styles
  //TODO load items
  //Todo implement items list
  //Todo Implement items filtering
  return (
    <div>
      Warehouse: {warehouseId}
      <Link to={`${warehousesPath}/${warehouseId}/0011`}>Item 0011</Link>
      <Outlet />
    </div>
  );
};

export default Warehouse;
