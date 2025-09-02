import type { PropsWithChildren } from "react";
import { DesktopSideMenuWrapper } from "./DesktopSideMenu.styles";

const DesktopSideMenu = ({ children }: PropsWithChildren) => {
  return <DesktopSideMenuWrapper>{children}</DesktopSideMenuWrapper>;
};

export default DesktopSideMenu;
