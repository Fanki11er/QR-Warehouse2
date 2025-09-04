import { Outlet, useLocation, useParams } from "react-router";
import { homePath, warehousesPath } from "../../../routes/paths";
import { DefaultViewWrapper } from "../../atoms/DefaultViewWrapper/DefaultViewWrapper.styles";
import DesktopSideMenu from "../../molecules/DesktopSideMenu/DesktopSideMenu";
import SideMenuLink from "../../molecules/SideMenuLink/SideMenuLink";
import { WarehouseTitle, WarehouseWrapper } from "./Warehouse.styles";
import FilterField from "../../molecules/FilterField/FilterField";
import { useCallback, useState } from "react";
import { BasicButton } from "../../atoms/BasicButton/BasicButton.styles";
import { importWarehousesItems } from "../../../utilities/importWarehousesItems";
import testData from "../../../testData/oldDatabase.json";
import { useQuery } from "@tanstack/react-query";
import type { WarehouseItemDTO } from "../../../types/dtoTypes";
import { getWarehouseItemsList } from "../../../firebase/readFromDbFunctions";
import { WAREHOUSE_ITEMS } from "../../../constants/queryKeys";
import DataLoader from "../../molecules/DataLoader/DataLoader";
import ErrorIndicator from "../../molecules/ErrorIndicator/ErrorIndicator";
import WarehouseItemsList from "../../molecules/WarehouseItemsList/WarehouseItemsList";

const Warehouse = () => {
  const { warehouseId } = useParams();
  const location = useLocation();

  const [filterValue, setFilter] = useState("");

  const { data, isLoading, error } = useQuery<WarehouseItemDTO[] | null>({
    queryKey: [WAREHOUSE_ITEMS, warehouseId],
    queryFn: () => getWarehouseItemsList(warehouseId || ""),
    staleTime: 1000 * 60, // 1 minute
  });

  const handleFilterChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFilter(e.target.value);
    },
    []
  );

  const warehouseName = location.state?.warehouseName || "Brak nazwy";

  //TODO load items
  //Todo implement items list
  //Todo Implement items filtering

  return (
    <DefaultViewWrapper>
      <DesktopSideMenu>
        <WarehouseTitle>{`Magazyn: ${warehouseName}`}</WarehouseTitle>
        <SideMenuLink to={homePath} label={"Menu"} />
        <SideMenuLink to={warehousesPath} label={"Powrót"} />
        <BasicButton
          onClick={() => importWarehousesItems(JSON.stringify(testData))}
        >
          Importuj itemy
        </BasicButton>
      </DesktopSideMenu>
      <WarehouseWrapper>
        <FilterField onChange={handleFilterChange} value={filterValue} />
        {isLoading && <DataLoader loaderText="Ładuję dane..." />}
        {error && (
          <ErrorIndicator
            errorMessage={error.message}
            alternativeErrorMessage="Błąd podczas ładowania magazynów"
          />
        )}
        {data && (
          <WarehouseItemsList
            items={data.filter(({ orderDescription }) =>
              orderDescription.toLowerCase().includes(filterValue.toLowerCase())
            )}
          />
        )}
      </WarehouseWrapper>
      {/* Warehouse: {warehouseId}
      <Link to={`${warehousesPath}/${warehouseId}/0011`}>Item 0011</Link> */}
      <Outlet />
    </DefaultViewWrapper>
  );
};

export default Warehouse;
