import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'SafeCall - Your Digital Guardian Against Phone Scams',
  description: 'SafeCall helps seniors detect scam calls in real time using on-device AI – private, simple, and built for peace of mind.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <footer className="bg-gray-800 text-white py-8 px-4 text-center text-lg">
          <p>SafeCall – student project, not a real medical or security product</p>
        </footer>
      </body>
    </html>
  )
}

