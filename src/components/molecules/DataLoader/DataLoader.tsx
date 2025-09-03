import loaderImage from "../../../assets/svg/loaderImage.svg";
import { DefaultStatusImage } from "../../atoms/DefaultStatusImage/DefaultStatusImage.styles";
import { LoaderText, LoaderWrapper } from "./DataLoader.styles";

type Props = {
  loaderText: string;
};
const DataLoader = ({ loaderText }: Props) => {
  return (
    <LoaderWrapper>
      <DefaultStatusImage src={loaderImage} alt={"Loader image"} />
      <LoaderText>{loaderText}</LoaderText>
    </LoaderWrapper>
  );
};

export default DataLoader;
