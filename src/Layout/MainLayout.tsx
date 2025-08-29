import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <>
      <Outlet />
      <footer>Footer</footer>
    </>
  );
};

export default MainLayout;
