import { useParams } from "react-router";

const WarehouseItem = () => {
  const { itemId } = useParams();
  return <div>Warehouse Item: {itemId} </div>;
};

export default WarehouseItem;
