import { qrScannerPath, warehousesPath } from "../../routes/paths";
import MainMenuLink from "../../components/molecules/MainMenuLink/MainMenuLink";
import { MainMenuWrapper } from "./MainMenuView.styles";

const MainMenuView = () => {
  return (
    <MainMenuWrapper>
      <MainMenuLink to={qrScannerPath} label="Skaner" />
      <MainMenuLink to={warehousesPath} label="Magazyny" />
      <MainMenuLink to={""} label="Braki" />
      <MainMenuLink to={""} label="Zamówienia" />
      <MainMenuLink to={""} label="Etykiety" />
      <MainMenuLink to={""} label="Użytkownicy" />
    </MainMenuWrapper>
  );
};

export default MainMenuView;
