import { PresentationButton } from '../ui/PresentationButton'

export function FeaturesCta({ titleId = 'features-cta-title', workflowHref = '/#how-it-works', transparentButtons = false }: { titleId?: string; workflowHref?: string; transparentButtons?: boolean }) {
  return <section aria-labelledby={titleId} className="relative isolate mx-auto flex max-w-325 items-center justify-center overflow-hidden px-5 py-12 sm:px-6 sm:py-16">
    <div aria-hidden="true" className="absolute top-[2%] left-[2%] -z-10 size-[clamp(160px,20vw,260px)] rounded-full bg-[#bce9df]" />
    <div aria-hidden="true" className="absolute right-[3%] bottom-[2%] -z-10 size-[clamp(160px,20vw,260px)] rounded-full bg-[#bce9df]" />
    <div className="flex w-full max-w-275 flex-col items-center justify-center rounded-[70px_24px] bg-(image:--button-gradient) px-6 py-12 text-center text-white sm:rounded-[120px_32px] sm:px-16 sm:py-16 min-[1100px]:rounded-[160px_40px]">
      <p className="text-base font-semibold sm:text-lg">READY TO WORK SMARTER?</p>
      <h2 id={titleId} className="mt-4 text-[clamp(26px,2.6vw,36px)] leading-tight font-extrabold">Bring Your Business Together With Aurtx.</h2>
      <p className="mt-4 max-w-177.5 text-base leading-relaxed font-medium sm:text-lg">Manage client conversations, teams, tasks, and AI assistance from one connected workspace.</p>
      <div className={`mt-7 flex flex-wrap justify-center gap-4 ${transparentButtons ? 'sm:[&>*]:w-auto' : ''}`}>
        <PresentationButton tone="green" outline transparent={transparentButtons}>Get Started</PresentationButton>
        <PresentationButton tone="green" outline transparent={transparentButtons} href={workflowHref}>See How It Works</PresentationButton>
      </div>
      <p className="mt-6 text-sm leading-relaxed sm:text-base">One workspace. One team. A smarter way to work.</p>
    </div>
  </section>
}
