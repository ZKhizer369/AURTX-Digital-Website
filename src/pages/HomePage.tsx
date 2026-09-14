import { useAppStore } from '../stores/useAppStore'

export default function HomePage() {
  const greeting = useAppStore((state) => state.greeting)

  return (
    <main className="min-h-screen bg-white p-6 text-neutral-900">
      <h1 className="text-2xl font-semibold">{greeting}</h1>
    </main>
  )
}
