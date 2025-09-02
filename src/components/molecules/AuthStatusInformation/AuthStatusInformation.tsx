import { BasicButton } from "../../atoms/BasicButton/BasicButton.styles";
import { AuthStatusInformationWrapper } from "./AuthStatusInformation.styles";

const AuthStatusInformation = () => {
  return (
    <AuthStatusInformationWrapper>
      <p>Krzysztof Dziedzic</p>
      <BasicButton>Zaloguj</BasicButton>
    </AuthStatusInformationWrapper>
  );
};

export default AuthStatusInformation;
