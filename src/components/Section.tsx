import type { SectionProps as RadixSectionProps } from '@radix-ui/themes'
import { Container, Heading, Section as RadixSection } from '@radix-ui/themes'

interface SectionProps extends RadixSectionProps {
  title?: string
}

export const Section: React.FC<SectionProps> = (props) => {
  const { children, title, ...sectionProps } = props

  return (
    <RadixSection width="100%" position="relative" {...sectionProps}>
      <Container size="3" height={sectionProps.height}>
        {title
          ? (
              <Heading
                size="7"
                as="h2"
                align="center"
                weight="bold"
                mb="6"
              >
                {title}
              </Heading>
            )
          : null}
        {children}
      </Container>
    </RadixSection>
  )
}
