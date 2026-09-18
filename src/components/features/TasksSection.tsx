import { SectionHeading } from '../ui/SectionHeading'
import tasks from '../../assets/features/tasks-follow-ups.png'

export function TasksSection() {
  return <section id="tasks" aria-labelledby="tasks-title" className="mx-auto max-w-[1300px] px-5 py-10 text-center sm:px-6 sm:py-16">
    <SectionHeading eyebrow={<span className="inline-block rounded-full border border-[#0fc49c40] bg-[#ddf7ef] px-4 py-2 text-[13px] font-bold tracking-[1.5px] text-[#063d39]">TASKS &amp; FOLLOW-UPS</span>}>
      <h2 id="tasks-title">Turn Client Requests Into Action</h2>
      <p className="text-[#063d39]!">Keep important work moving with clear tasks, assignments, and follow-ups. Aurtx Digital bridges client chats with team workflows instantly.</p>
      <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 pt-6 text-[15px] font-semibold text-[#063d399c]">
        {['Assign Work', 'Track Progress', 'Follow Up', 'Stay Organized'].map((label, index) => <li key={label} className="flex items-center gap-4">{index > 0 && <span aria-hidden="true" className="size-[5px] rounded-full bg-[#0b6b53]" />}{label}</li>)}
      </ul>
    </SectionHeading>
    <div className="relative mx-auto mt-10 aspect-[1237/503] max-w-[1237px] overflow-hidden sm:mt-12">
      <img src={tasks} width="1672" height="941" alt="Task dashboard with client work assignments, progress and follow-up notifications" loading="lazy" className="absolute top-[-34.41%] left-0 h-[138.41%] w-full max-w-none" />
    </div>
  </section>
}
