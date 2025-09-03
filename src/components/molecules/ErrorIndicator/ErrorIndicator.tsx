import errorImage from "../../../assets/svg/errorImage.svg";
import { DefaultStatusImage } from "../../atoms/DefaultStatusImage/DefaultStatusImage.styles";
import {
  ErrorIndicatorText,
  ErrorIndicatorWrapper,
} from "./ErrorIndicator.styles";

type Props = {
  errorMessage: string;
  alternativeErrorMessage?: string;
};

const ErrorIndicator = ({ errorMessage, alternativeErrorMessage }: Props) => {
  return (
    <ErrorIndicatorWrapper>
      <DefaultStatusImage src={errorImage} alt={"Error image"} />
      <ErrorIndicatorText>
        {alternativeErrorMessage || errorMessage}
      </ErrorIndicatorText>
    </ErrorIndicatorWrapper>
  );
};

export default ErrorIndicator;
