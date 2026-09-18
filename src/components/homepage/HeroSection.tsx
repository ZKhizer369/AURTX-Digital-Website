import type { CSSProperties } from 'react'
import { picture } from './assets'
import { Header } from '../layout/Header'
import { PresentationButton } from '../ui/PresentationButton'
export function HeroSection() {
  return <div className="hero-wrap relative pb-13.5">
    <section style={{ '--ribbed-background': 'url(' + picture('ribbed-background.png') + ')' } as CSSProperties} className="hero rounded-2xl relative pt-5 px-5 bg-[#080e0d] bg-(image:--ribbed-background) bg-cover bg-center bg-no-repeat text-white [@media(max-width:639px)]:pb-8.75" aria-labelledby="hero-title">
      <Header />
      <div className="hero-content relative mx-auto grid max-w-325 grid-cols-[minmax(0,1fr)_minmax(0,1.45fr)_minmax(0,.85fr)] items-center gap-0 px-6 pt-18 pb-6 [&>h1]:relative [&>h1]:z-1 [&>h1]:col-span-full [&>h1]:mx-auto [&>h1]:mb-3 [&>h1]:max-w-300 [&>h1]:text-center [&>h1]:text-[clamp(30px,3.4vw,48px)] [&>h1]:leading-[1.18] [&>h1]:font-extrabold [&>h1_span]:text-[#0b7462] [@media(max-width:1099px)]:grid-cols-[1fr_1.25fr] [@media(max-width:1099px)]:gap-7 [@media(max-width:1099px)]:pt-10 [@media(max-width:1099px)]:pb-21.5 [@media(max-width:1099px)]:[&>h1]:mb-0 [@media(max-width:767px)]:max-w-150 [@media(max-width:767px)]:grid-cols-1 [@media(max-width:767px)]:pt-8 [@media(max-width:767px)]:pb-20 [@media(max-width:767px)]:text-center [@media(max-width:639px)]:gap-6 [@media(max-width:639px)]:px-5 [@media(max-width:639px)]:[&>h1]:text-[clamp(28px,6.5vw,36px)]">
        <h1 id="hero-title">Work With Your Clients.<br />Work <span>Smarter</span>. From <span>One Place</span>.</h1>
        <img className="hero-person col-start-2 row-start-2 m-0 h-auto max-h-150 w-full object-contain [@media(max-width:1099px)]:row-start-2 [@media(max-width:1099px)]:row-end-4 [@media(max-width:1099px)]:max-h-120 [@media(max-width:767px)]:col-start-1 [@media(max-width:767px)]:row-start-3 [@media(max-width:767px)]:row-end-auto [@media(max-width:767px)]:mx-auto [@media(max-width:767px)]:max-h-none [@media(max-width:767px)]:w-[min(100%,440px)] [@media(max-width:639px)]:max-w-117.5" src={picture('banner-hero.png')} width="751" height="858" alt="Aurtx workspace dashboard presented on a laptop" fetchPriority="high" />
        <div className="hero-intro col-start-1 row-start-2 text-lg leading-[1.55] font-semibold [@media(max-width:767px)]:text-[17px]">
          <p>Aurtx Digital brings your client conversations, WhatsApp, team, tasks, and AI assistance together in one simple workspace.</p>
          <div className="hero-actions mt-6 flex flex-wrap gap-3 font-normal [@media(max-width:767px)]:justify-center">
            <PresentationButton outline>Get Started</PresentationButton>
            <PresentationButton outline>Learn More</PresentationButton>
          </div>
        </div>
        <div className="hero-team col-start-3 row-start-2 text-[15px] leading-[1.55] [&>h2]:mb-3 [&>h2]:text-xl [&>h2]:leading-[1.3] [&>h2]:font-black [&>strong]:mt-4.5 [&>strong]:block [&>strong]:max-w-71.75 [&>strong]:text-[15px] [&>strong]:leading-[1.4] [&>strong]:font-black [@media(max-width:1099px)]:col-start-1 [@media(max-width:1099px)]:row-start-3 [@media(max-width:767px)]:row-start-4 [@media(max-width:767px)]:[&>strong]:max-w-none">
          <h2>Everything Your Team Needs</h2>
          <p>Manage client conversations, assign work to your team, keep track of tasks, and get AI assistance — all from one place.</p>
          <strong>Built for teams that work with clients</strong>
          <div className="hero-avatars mt-3 flex [&>img]:-mr-5 [&>img]:h-11.5 [&>img]:w-11.5 [&>img]:rounded-full [@media(max-width:767px)]:justify-center [@media(max-width:767px)]:pr-5 [@media(max-width:639px)]:mt-4">{['banner-avatar1.png', 'banner-avatar2.png', 'banner-avatar3.png', 'banner-avatars4.png'].map(name => <img key={name} src={picture(name)} width="70" height="70" alt="" />)}</div>
        </div>
      </div>
    </section>
    <dl className="statistics relative z-2 mx-auto -mt-20 grid w-[calc(100%-48px)] max-w-250 grid-cols-4 rounded-3xl border border-[#063d3914] bg-[#f5f8f7] px-6 py-12 text-center font-[Sora,sans-serif] font-semibold shadow-[0_10px_40px_#063d3947] [&>div+div]:border-l [&>div+div]:border-[#063d391a] [&_dt]:bg-[linear-gradient(#0fc49c,#063d39)] [&_dt]:bg-clip-text [&_dt]:text-4xl [&_dt]:leading-[1.15] [&_dt]:tracking-[-1.2px] [&_dt]:text-transparent [&_dd]:mt-3 [&_dd]:text-[13px] [&_dd]:leading-5.25 [&_dd]:text-[#063d39] [&_dd]:before:mx-auto [&_dd]:before:mb-3 [&_dd]:before:block [&_dd]:before:h-0.5 [&_dd]:before:w-8 [&_dd]:before:bg-[#0b0f0e] [&_dd]:before:content-[''] [@media(max-width:1099px)]:[&_dd]:px-1.25 [@media(max-width:639px)]:w-[calc(100%-32px)] [@media(max-width:639px)]:grid-cols-2 [@media(max-width:639px)]:gap-x-0 [@media(max-width:639px)]:gap-y-6 [@media(max-width:639px)]:px-2.5 [@media(max-width:639px)]:py-6 [@media(max-width:639px)]:[&_dt]:text-[30px] [@media(max-width:639px)]:[&_dd]:text-[11px] [@media(max-width:639px)]:[&>div:nth-child(3)]:border-l-0">{[['1', 'Workspace for your team'], ['24/7', 'Client conversations'], ['AI', 'Reply assistance'], ['100%', 'Team visibility']].map(([number, label]) => 
      <div key={number}>
        <dt>{number}</dt>
        <dd>{label}</dd>
      </div>
    )}</dl>
  </div>
}
