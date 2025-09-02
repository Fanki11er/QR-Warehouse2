import { SideMenuLinkWrapper } from "./SideMenuLink.styles";

type Props = {
  to: string;
  label: string;
};

const SideMenuLink = ({ to, label }: Props) => {
  return <SideMenuLinkWrapper to={to}>{label}</SideMenuLinkWrapper>;
};

export default SideMenuLink;
