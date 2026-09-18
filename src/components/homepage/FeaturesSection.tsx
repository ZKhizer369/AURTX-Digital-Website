import { icon } from './assets'
import { SectionHeading } from '../ui/SectionHeading'
const features = [
  ['Never Miss a Message', 'Keep every client conversation organized and easy to manage in one shared workspace.'],
  ['Work Better Together', 'Assign clients, conversations, and tasks to your team leads and agents.'],
  ['Let AI Help You Reply', 'Give AI your business information so it can help answer client questions and alert your team when needed.'],
]
export function FeaturesSection() {
  return <section className="feature-section px-6 pt-12 pb-16 [@media(max-width:639px)]:px-5 [@media(max-width:639px)]:pt-8 [@media(max-width:639px)]:pb-12" id="features" aria-labelledby="feature-title">
    <SectionHeading>
      <span className="eyebrow pill mb-5.5 inline-block rounded-[9px] bg-[#3fb59a3b] p-2.5 text-sm leading-none font-extrabold tracking-normal text-[#2b7a62]">WHY AURTX DIGITAL</span>
      <h2 id="feature-title">Everything Your Team Needs, In One Place</h2>
      <p>From the first client message to the final follow-up, Aurtx helps your team stay organized, responsive, and connected.</p>
    </SectionHeading>
    <div className="feature-grid mx-auto mt-9 grid max-w-305 gap-6 grid-cols-[repeat(auto-fit,minmax(min(100%,290px),1fr))] [@media(max-width:639px)]:mt-7 [@media(max-width:639px)]:grid-cols-1">{features.map(([title, description], index) => <article className="feature-card relative isolate min-h-66.25 overflow-hidden rounded-[20px] border border-[#dde9e5] bg-white p-7 shadow-[0_8px_24px_-12px_#102b281f] transition-all duration-250 ease-[ease] hover:-translate-y-0.75 hover:shadow-[0_10px_28px_#0d98622b] [&>h3]:mt-[22px] [&>h3]:text-[21px] [&>h3]:leading-[1.3] [&>h3]:font-semibold [&>h3]:tracking-[-.25px] [&>h3]:text-[#102b28] [&>p]:mt-3 [&>p]:text-[15px] [&>p]:leading-[24.375px] [&>p]:text-[#667773] [@media(max-width:639px)]:min-h-0 [@media(max-width:639px)]:p-[26px]" key={title}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 select-none opacity-45">
        <img src={icon('team-card-bg')} width="81" height="102" alt="" className="absolute top-[10%] right-[3.3%] h-auto w-[21%]" />
        <img src={icon('team-card-bg')} width="81" height="102" alt="" className="absolute right-[19%] bottom-[16%] h-auto w-[21%]" />
        <img src={icon('team-card-bg')} width="81" height="102" alt="" className="absolute right-[-6%] bottom-[18%] h-auto w-[16%]" />
      </div>
      <div className="feature-icon relative z-10 flex h-17.5 items-center [&>img]:h-13.5 [&>img]:w-auto">
        <img src={icon(`team-icon${index + 1}`)} width="56" height="54" alt="" />
      </div>
      <h3 className="relative z-10">{title}</h3>
      <p className="relative z-10">{description}</p>
    </article>)}</div>
  </section>
}
