import workspace from '../../assets/how-it-works/hero-workspace.png'
import { PresentationButton } from '../ui/PresentationButton'

export function HowItWorksHero() {
  return <section aria-labelledby="how-it-works-title" className="mx-auto grid max-w-337 items-center gap-10 px-5 py-14 sm:px-6 sm:py-20 min-[990px]:grid-cols-[1fr_1.25fr] min-[1100px]:gap-16 min-[1100px]:py-28">
    <div className="flex min-w-0 flex-col items-start gap-6">
      <p className="rounded-[9px] bg-[#3fb59a3b] p-2.5 text-sm leading-none font-extrabold text-[#2b7a62]">HOW IT WORKS</p>
      <h1 id="how-it-works-title" className="max-w-110 text-[clamp(30px,2.8vw,40px)] leading-[1.08] font-extrabold">From Client Message to Completed Work</h1>
      <p className="text-lg leading-[1.5] tracking-[0.02em] text-[#0b6b53] sm:text-xl">See how Aurtx connects your clients, conversations, team, tasks, and AI in one simple workflow. From managing client relationships to automating repetitive tasks, Aurtx brings everything together so your team can focus on what matters most — delivering great results.</p>
      <div className="flex w-full flex-wrap gap-2.5 sm:[&>*]:w-auto">
        <PresentationButton tone="green">Get Started</PresentationButton>
        <PresentationButton tone="green" href="/features">Explore Aurtx</PresentationButton>
      </div>
      <p className="text-sm leading-relaxed text-black/65 sm:text-base">Client <span className="text-[#0b6b53]">→</span> Aurtx <span className="text-[#0b6b53]">→</span> Team + AI <span className="text-[#0b6b53]">→</span> Completed Work.</p>
    </div>
    <img src={workspace} width="794" height="551" fetchPriority="high" alt="Aurtx workspace connecting client conversations, customers, team, tasks and AI assistance" className="aspect-794/551 w-full rounded-[18px] object-cover" />
  </section>
}
