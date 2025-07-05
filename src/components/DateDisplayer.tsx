interface Props {
  date: string
}

export function DateDisplayer(props: Props) {
  const { date, ...rest } = props
  return (
    <time dateTime={date} {...rest}>
      {new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })}
    </time>
  )
}
