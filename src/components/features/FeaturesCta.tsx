import { PresentationButton } from '../ui/PresentationButton'

export function FeaturesCta() {
  return <section aria-labelledby="features-cta-title" className="relative isolate mx-auto flex max-w-[1300px] items-center justify-center overflow-hidden px-5 py-12 sm:px-6 sm:py-16">
    <div aria-hidden="true" className="absolute top-[8%] left-[8.7%] -z-10 size-[clamp(160px,20vw,260px)] rounded-full bg-[#bce9df]" />
    <div aria-hidden="true" className="absolute right-[9.4%] bottom-[6.6%] -z-10 size-[clamp(160px,20vw,260px)] rounded-full bg-[#bce9df]" />
    <div className="flex w-full max-w-[1100px] flex-col items-center justify-center rounded-[70px_24px] bg-(image:--button-gradient) px-6 py-12 text-center text-white sm:rounded-[120px_32px] sm:px-16 sm:py-16 min-[1100px]:rounded-[160px_40px]">
      <p className="text-base font-semibold sm:text-lg">READY TO WORK SMARTER?</p>
      <h2 id="features-cta-title" className="mt-4 text-[clamp(26px,2.6vw,36px)] leading-tight font-extrabold">Bring Your Business Together With Aurtx.</h2>
      <p className="mt-4 max-w-[710px] text-base leading-relaxed font-medium sm:text-lg">Manage client conversations, teams, tasks, and AI assistance from one connected workspace.</p>
      <div className="mt-7 flex flex-wrap justify-center gap-4">
        <PresentationButton tone="green" outline>Get Started</PresentationButton>
        <PresentationButton tone="green" outline href="/#how-it-works">See How It Works</PresentationButton>
      </div>
      <p className="mt-6 text-sm leading-relaxed sm:text-base">One workspace. One team. A smarter way to work.</p>
    </div>
  </section>
}
