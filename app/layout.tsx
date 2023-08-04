import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Notes App',
  description: 'Fireship notes app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

// takes children of the layout page cna all pages will have
// any code here will be displayed on EVERY page
// global nav bars and footers
// App contains global CSS as well
