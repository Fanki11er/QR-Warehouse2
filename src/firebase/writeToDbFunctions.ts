import { addDoc, collection } from "firebase/firestore";
import type { WarehouseDTO, WarehouseItemDTO } from "../types/dtoTypes";
import { db } from "./configuration";
import {
  warehousesCollection,
  warehousesItemsCollection,
} from "./collectionsNames";

export const addNewWarehouse = async (warehouseData: WarehouseDTO) => {
  try {
    const docRef = await addDoc(
      collection(db, warehousesCollection),
      warehouseData
    );
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const addNewWarehouseItem = async (
  warehouseItemData: WarehouseItemDTO
) => {
  try {
    const docRef = await addDoc(
      collection(db, warehousesItemsCollection),
      warehouseItemData
    );
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
