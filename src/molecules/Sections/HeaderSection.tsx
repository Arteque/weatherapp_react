import Container from "../../atoms/Containers/Container";
import Header from "../../atoms/Containers/Header";

const HeaderSection = ({
  children,
}: {
  children: React.ReactNode | string;
}) => {
  return (
    <Header>
      <Container className="flex flex-row justify-between items-center p-[1rem]">
        {children}
      </Container>
    </Header>
  );
};

export default HeaderSection;
