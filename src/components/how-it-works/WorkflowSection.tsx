import messageCircle from '../../assets/how-it-works/message-circle.svg'
import cpu from '../../assets/how-it-works/cpu.svg'
import users from '../../assets/how-it-works/users.svg'
import sparkles from '../../assets/how-it-works/sparkles.svg'
import checkCircle from '../../assets/how-it-works/check-circle.svg'
import arrow from '../../assets/how-it-works/workflow-arrow.svg'
import split from '../../assets/how-it-works/workflow-split.svg'
import merge from '../../assets/how-it-works/workflow-merge.svg'
import { SectionHeading } from '../ui/SectionHeading'

function WorkflowCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return <div className="flex min-h-42 w-full min-w-0 flex-col justify-center rounded-2xl border border-[#0b6b53] bg-[#f2f2f2] p-4 sm:p-5">
    <span className="mb-3 grid size-9 place-items-center rounded-[10px] bg-[#063d39]"><img src={icon} width="20" height="20" alt="" /></span>
    <h3 className="text-base leading-tight font-semibold sm:text-lg">{title}</h3>
    <p className="mt-1 text-sm leading-snug text-[#0b6b53]/75">{description}</p>
  </div>
}

export function WorkflowSection() {
  return <section id="workflow" aria-labelledby="workflow-title" className="mx-auto max-w-337 px-5 py-12 sm:px-6 sm:py-20">
    <SectionHeading eyebrow={<span className="inline-block rounded-lg bg-[#3fb59a3b] px-3 py-2 text-sm font-extrabold text-[#2b7a62]">AURTX WORKFLOW</span>}>
      <h2 id="workflow-title">From Client Message to Completed Work</h2>
      <p>Aurtx connects every step of your client workflow—from the first message to the final follow-up—so your team always knows what happens next.</p>
    </SectionHeading>
    <div className="mx-auto mt-12 flex max-w-150 flex-col items-center min-[1100px]:grid min-[1100px]:max-w-none min-[1100px]:grid-cols-[1fr_4.7%_1fr_9.8%_1fr_9.8%_1fr]">
      <div className="w-full max-w-75 min-[1100px]:max-w-none"><WorkflowCard icon={messageCircle} title="Client Request" description="Message sent instantly via WhatsApp" /></div>
      <div aria-hidden="true" className="relative h-14 w-10 min-[1100px]:h-4 min-[1100px]:w-full"><img src={arrow} width="63" height="15" alt="" className="absolute top-1/2 left-1/2 h-3 w-14 -translate-1/2 rotate-90 min-[1100px]:w-full min-[1100px]:rotate-0" /></div>
      <div className="w-full max-w-75 min-[1100px]:max-w-none"><WorkflowCard icon={cpu} title="Conversation Organized" description="Aurtx structures, parses, and logs context" /></div>
      <div aria-hidden="true" className="relative h-20 w-full min-[1100px]:h-48"><img src={split} width="138" height="193" alt="" className="absolute top-1/2 left-1/2 h-[min(48vw,280px)] w-20 -translate-1/2 rotate-90 min-[1100px]:h-48 min-[1100px]:w-full min-[1100px]:rotate-0" /></div>
      <div role="group" aria-label="Team and AI work in parallel" className="grid w-full grid-cols-2 gap-3 min-[1100px]:grid-cols-1 min-[1100px]:gap-4">
        <WorkflowCard icon={users} title="Team Assigned" description="Best suited expert handles critical items" />
        <WorkflowCard icon={sparkles} title="AI Assists" description="Automated resolution for routine inquiries" />
      </div>
      <div aria-hidden="true" className="relative h-20 w-full min-[1100px]:h-46"><img src={merge} width="139" height="180" alt="" className="absolute top-1/2 left-1/2 h-[min(48vw,280px)] w-20 -translate-1/2 -rotate-90 min-[1100px]:h-46 min-[1100px]:w-full min-[1100px]:rotate-0 min-[1100px]:-scale-x-100" /></div>
      <div className="w-full max-w-75 min-[1100px]:max-w-none"><WorkflowCard icon={checkCircle} title="Task Completed" description="Work delivered with structured follow-ups" /></div>
    </div>
  </section>
}
