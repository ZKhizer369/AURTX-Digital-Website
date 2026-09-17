import type { CSSProperties } from 'react'
import { picture } from './assets'
import { SectionHeading } from '../ui/SectionHeading'
const reasons = [
  ['All Your Work in One Place', 'Manage client conversations, customers, tasks, and team activity without switching between different tools.'],
  ['Never Miss a Client Message', "Keep your WhatsApp conversations organized so important customer messages don't get overlooked."],
  ['Clear Team Responsibilities', 'Assign clients, conversations, and tasks to team leads and agents so everyone knows what they need to handle.'],
  ['Stay on Top of Every Task', "Create, assign, and track tasks and follow-ups so important work doesn't get forgotten."],
  ['AI That Understand Your Business', 'Give Aurtx information about your business so AI can help respond to customer questions using your own knowledge.'],
  ['Your Team Stays in Control', "When AI doesn't know how to handle a customer question, Aurtx can bring it to your team's attention instead of guessing."],
]
export function WhyAurtxSection() {
  return <section style={{ '--ribbed-background': 'url(' + picture('ribbed-background.png') + ')' } as CSSProperties} className="why-section px-5 pt-12 pb-16 [@media(max-width:639px)]:px-5 [@media(max-width:639px)]:pt-8 [@media(max-width:639px)]:pb-12 [&_.section-heading]:max-w-350 [&_h2]:font-bold!" id="why-aurtx" aria-labelledby="why-title">
    <SectionHeading>
      <span className="eyebrow mb-4 block text-lg font-semibold tracking-[1.04px] text-[#063d39]">WHY CHOOSE AURTX</span>
      <h2 id="why-title">Everything Your Team Needs to Work Smarter</h2>
    </SectionHeading>
    <div className="reason-grid mx-auto mt-9 grid max-w-305 gap-8 grid-cols-3 [@media(max-width:1099px)]:grid-cols-2 [@media(max-width:639px)]:mt-7 [@media(max-width:639px)]:grid-cols-1">{reasons.map(([title, description], index) => <article key={title} tabIndex={0} className="reason-card hover-card rounded-[20px] border border-[#dde9e5] bg-[#f2f2f2] p-6 [&>h3]:text-lg [&>h3]:leading-[1.4] [&>h3]:font-semibold [&>p]:mt-1.25 [&>p]:text-[15px] [&>p]:leading-[1.7] [&>p]:text-[#555] relative isolate min-h-61.25 transition-[color,background-color] duration-300 ease-[ease] hover:text-white focus-visible:text-white before:absolute before:inset-0 before:-z-10 before:rounded-[inherit] before:bg-[#080e0d] before:bg-(image:--ribbed-background) before:bg-cover before:bg-center before:opacity-0 before:transition-opacity before:duration-300 before:ease-[ease] before:content-[''] hover:before:opacity-100 focus-visible:before:opacity-100 [&>p]:transition-[color,background-color] [&>p]:duration-300 [&>p]:ease-[ease] hover:[&>p]:text-[#fffafa] focus-visible:[&>p]:text-[#fffafa] [&>.number-badge]:transition-[color,background-color] [&>.number-badge]:duration-300 [&>.number-badge]:ease-[ease] hover:[&>.number-badge]:bg-white hover:[&>.number-badge]:text-[#111] focus-visible:[&>.number-badge]:bg-white focus-visible:[&>.number-badge]:text-[#111]">
      <span className="number-badge mb-4 flex h-11.5 w-11.5 items-center justify-center rounded-xl bg-[#063d39] text-lg text-white">{index + 1}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>)}</div>
  </section>
}
