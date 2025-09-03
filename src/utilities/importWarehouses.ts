import { addNewWarehouse } from "../firebase/writeToDbFunctions";

type DataScheme = {
  QR: {
    StoreTypes: {
      [key: string]: {
        defaultItemName: string;
        identifier: string;
        name: string;
      };
    };
  };
};

export const importWarehouses = async (data: string) => {
  const warehouses: DataScheme = JSON.parse(data);
  const storeTypes = warehouses.QR.StoreTypes;

  for (const key in storeTypes) {
    const storeType = storeTypes[key];
    await addNewWarehouse(storeType);
  }
};
