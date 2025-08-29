import { useParams } from "react-router";

const EditWarehouseForm = () => {
  const { warehouseId } = useParams();
  return (
    <form>
      <h2>Edit Warehouse {warehouseId}</h2>
      {/* Form fields for editing a warehouse */}
    </form>
  );
};

export default EditWarehouseForm;
