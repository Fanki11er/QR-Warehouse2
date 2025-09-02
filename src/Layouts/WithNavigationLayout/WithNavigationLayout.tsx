import { Outlet } from "react-router";
import { qrScannerPath, warehousesPath } from "../../routes/paths";
import NavigationLink from "../../components/molecules/NavigationLink/NavigationLink";
import {
  WithNavigationLayoutNavigation,
  WithNavigationLayoutWrapper,
} from "./WithNavigationLayout.styles";

const WithNavigationLayout = () => {
  return (
    <WithNavigationLayoutWrapper>
      <WithNavigationLayoutNavigation>
        <NavigationLink to={qrScannerPath} label="Scanner" />
        <NavigationLink to={warehousesPath} label="Magazyny" />
        <NavigationLink to={""} label="Braki" />
        <NavigationLink to={""} label="Zamówienia" />
        <NavigationLink to={""} label="Etykiety" />
        <NavigationLink to={""} label="Użytkownicy" />
      </WithNavigationLayoutNavigation>
      <Outlet />
    </WithNavigationLayoutWrapper>
  );
};

export default WithNavigationLayout;
