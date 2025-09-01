import { Outlet } from "react-router";
import Footer from "../../components/molecules/Footer/Footer";
import { MainLayoutWrapper } from "./MainLayout.styles";
import AuthStatusInformation from "../../components/molecules/AuthStatusInformation/AuthStatusInformation";

const MainLayout = () => {
  return (
    <MainLayoutWrapper>
      <AuthStatusInformation />
      <Outlet />
      <Footer />
    </MainLayoutWrapper>
  );
};

export default MainLayout;
