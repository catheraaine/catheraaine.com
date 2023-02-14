import '../styles/base.scss';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  )
}
