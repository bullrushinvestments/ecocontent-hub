import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EcoContent Hub',
  description: 'EcoContent Hub is a subscription-based platform that connects small businesses and online shoppers to climate-friendly content creators while providing tools for carbon footprint tracking and offsetting.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">EcoContent Hub</h1>
      <p className="mt-4 text-lg">EcoContent Hub is a subscription-based platform that connects small businesses and online shoppers to climate-friendly content creators while providing tools for carbon footprint tracking and offsetting.</p>
    </main>
  )
}
