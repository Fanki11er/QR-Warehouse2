import WarehousesList from "../../molecules/WarehousesList/WarehousesList";
import { WarehousesListSectionWrapper } from "./WarehousesListSection.styles";

const WarehousesListSection = () => {
  return (
    <WarehousesListSectionWrapper>
      <WarehousesList />
    </WarehousesListSectionWrapper>
  );
};

export default WarehousesListSection;
