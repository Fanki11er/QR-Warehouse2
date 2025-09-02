import { NavigationLinkWrapper } from "./NavigationLink.styles";

type Props = {
  to: string;
  label: string;
};

const NavigationLink = ({ to, label }: Props) => {
  return <NavigationLinkWrapper to={to}>{label}</NavigationLinkWrapper>;
};
export default NavigationLink;
