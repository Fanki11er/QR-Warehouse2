import { addNewWarehouseItem } from "../firebase/writeToDbFunctions";

type DataScheme = {
  QR: {
    Stores: {
      [key: string]: {
        [key: string]: {
          additionalDescriptions: string;
          catalogNumber: string;
          defaultOrderAmount: number;
          dimension: string;
          id: number;
          identifier: string;
          mainType: string;
          name: string;
          orderDescription: string;
          quantity: number;
          secondType: string;
          storeType: string;
        };
      };
    };
  };
};

export const importWarehousesItems = async (data: string) => {
  const warehouses: DataScheme = JSON.parse(data);
  const stores = warehouses.QR.Stores;

  for (const store of Object.values(stores)) {
    for (const key in store) {
      const item = store[key];
      await addNewWarehouseItem(item);
    }
  }
};
