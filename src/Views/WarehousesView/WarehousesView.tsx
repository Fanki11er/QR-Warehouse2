import { Outlet } from "react-router";

import { DefaultViewWrapper } from "../../components/atoms/DefaultViewWrapper/DefaultViewWrapper.styles";
import DesktopSideMenu from "../../components/molecules/DesktopSideMenu/DesktopSideMenu";
import SideMenuLink from "../../components/molecules/SideMenuLink/SideMenuLink";
import { addNewWarehousePath, homePath } from "../../routes/paths";
import WarehousesListSection from "../../components/Organisms/WarehousesListSection/WarehousesListSection";
import { BasicButton } from "../../components/atoms/BasicButton/BasicButton.styles";
import { importWarehouses } from "../../utilities/importWarehouses";
import testData from "../../testData/oldDatabase.json";

const WarehousesView = () => {
  return (
    <DefaultViewWrapper>
      <DesktopSideMenu>
        <SideMenuLink to={homePath} label="Menu" />
        <SideMenuLink to={addNewWarehousePath} label="Dodaj magazyn" />
        <BasicButton
          onClick={() => {
            importWarehouses(JSON.stringify(testData));
          }}
        >
          Importuj magazyny
        </BasicButton>
      </DesktopSideMenu>
      <WarehousesListSection />
      {/* <Link to={`${warehousesPath}/1`}>Warehouse1</Link>
      <Link to={`${warehousesPath}/2`}>Warehouse2</Link>
      <Link to={`editWarehouse/1`}>Edit Warehouse 1</Link> */}
      <Outlet />
    </DefaultViewWrapper>
  );
};

export default WarehousesView;
