import Container from "../../atoms/Containers/Container"
import Section from "../../atoms/Containers/Section"
import type { DivType } from "../../../types/divtype"
const SectionContainer = ({className, children, ...props}: DivType) => {
  return (
    <Section className={`${className || ''}`} {...props}>
        <Container>{children}</Container>
    </Section>
  )
}

export default SectionContainer