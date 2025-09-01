import { MainMenuLinkWrapper } from "./MainMenuLink.styles";

type Props = {
  to: string;
  label: string;
};

const MainMenuLink = ({ to, label }: Props) => {
  return <MainMenuLinkWrapper to={to}>{label}</MainMenuLinkWrapper>;
};

export default MainMenuLink;
