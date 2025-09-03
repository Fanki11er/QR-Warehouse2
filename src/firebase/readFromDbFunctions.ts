import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { warehousesCollection } from "./collectionsNames";
import type { WarehouseDTO } from "../types/dtoTypes";
import { db } from "./configuration";

export const getWarehousesList = async () => {
  try {
    const q = query(collection(db, warehousesCollection), orderBy("name"));

    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map((doc) => {
      return doc.data() as WarehouseDTO;
    });
  } catch (error) {
    console.error("Error fetching warehouses:", error);
    throw error;
  }
};
