import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import {
  warehousesCollection,
  warehousesItemsCollection,
} from "./collectionsNames";
import type { WarehouseDTO, WarehouseItemDTO } from "../types/dtoTypes";
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

export const getWarehouseItemsList = async (storeType: string) => {
  try {
    const q = query(
      collection(db, warehousesItemsCollection),
      where("storeType", "==", storeType),
      orderBy("name"),
      orderBy("mainType"),
      orderBy("secondType")
    );

    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map((doc) => {
      return doc.data() as WarehouseItemDTO;
    });
  } catch (error) {
    console.error("Error fetching warehouse items:", error);
    throw error;
  }
};
