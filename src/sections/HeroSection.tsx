import { Container, Section } from '@radix-ui/themes'
import { HeroBanner } from '@/components/HeroBanner'
import { WaveDivider } from '@/components/WaveDivider'

interface HeroSectionProps {
  imgSrc: HTMLImageElement['src']
  children?: React.ReactNode
}

export const HeroSection: React.FC<HeroSectionProps> = (props) => {
  const { imgSrc, children } = props
  return (
    <HeroBanner imgSrc={imgSrc}>
      <Section pl="4" pr="4">
        <Container
          size="3"
          height={{ initial: '400px', sm: '500px', md: '600px' }}
        >
          {children}
        </Container>
      </Section>
      <WaveDivider applyGradient />
    </HeroBanner>
  )
}
