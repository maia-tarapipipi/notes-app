import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Notes App',
  description: 'simple notes app, for making and deleting notes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-blue-900 text-white">{children}</body>
    </html>
  )
}

// takes children of the layout page cna all pages will have
// any code here will be displayed on EVERY page
// global nav bars and footers
// App contains global CSS as well
