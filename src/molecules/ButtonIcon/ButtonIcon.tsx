import Button from "../../atoms/Buttons/Button";
import SmallIconContainer from "../../atoms/Containers/SmallIconContainer";

const ButtonIcon = ({
  children,
  ...props
}: {
  children: React.ReactNode | string;
}) => {
  return (
    <Button {...props}>
      <SmallIconContainer>{children}</SmallIconContainer>
    </Button>
  );
};

export default ButtonIcon;
