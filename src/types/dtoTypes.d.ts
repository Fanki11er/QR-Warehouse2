export type WarehouseDTO = {
  identifier: string;
  name: string;
  defaultItemName: string;
};

export type WarehouseItemDTO = {
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
