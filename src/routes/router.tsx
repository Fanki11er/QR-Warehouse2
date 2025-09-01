import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import QrCodeScannerView from "../Views/QrCodeScannerView/QrCodeScannerView";
import { editWarehousePath, qrScannerPath, warehousesPath } from "./paths";
import WarehousesView from "../Views/WarehousesView/WarehousesView";
import Warehouse from "../components/Organisms/Warehouse";
import AddNewWarehouseForm from "../components/Organisms/AddNewWarehouseForm/AddNewWarehouseForm";
import WarehouseItem from "../components/Organisms/WarehouseItem/WarehouseItem";
import MainMenuView from "../Views/MainMenuView/MainMenuView";
import WithNavigationLayout from "../Layouts/WithNavigationLayout";
import EditWarehouseForm from "../components/Organisms/EditWorkhouseForm/EditWorkhouseForm";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<MainMenuView />} />
          <Route element={<WithNavigationLayout />}>
            <Route path={qrScannerPath} element={<QrCodeScannerView />} />
            <Route path={warehousesPath}>
              <Route index element={<WarehousesView />} />
              <Route path={`:warehouseId`}>
                <Route index element={<Warehouse />} />
                <Route path={`:itemId`} element={<WarehouseItem />} />
              </Route>
              <Route
                path={`addNewWarehouse`}
                element={<AddNewWarehouseForm />}
              />
              <Route path={editWarehousePath} element={<EditWarehouseForm />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
