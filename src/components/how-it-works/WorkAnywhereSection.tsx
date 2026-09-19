import { SectionHeading } from '../ui/SectionHeading'
import arrow from '../../assets/how-it-works/arrow-right-white.svg'

const columns = [
  { title: 'Conversations', copy: 'Stay on top of important client messages wherever you are. Instant sync keeps your conversations updated in real-time.' },
  { title: 'Tasks & Progress', copy: 'Check assignments, follow-ups, and project progress without being tied to your desk. Mark tasks complete with one tap.' },
  { title: 'Team Alignment', copy: 'Keep your team aligned and your work moving from anywhere. See who is active and coordinate seamlessly across locations.' },
]

export function WorkAnywhereSection() {
  return <section aria-labelledby="work-anywhere-title" className="mx-auto max-w-312 px-5 py-12 sm:px-6 sm:py-20">
    <SectionHeading eyebrow={<span className="inline-block rounded-lg bg-[#3fb59a3b] px-3 py-2 text-sm font-extrabold text-[#063d39]">WORK FROM ANYWHERE</span>}>
      <h2 id="work-anywhere-title">Your Business Doesn't Stop<br className="hidden sm:block" /> When You Leave the Office.</h2>
      <p>Stay connected to clients, your team, tasks, and conversations from wherever you work. Aurtx keeps your entire workflow accessible in one connected workspace.</p>
    </SectionHeading>
    <div className="mt-12 grid gap-7 md:grid-cols-3 md:gap-10">
      {columns.map((column, index) => <article key={column.title} className="border-[#0b6b53]/20 not-first:border-t not-first:pt-7 md:not-first:border-t-0 md:not-first:border-l md:not-first:pt-0 md:not-first:pl-10">
        <p className="mb-4 text-4xl font-extrabold">0{index + 1}</p>
        <h3 className="text-xl font-bold">{column.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[#4a5856]">{column.copy}</p>
      </article>)}
    </div>
    <div className="mt-10 text-center"><button type="button" aria-disabled="true" className="inline-flex items-center gap-2 rounded-full bg-(image:--button-gradient) px-8 py-3.5 text-[15px] font-bold text-white">Get Started<img src={arrow} width="14" height="14" alt="" /></button></div>
  </section>
}
