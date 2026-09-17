import conversations from '../../assets/features/client-conversations.png'
import team from '../../assets/features/team-management.png'
import check from '../../assets/features/benefit-check.svg'
import { PresentationButton } from '../ui/PresentationButton'

const details = [
  {
    id: 'conversations', title: 'Every Client Conversation, Organized.', image: conversations,
    alt: 'Shared WhatsApp conversation workspace with client context, team assignment and follow-up reminders',
    description: 'Keep your WhatsApp conversations organized in one shared workspace. Aurtx Digital gives your team the visibility and context they need to manage client messages and keep important conversations moving.',
    benefitsLabel: true, action: 'Learn More',
    benefits: [
      ['Organized Conversations', 'Keep client messages structured and easy for your team to manage.'],
      ['Team Visibility', 'Make sure the right people can see and handle important conversations.'],
      ['Client Context', 'Keep relevant client information connected to the conversation.'],
      ['Better Follow-Ups', 'Make it easier to stay on top of requests and continue conversations.'],
    ],
  },
  {
    id: 'team-management', title: 'Keep Your Team Organized and Moving Together', image: team,
    alt: 'Aurtx team workspace showing assigned client work, team members and completed tasks',
    description: 'Give your team a clear way to work together. Manage team leads and agents, assign responsibilities, and make sure everyone knows what they need to handle.',
    benefitsLabel: false, action: 'Explore More',
    benefits: [
      ['Manage Your Team', 'Organize your team members and keep responsibilities clear.'],
      ['Assign the Right People', 'Connect client work and tasks with the team member responsible for handling them.'],
      ['Team Lead Control', 'Give team leads visibility to coordinate agents and manage their assigned work.'],
      ['Clear Responsibilities', 'Make it easier for everyone to understand what they own and what needs to happen next.'],
    ],
  },
] as const

export function FeatureDetails() {
  return <>{details.map((detail, index) => <section key={detail.id} id={detail.id} aria-labelledby={`${detail.id}-title`} className={`mx-auto grid max-w-[1300px] items-center gap-8 px-5 py-10 sm:px-6 sm:py-16 min-[1100px]:gap-12 ${index === 0 ? 'min-[1100px]:grid-cols-[664fr_726fr]' : 'min-[1100px]:grid-cols-[726fr_664fr]'}`}>
    <img src={detail.image} width="664" height="832" alt={detail.alt} loading="lazy" className={`w-full rounded-xl object-cover max-[1099px]:mx-auto max-[1099px]:max-w-[520px] ${index === 1 ? 'min-[1100px]:order-2' : ''}`} />
    <div className="min-w-0">
      <h2 id={`${detail.id}-title`} className="text-[clamp(26px,2.6vw,36px)] leading-tight font-extrabold">{detail.title}</h2>
      <p className="mt-4 text-base leading-relaxed text-black/64 sm:text-lg">{detail.description}</p>
      {detail.benefitsLabel && <p className="mt-6 text-2xl leading-[1.2] font-bold text-[#0b6b53]">Benefits</p>}
      <ul className={`grid gap-5 ${detail.benefitsLabel ? 'mt-4' : 'mt-8'}`}>
        {detail.benefits.map(([title, description]) => <li key={title} className="flex items-start gap-4">
          <img src={check} width="60" height="60" alt="" loading="lazy" className="size-11 shrink-0" />
          <div className="max-w-[493px]">
            <h3 className="text-lg leading-snug font-medium text-[#0b6b53]">{title}</h3>
            <p className="mt-1 text-base leading-relaxed text-black/64">{description}</p>
          </div>
        </li>)}
      </ul>
      <div className="pt-7"><PresentationButton tone="green">{detail.action}</PresentationButton></div>
    </div>
  </section>)}</>
}
