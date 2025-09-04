import { warehousesPath } from "../../../routes/paths";
import type { WarehouseDTO } from "../../../types/dtoTypes";
import {
  WarehousesListItem,
  WarehousesListItemLink,
  WarehousesListWrapper,
} from "./WarehousesList.styles";

type Props = {
  warehouses: WarehouseDTO[];
};

const WarehousesList = ({ warehouses }: Props) => {
  return (
    <WarehousesListWrapper>
      {warehouses.map(({ identifier, name }) => (
        <WarehousesListItem key={identifier}>
          <WarehousesListItemLink
            to={`${warehousesPath}/${identifier}`}
            state={{
              warehouseName: name,
            }}
          >
            {name}
          </WarehousesListItemLink>
        </WarehousesListItem>
      ))}
    </WarehousesListWrapper>
  );
};
export default WarehousesList;
