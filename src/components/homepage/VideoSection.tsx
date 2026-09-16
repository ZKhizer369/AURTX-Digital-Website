import { picture, video } from './assets'
import { SectionHeading } from './SectionHeading'

export function VideoSection() {
  return <section className="video-section px-6 pt-12 pb-16 [@media(max-width:639px)]:px-5 [@media(max-width:639px)]:pt-8 [@media(max-width:639px)]:pb-12" id="how-it-works" aria-labelledby="video-title">
    <SectionHeading>
      <span className="eyebrow pill mb-5.5 inline-block rounded-[9px] bg-[#3fb59a3b] p-2.5 text-sm leading-none font-extrabold tracking-normal text-[#2b7a62]">AURTX DIGITAL</span>
      <h2 id="video-title">See How Aurtx Makes Client Work Simpler</h2>
      <p>Bring your WhatsApp conversations, team, tasks, and AI assistance together in one workspace built to keep your business moving</p>
    </SectionHeading>
    <div className="video-previews mx-auto mt-9 grid max-w-305 gap-6 grid-cols-3 [&>video]:block [&>video]:aspect-387/340 [&>video]:h-auto [&>video]:w-full [&>video]:rounded-xl [&>video]:bg-[#101b18] [&>video]:object-cover [&>video]:shadow-[0_8px_24px_#063d391a] [@media(max-width:1099px)]:grid-cols-2 [@media(max-width:639px)]:mt-7 [@media(max-width:639px)]:grid-cols-1">{['WhatsApp phone workspace', 'Team member using the Aurtx dashboard', 'Aurtx dashboard on a desktop monitor'].map((alt, index) => <video key={alt} src={video(index + 1)} controls playsInline preload="none" poster={picture(`video-placeholder${index + 1}.png`)} aria-label={alt} width="387" height="340">Your browser does not support video.</video>)}</div>
  </section>
}
