import { SectionHeading } from '../ui/SectionHeading'
import sparkles from '../../assets/how-it-works/step-sparkles.svg'
import eye from '../../assets/how-it-works/eye.svg'
import heart from '../../assets/how-it-works/heart.svg'
import arrow from '../../assets/how-it-works/arrow-right.svg'
import zap from '../../assets/how-it-works/zap-off.svg'
import briefcase from '../../assets/how-it-works/briefcase.svg'
import user from '../../assets/how-it-works/user.svg'
import shield from '../../assets/how-it-works/shield.svg'

const support = [
  { icon: zap, title: 'AI-Powered Assistance', copy: 'Get suggested replies instantly generated based on your loaded business documentation.' },
  { icon: briefcase, title: 'Business-Aware Responses', copy: 'Aurtx AI pulls context directly from your specific pricing models and service logs for high accuracy.' },
  { icon: user, title: 'Human Handoff', copy: 'When questions need sensitive logic, your human team is alerted to instantly claim the thread.' },
  { icon: shield, title: 'Team Always in Control', copy: 'AI serves to eliminate routine work, but your specialists remain the final review layer.' },
]
const steps = [
  { icon: sparkles, title: '1. AI Suggests Reply' },
  { icon: eye, title: '2. Team Reviews & Approves' },
  { icon: heart, title: '3. Client Gets Help' },
]

export function TeamAiSection() {
  return <section aria-labelledby="team-ai-title" className="mx-auto max-w-312 px-5 py-12 sm:px-6 sm:py-20">
    <SectionHeading eyebrow={<span className="inline-block rounded-lg bg-[#3fb59a3b] px-3 py-2 text-sm font-extrabold text-[#0b6b53]">AI + YOUR TEAM</span>}>
      <h2 id="team-ai-title">AI Assists. Your Team Stays in Control.</h2>
      <p>Aurtx AI helps your team respond to client questions using the information you provide about your business. When a question needs human attention, your team can step in and take over.</p>
    </SectionHeading>
    <ol className="my-10 flex flex-col items-center justify-center gap-4 min-[800px]:flex-row min-[800px]:gap-6">
      {steps.map((step, index) => <li key={step.title} className="flex flex-col items-center gap-4 min-[800px]:flex-row min-[800px]:gap-6">
        {index > 0 && <img src={arrow} width="16" height="16" alt="" className="rotate-90 min-[800px]:rotate-0" />}
        <span className={`flex items-center gap-2 rounded-full border px-4 py-2 text-[13px] font-semibold ${index === 2 ? 'border-[#063d39] bg-[#063d39] text-white' : 'border-[#e2eae8] bg-[#f2f2f2] text-[#063d39]'}`}><img src={step.icon} width="14" height="14" alt="" />{step.title}</span>
      </li>)}
    </ol>
    <div className="grid gap-6 sm:grid-cols-2 min-[1100px]:grid-cols-4">
      {support.map(item => <article key={item.title} className="rounded-2xl border border-[#e2eae8] bg-[#f2f2f2] p-6">
        <span className="mb-3 grid size-9 place-items-center rounded-lg bg-[#063d39]"><img src={item.icon} width="18" height="18" alt="" /></span>
        <h3 className="text-lg leading-tight font-bold">{item.title}</h3>
        <p className="mt-2 text-[13px] leading-relaxed text-[#4b615d]">{item.copy}</p>
      </article>)}
    </div>
  </section>
}
