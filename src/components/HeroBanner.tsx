import { Box } from '@radix-ui/themes'

export interface HeroBannerProps {
  imgSrc: HTMLImageElement['src']
  children?: React.ReactNode
}

export const HeroBanner: React.FC<HeroBannerProps> = (props) => {
  const { imgSrc, children } = props

  return (
    <Box
      width="100%"
      position="relative"
      style={{
        backgroundImage: `linear-gradient(var(--gray-a2), var(--gray-surface)), url(${imgSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {children}
    </Box>
  )
}
