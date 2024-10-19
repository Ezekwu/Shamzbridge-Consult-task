interface Props {
  children: React.ReactNode
}

export default function Wrapper({children}: Props) {
  return <div className="max-w-screen-2xl mx-auto">{children}</div>
}