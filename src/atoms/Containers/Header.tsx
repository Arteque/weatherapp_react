import type { HeaderProps } from "../../../types/headerType";

const Header = ({ className, children, ...props }: HeaderProps) => {
  return (
    <header className={`${className || ""}`} {...props}>
      {children}
    </header>
  );
};

export default Header;
