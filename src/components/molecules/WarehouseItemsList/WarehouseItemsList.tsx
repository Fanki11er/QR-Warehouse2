import type { WarehouseItemDTO } from "../../../types/dtoTypes";
import { SmallButton } from "../../atoms/SmallButton/SmallButton.styles";
import {
  WarehouseItemsListItem,
  WarehouseItemsListItemActions,
  WarehouseItemsListItemLabel,
  WarehouseItemsListWrapper,
} from "./WarehouseItemsList.styles";

type Props = {
  items: WarehouseItemDTO[];
};

const WarehouseItemsList = ({ items }: Props) => {
  return (
    <WarehouseItemsListWrapper>
      {items.map((item) => (
        <WarehouseItemsListItem key={item.id}>
          <WarehouseItemsListItemLabel>
            {item.orderDescription}
          </WarehouseItemsListItemLabel>
          <WarehouseItemsListItemActions>
            <SmallButton>Zamów</SmallButton>
            <SmallButton>Szczegóły</SmallButton>
          </WarehouseItemsListItemActions>
        </WarehouseItemsListItem>
      ))}
    </WarehouseItemsListWrapper>
  );
};

export default WarehouseItemsList;
