import { FilterFieldInput, FilterFieldLabel } from "./FilterField.styles";
type Props = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
};

const FilterField = ({ value, onChange, label }: Props) => {
  return (
    <FilterFieldLabel>
      {label || "Filtruj"}
      <FilterFieldInput value={value} onChange={onChange} />
    </FilterFieldLabel>
  );
};

export default FilterField;
