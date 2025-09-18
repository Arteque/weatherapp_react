import type { DivType } from "../../../types/divtype";

interface BoxProps extends DivType {
  rounded: "sm" | "md";
}

const Box = ({ className, children, rounded, ...props }: BoxProps) => {
  return (
    <div
      className={`${rounded === "sm" ? "rounded-[.5rem]" : ""} ${
        rounded === "md" ? "rounded-[.75rem]" : ""
      } ${className || ""}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Box;
