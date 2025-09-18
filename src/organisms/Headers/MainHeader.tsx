import Img from "../../atoms/Img/Img";
import ButtonIcon from "../../molecules/ButtonIcon/ButtonIcon";
import HeaderSection from "../../molecules/Sections/HeaderSection";

const MainHeader = ({ ...props }) => {
  return (
    <HeaderSection>
      <ButtonIcon>
        <Img {...props} />
      </ButtonIcon>
    </HeaderSection>
  );
};

export default MainHeader;
