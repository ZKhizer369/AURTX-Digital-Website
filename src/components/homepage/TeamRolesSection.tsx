import { icon } from './assets'
import { SectionHeading } from './SectionHeading'
const roles = [
  ['Business Owners', 'See your clients, team, and business activity from one place.'],
  ['Team Leads', 'Assign work, manage agents, and keep conversations moving.'],
  ['Agents', 'Handle assigned clients, conversations, and tasks with clarity.'],
  ['Customer Support', 'Stay on top of questions, messages, and follow-ups.'],
  ['Business Managers', "See what's happening across your conversations and team."],
]
export function TeamRolesSection() {
  return <section className="roles-section px-6 pt-12 pb-16 [@media(max-width:639px)]:px-5 [@media(max-width:639px)]:pt-8 [@media(max-width:639px)]:pb-12 [&_h2]:font-bold!" aria-labelledby="roles-title">
    <SectionHeading>
      <span className="eyebrow mb-4 block text-lg font-semibold tracking-[1.04px] text-[#063d39]">BUILT FOR YOUR TEAM</span>
      <h2 id="roles-title">Built for Everyone on Your Team</h2>
    </SectionHeading>
    <div className="roles-grid mx-auto mt-9 grid max-w-305 grid-cols-6 items-center gap-6 [@media(max-width:1099px)]:grid-cols-2 [@media(max-width:1099px)]:[&>.role-card]:col-span-1 [@media(max-width:1099px)]:[&>.role-card:last-child]:col-span-2 [@media(max-width:1099px)]:[&>.role-card:last-child]:justify-self-center [@media(max-width:1099px)]:[&>.role-card:last-child]:w-[calc((100%-1.5rem)/2)] [@media(max-width:639px)]:mt-7 [@media(max-width:639px)]:grid-cols-1 [@media(max-width:639px)]:[&>.role-card:last-child]:col-span-1 [@media(max-width:639px)]:[&>.role-card:last-child]:w-full">
      {roles.map(([title, description], index) => (
        <article
          className={`role-card col-span-2 min-h-48.75 rounded-[20px] border border-[#dde9e5] bg-[#f2f2f2] p-6 transition-all duration-300 ease hover:border-[#0FBA94] ${
            index === 3
              ? '[@media(min-width:1100px)]:col-start-2'
              : index === 4
                ? '[@media(min-width:1100px)]:col-start-4'
                : ''
          } [&>h3]:text-lg [&>h3]:leading-[1.4] [&>h3]:font-semibold [&>p]:mt-1.25 [&>p]:text-[15px] [&>p]:leading-[1.7] [&>p]:text-[#555]`}
          key={title}
        >
          <span className="role-icon mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#063d39] text-lg text-white [&>img]:h-auto [&>img]:w-auto [&>img]:max-h-8.25 [&>img]:max-w-9.25">
            <img src={icon(`built-icon${index + 1}`)} width="37" height="33" alt=""/>
          </span>
          <h3>{title}</h3>
          <p>{description}</p>
        </article>))}
    </div>
  </section>
}
