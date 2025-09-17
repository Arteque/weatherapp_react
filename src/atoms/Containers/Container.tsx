import type { DivType } from '../../../types/divtype'

const Container = ({className, children, ...props}: DivType) => {
  return (
    <div className={`container mx-auto ${className?className:""}`} {...props}>{children}</div>
  )
}

export default Container