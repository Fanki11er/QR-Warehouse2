import {
  WarehousesListItem,
  WarehousesListItemLink,
  WarehousesListWrapper,
} from "./WarehousesList.styles";

const WarehousesList = () => {
  return (
    <WarehousesListWrapper>
      <WarehousesListItem>
        <WarehousesListItemLink to="">Śruby</WarehousesListItemLink>
      </WarehousesListItem>
      <WarehousesListItem>
        <WarehousesListItemLink to="">Hydraulika</WarehousesListItemLink>
      </WarehousesListItem>
    </WarehousesListWrapper>
  );
};
export default WarehousesList;
