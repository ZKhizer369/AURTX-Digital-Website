import background from '../../assets/features/disconnected-background.png'
import { SectionHeading } from '../ui/SectionHeading'

const problems = [
  ['Missed Client Messages', 'Important client conversations can get buried across different chats and channels.'],
  ['Scattered Team Work', 'When everyone works separately, it becomes harder to know what is happening.'],
  ['Forgotten Follow-Ups', 'Important client requests and tasks can easily be overlooked, leading to missed deadlines, lost revenue, and damaged relationships.'],
  ['Repetitive Questions', 'Your team may spend valuable time answering the same client questions again and again.'],
  ['Unclear Responsibilities', 'Without clear task ownership, work can get delayed or passed between team members.'],
  ['Disconnected Tools', 'Switching between different tools makes everyday business work harder to manage.'],
] as const

export function ProblemsSection() {
  return <section id="problems" aria-labelledby="problems-title" className="mx-auto max-w-325 px-5 py-10 sm:px-6 sm:py-12">
    <SectionHeading eyebrow={<span className="inline-block rounded-[9px] bg-[#3fb59a3b] p-2.5 text-sm leading-none font-extrabold text-[#2b7a62] sm:text-sm">BUILT AROUND YOUR WORK</span>}>
      <h2 id="problems-title">Less Managing. More Getting Things Done.</h2>
      <p>Running a business means managing conversations, people, tasks, and follow-ups every day. Aurtx brings these everyday activities together so your team can work from one organized place.</p>
    </SectionHeading>
    <ol className="mt-10 grid gap-6 min-[640px]:grid-cols-2 min-[990px]:grid-cols-3">
      {problems.map(([title, description], index) => <li key={title} className="group relative isolate flex flex-col cursor-default gap-4 overflow-hidden rounded-[20px] border border-[#dde9e5] bg-[#f2f2f2] p-6 text-black transition-colors duration-200 hover:bg-black hover:text-white sm:p-7">
        <img src={background} width="387" height="277" alt="" className="absolute inset-0 -z-10 size-full object-cover opacity-0 transition-opacity duration-200 group-hover:opacity-100" loading="lazy" />
        <span aria-hidden="true" className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[#063d39] text-lg text-white transition-colors duration-200 group-hover:bg-white group-hover:text-black">{index + 1}</span>
        <div>
          <h3 className="text-[21px] leading-snug font-semibold">{title}</h3>
          <p className="mt-2 text-[15px] leading-relaxed text-[#555] transition-colors duration-200 group-hover:text-[#fffafa]">{description}</p>
        </div>
      </li>)}
    </ol>
  </section>
}
