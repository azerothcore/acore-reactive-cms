import { Button, Flex, Heading, Text } from '@radix-ui/themes'
import heroImage from '@/assets/hero-landing-image.png'
import { Link } from '@/components/Link'
import { FeaturesSection } from '@/sections/FeaturesSection'
import { HeroSection } from '@/sections/HeroSection'
import { PlaySection } from '@/sections/PlaySection'

function Home() {
  return (
    <>
      <HeroSection imgSrc={heroImage}>
        <Flex position="relative" height="100%" direction="column" gap="3" align="start" justify="center">
          <Heading as="h1" size="8" weight="bold" align="left">
            Azeroth Core
          </Heading>
          <Heading as="h3" size="5" weight="light" align="left">
            Complete Open Source and Modular solution for MMO.
          </Heading>
          <Flex gap="3" align="center" justify="start">
            <Link href="#register">
              <Button color="amber" size="4"><Text weight="bold">Join us</Text></Button>
            </Link>
            <Link href="#features">
              <Button color="amber" size="4" variant="surface"><Text weight="bold">Discover more</Text></Button>
            </Link>
          </Flex>
        </Flex>
      </HeroSection>
      <FeaturesSection />
      <PlaySection />
    </>
  )
}

export default Home
