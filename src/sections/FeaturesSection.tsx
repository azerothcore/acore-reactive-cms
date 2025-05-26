import { Card, Grid, Heading, Text } from '@radix-ui/themes'
import { Section } from '@/components/Section'

export const FeaturesSection: React.FC = () => {
  return (
    <Section title="Features" id="features" applyGradient>
      <Grid columns="3" gap="4">
        <Card>
          <Heading size="3" as="h2" weight="bold">
            Progressive
          </Heading>
          <Text size="2" as="p" mt="2">
            Description of feature 1.
          </Text>
        </Card>
        <Card>
          <Heading size="3" as="h2" weight="bold">
            Powered by Azeroth Core
          </Heading>
          <Text size="2" as="p" mt="2">
            Description of feature 2.
          </Text>
        </Card>
        <Card>
          <Heading size="3" as="h2" weight="bold">
            Feature 3
          </Heading>
          <Text size="2" as="p" mt="2">
            Description of feature 3.
          </Text>
        </Card>
        <Card>
          <Heading size="3" as="h2" weight="bold">
            Feature 3
          </Heading>
          <Text size="2" as="p" mt="2">
            Description of feature 3.
          </Text>
        </Card>
        <Card>
          <Heading size="3" as="h2" weight="bold">
            Feature 3
          </Heading>
          <Text size="2" as="p" mt="2">
            Description of feature 3.
          </Text>
        </Card>
        <Card>
          <Heading size="3" as="h2" weight="bold">
            Feature 3
          </Heading>
          <Text size="2" as="p" mt="2">
            Description of feature 3.
          </Text>
        </Card>
      </Grid>
    </Section>
  )
}
