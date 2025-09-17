import type { DivType } from "../../../types/divtype"

const Section = ({className, children, ...props}:DivType) => {
  return (
    <section className={`${className||''}`} {...props}>{children}</section>
  )
}

export default Section