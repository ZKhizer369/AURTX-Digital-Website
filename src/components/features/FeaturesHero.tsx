import workspace from '../../assets/features/hero-workspace.png'
import { PresentationButton } from '../ui/PresentationButton'

export function FeaturesHero() {
  return <section aria-labelledby="features-title" className="mx-auto grid max-w-325 items-center gap-10 px-5 py-10 sm:px-6 sm:py-16 min-[990px]:grid-cols-[1fr_1.2fr] min-[1100px]:gap-12">
    <div className="flex min-w-0 flex-col items-start gap-6 max-[990px]:order-1">
      <p className="rounded-[9px] bg-[#3fb59a3b] p-2.5 text-sm leading-none font-extrabold text-[#2b7a62] sm:text-sm">POWERFUL FEATURES</p>
      <div className="space-y-4.25 font-[Lato,sans-serif] leading-[1.2]">
        <h1 id="features-title" className="font-extrabold text-[38px] max-md:text-[28px]">Everything Your Team Needs to Work Smarter</h1>
        <p className="text-2xl leading-7.5 text-[#0b7462] max-md:text-xl">Aurtx Digital brings your client conversations, team, tasks, and AI assistance together in one connected workspace. Manage your everyday business work from one place and keep your team aligned.</p>
      </div>
      <div className="flex flex-wrap gap-2.5 max-md:flex-col max-md:w-full">
        <PresentationButton tone="green" outline>Get Started</PresentationButton>
        <PresentationButton tone="green" outline>Learn More</PresentationButton>
      </div>
      <div className="space-y-3 font-[Lato,sans-serif] text-lg leading-relaxed font-bold">
        <p>Built for modern teams</p>
        <p className="text-[#5d5d5d]">Manage conversations <span className="text-[#0b7462]">•</span> Organize work <span className="text-[#0b7462]">•</span> Assist clients with AI</p>
      </div>
    </div>
    <img src={workspace} width="794" height="551" fetchPriority="high" alt="Aurtx workspace connecting client conversations, team activity, tasks and AI assistance" className="mx-auto aspect-794/551 w-full max-[1099px]:max-w-full rounded-[18px] object-cover" />
  </section>
}
