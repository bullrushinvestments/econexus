import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EcoNexus',
  description: 'EcoNexus is a subscription-based marketplace that connects small businesses with sustainable products and services. It also offers AI-driven insights to help them optimize their supply chains for sustainability.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">EcoNexus</h1>
      <p className="mt-4 text-lg">EcoNexus is a subscription-based marketplace that connects small businesses with sustainable products and services. It also offers AI-driven insights to help them optimize their supply chains for sustainability.</p>
    </main>
  )
}
