import { useQuery } from "@tanstack/react-query";
import WarehousesList from "../../molecules/WarehousesList/WarehousesList";
import { WarehousesListSectionWrapper } from "./WarehousesListSection.styles";
import type { WarehouseDTO } from "../../../types/dtoTypes";
import { getWarehousesList } from "../../../firebase/readFromDbFunctions";
import { WAREHOUSES } from "../../../constants/queryKeys";
import DataLoader from "../../molecules/DataLoader/DataLoader";
import ErrorIndicator from "../../molecules/ErrorIndicator/ErrorIndicator";
import { useCallback, useState } from "react";
import FilterInput from "../../molecules/FilterField/FilterField";

const WarehousesListSection = () => {
  const [filterValue, setFilterValue] = useState<string>("");

  const handleFilterChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFilterValue(event.target.value);
    },
    []
  );

  const { data, isLoading, error } = useQuery<WarehouseDTO[] | null>({
    queryKey: [WAREHOUSES],
    queryFn: getWarehousesList,
    staleTime: 1000 * 60 * 10, // 10 minutes
  });

  return (
    <WarehousesListSectionWrapper>
      <FilterInput value={filterValue} onChange={handleFilterChange} />
      {isLoading && <DataLoader loaderText="Ładuję dane..." />}
      {error && (
        <ErrorIndicator
          errorMessage={error.message}
          alternativeErrorMessage="Błąd podczas ładowania magazynów"
        />
      )}
      {data && (
        <WarehousesList
          warehouses={data.filter(({ name }) =>
            name.toLowerCase().includes(filterValue.toLowerCase())
          )}
        />
      )}
    </WarehousesListSectionWrapper>
  );
};

export default WarehousesListSection;
