import type { IconProps } from "../../../types/spanType"

const SmallIconContainer = ({className ,children, ...props }: IconProps) => {
  return (
    <span className={`${className || ''}`} {...props}>{children}</span>
  )
}

export default SmallIconContainer