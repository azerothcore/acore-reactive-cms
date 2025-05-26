import './waveDivider.css'

interface WaveDividerProps {
  color?: string
  applyGradient?: boolean
}

export const WaveDivider: React.FC<WaveDividerProps> = (props) => {
  const { color, applyGradient } = props
  return (
    <div className="HeroSection__wave-divider" role="presentation">
      <svg data-name="Wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 120" preserveAspectRatio="none">
        {applyGradient
          ? (
              <defs>
                <linearGradient id="WaveDivider-section-gradient">
                  <stop offset="0%" stopColor="var(--gray-2)" />
                  <stop offset="25%" stopColor="var(--indigo-1)" />
                  <stop offset="50%" stopColor="var(--indigo-2)" />
                  <stop offset="75%" stopColor="var(--gray-2)" />
                </linearGradient>
              </defs>
            )
          : null}
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill" style={{ ['--fill-color' as any]: applyGradient ? 'url(\'#WaveDivider-section-gradient\')' : color || 'var(--color-background)' }}></path>
      </svg>
    </div>
  )
}
