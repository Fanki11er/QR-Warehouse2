import { addDoc, collection } from "firebase/firestore";
import type { WarehouseDTO } from "../types/dtoTypes";
import { db } from "./configuration";
import { warehousesCollection } from "./collectionsNames";

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
