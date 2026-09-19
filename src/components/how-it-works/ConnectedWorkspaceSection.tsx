import { SectionHeading } from '../ui/SectionHeading'
import sparkles from '../../assets/how-it-works/hub-sparkles.svg'
import conversations from '../../assets/how-it-works/message-square.svg'
import tasks from '../../assets/how-it-works/check-square.svg'
import team from '../../assets/how-it-works/hub-users.svg'
import clients from '../../assets/how-it-works/user-check.svg'
import connectorAi from '../../assets/how-it-works/connector-ai.png'
import connectorConversations from '../../assets/how-it-works/connector-conversations.png'
import connectorTasks from '../../assets/how-it-works/connector-tasks.png'
import connectorTeam from '../../assets/how-it-works/connector-team.png'
import connectorClients from '../../assets/how-it-works/connector-clients.png'
import glowAi from '../../assets/how-it-works/connector-ai-glow.svg'
import glowConversations from '../../assets/how-it-works/connector-conversations-glow.svg'
import glowTasks from '../../assets/how-it-works/connector-tasks-glow.svg'
import glowTeam from '../../assets/how-it-works/connector-team-glow.svg'
import glowClients from '../../assets/how-it-works/connector-clients-glow.svg'

const modules = [
  { icon: sparkles, title: 'Aurtx AI', copy: 'Assist your team with business-aware client responses.', position: 'min-[900px]:left-[39.167%] min-[900px]:top-[1.667%]' },
  { icon: clients, title: 'Clients', copy: 'Keep customer information connected to the work.', position: 'min-[900px]:left-[8.333%] min-[900px]:top-[18.333%]' },
  { icon: conversations, title: 'Conversations', copy: 'Manage important client messages in one place.', position: 'min-[900px]:left-[70%] min-[900px]:top-[18.333%]' },
  { icon: team, title: 'Team', copy: 'Know who is responsible for each piece of work.', position: 'min-[900px]:left-[18.333%] min-[900px]:top-[68.333%]' },
  { icon: tasks, title: 'Tasks', copy: 'Turn conversations into clear actions and follow-ups.', position: 'min-[900px]:left-[60%] min-[900px]:top-[68.333%]' },
]

export function ConnectedWorkspaceSection() {
  return <section aria-labelledby="workspace-title" className="mx-auto max-w-312 px-5 py-12 sm:px-6 sm:py-20">
    <SectionHeading eyebrow={<span className="inline-block rounded-lg bg-[#3fb59a3b] px-3 py-2 text-sm font-extrabold text-[#063d39]">ONE CONNECTED WORKSPACE</span>}>
      <h2 id="workspace-title">Everything Your Business Needs, Working Together</h2>
      <p>Aurtx connects your client conversations, customer information, team, tasks, and AI assistance so your business can work from one organized system instead of switching between disconnected tools.</p>
    </SectionHeading>
    <div className="relative mt-12 min-[900px]:mt-20 min-[900px]:aspect-2/1 min-[900px]:min-h-130">
      <svg aria-hidden="true" focusable="false" viewBox="0 0 1200 600" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 hidden size-full min-[900px]:block">
        <image href={glowAi} width="105" height="4" transform="translate(600 85) rotate(90)" />
        <image href={connectorAi} width="149" height="1" transform="translate(600 85) rotate(90)" />
        <image href={glowConversations} width="343" height="194" transform="translate(631 116) rotate(18.5)" />
        <image href={connectorConversations} width="342" height="194" transform="translate(631 116) rotate(18.5)" />
        <image href={glowTasks} width="317" height="4" transform="translate(600 300) rotate(36.7)" />
        <image href={connectorTasks} width="317" height="1" transform="translate(600 300) rotate(36.7)" />
        <image href={glowTeam} width="317" height="4" transform="translate(600 300) rotate(143.3)" />
        <image href={connectorTeam} width="395.545" height="1" transform="translate(600 300) rotate(-170.39)" />
        <image href={glowClients} width="385.689" height="4" transform="translate(600 300) rotate(-170.15)" />
        <image href={connectorClients} width="395.466" height="1" transform="translate(600 300) rotate(142.09)" />
      </svg>
      <div className="relative mx-auto flex size-36 flex-col items-center justify-center gap-2 rounded-full bg-[#f2f2f2] shadow-[inset_0_0_9px_#0004] min-[900px]:absolute min-[900px]:top-[49.5%] min-[900px]:left-1/2 min-[900px]:size-[12.5%] min-[900px]:aspect-square min-[900px]:h-auto min-[900px]:-translate-1/2">
        <p className="text-[22px] font-extrabold">AURTX</p><p className="text-[10px] font-semibold text-[#0b6b53]">CORE HUB</p>
      </div>
      <ul aria-label="Modules connected to the Aurtx core hub" className="relative grid gap-6 border-l border-[#0b6b53]/30 pt-8 pl-6 sm:grid-cols-2 min-[900px]:static min-[900px]:block min-[900px]:border-0 min-[900px]:p-0">
        {modules.map(module => <li key={module.title} className={`relative rounded-2xl border border-white/10 bg-[#f2f2f2] p-5 shadow-[0_8px_24px_#0002] before:absolute before:top-1/2 before:-left-6 before:w-6 before:border-t before:border-[#0b6b53]/30 min-[900px]:absolute min-[900px]:w-[21.667%] min-[900px]:p-4 min-[900px]:before:hidden min-[1100px]:p-5 ${module.position}`}>
          <div className="flex items-center gap-3"><span className="grid size-9 shrink-0 place-items-center rounded-lg bg-[#063d39]"><img src={module.icon} width="18" height="18" alt="" /></span><h3 className="text-lg font-semibold min-[900px]:text-base min-[1100px]:text-lg">{module.title}</h3></div>
          <p className="mt-3 text-base leading-snug text-black/75 min-[900px]:text-sm min-[1100px]:text-base">{module.copy}</p>
        </li>)}
      </ul>
    </div>
  </section>
}
