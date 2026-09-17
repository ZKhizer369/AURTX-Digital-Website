import type { CSSProperties } from 'react'
import { picture, icon } from './assets'
import { RemixIcon } from '../ui/RemixIcon'

export function GrowthSection() {
  return <section style={{ '--ribbed-background': 'url(' + picture('ribbed-background.png') + ')' } as CSSProperties} className="growth-section mx-auto grid max-w-325 grid-cols-[minmax(0,1fr)_minmax(0,1.65fr)] items-stretch gap-16 px-6 pt-6 pb-16 [@media(max-width:920px)]:grid-cols-1 [@media(max-width:639px)]:px-5 [@media(max-width:639px)]:pt-3 [@media(max-width:639px)]:pb-12 max-[990px]:gap-7" aria-label="Work smarter and stay connected">
    <div className="growth-chart group/growth relative isolate h-112.5 overflow-hidden bg-[#080e0d] bg-(image:--ribbed-background) rounded-2xl bg-center p-7 text-white shadow-[0_12px_30px_#063d3914] [&>h2]:text-4xl [&>h2]:leading-[1.2] [&>h2]:font-semibold [&>p]:mt-3.5 [&>p]:text-center [&>p]:text-[23px] [&>p]:font-semibold [@media(max-width:767px)]:w-full [@media(max-width:639px)]:m-auto">
      <h2>Work Smarter.<br />Grow Faster.</h2>
      <p>More Efficiency <span className="inline-block align-baseline transition-transform duration-300 group-hover/growth:-translate-y-1 motion-reduce:translate-y-0"><RemixIcon name="arrow-up-line" /></span></p>
      <div className="growth-bars absolute bottom-6.5 left-5.5 right-5 flex h-62.5 items-end gap-4.75 [&>span]:flex-1 [&>span]:bg-[#7e8282] [&>.bright]:bg-white [@media(max-width:1099px)]:gap-3" aria-hidden="true">{[29, 51, 59, 97, 75, 85, 100].map((height, index) => <span key={height} className={index === 3 ? 'bright' : ''} style={{ height: `${height}%` }} />)}</div>
    </div>
    <div className="connection-panel relative h-112.5 overflow-hidden bg-[#09615414] rounded-r-xl rounded-t-xl rounded-bl-[200px] [&>h2]:relative [&>h2]:z-1 [&>h2]:max-w-full [&>h2]:p-6.5 [&>h2]:text-[28px] [&>h2]:leading-[1.2] [&>h2]:font-semibold [&>h2]:tracking-[.74px] [@media(max-width:639px)]:[&>h2]:text-[25px]">
      <h2 className='max-w-[80%]!'>Everything Connected. Everyone Aligned.</h2>
      <img className="connection-background absolute bottom-0 left-1/2 h-auto w-155 max-w-none! -translate-x-1/2 [@media(max-width:1099px)]:-bottom-5 [@media(max-width:639px)]:w-137.5" src={picture('connect-bg.svg')} width="718" height="492" alt="" loading="lazy" />
      <div className="connection-people absolute bottom-25 left-[10.2%] flex gap-0.5 [&>img]:h-11 [&>img]:w-11 [@media(max-width:1099px)]:bottom-20 [@media(max-width:639px)]:left-[7%]">
        <img src={picture('connect-avatar1.png')} width="44" height="44" alt="" />
        <img src={picture('connect-avatar2.png')} width="44" height="44" alt="" />
      </div>
      <div className="review-bubble absolute top-10 right-[3%] max-[640px]:top-25 w-40 max-[640px]:w-35 bg-white p-3.5 [&>div]:flex [&>div]:gap-1.25 [&_img]:h-5 [&_img]:w-5 [&_img]:object-contain [&>p]:mt-2 [&>p]:text-base [&>p]:tracking-[.8px] after:absolute after:-bottom-3.75 after:left-4.5 after:border-8 after:border-transparent after:border-t-white after:content-[''] [@media(max-width:1400px)]:[&>div]:gap-0">
        <div aria-label="Four and a half stars">{[0, 1, 2, 3].map(n => <img key={n} src={icon('review-star')} width="20" height="19" alt="" />)}<img src={icon('review-half-start')} width="20" height="20" alt="" />
        </div>
        <p>Thanks!</p>
      </div>
      <img className="review-avatar absolute top-35 right-[20%] max-[640px]:top-50 max-[640px]:right-[25%] rounded-full" src={picture('connect-avatar4.png')} width="59" height="59" alt="" />
      <div className="connection-flags absolute right-[2%] bottom-15 flex [&>img]:-ml-6.5 [&>img]:h-14.75 [&>img]:w-14.75 [&>img]:rounded-full [&>img]:border-[1.5px] [&>img]:border-white [@media(max-width:1099px)]:bottom-10 [@media(max-width:639px)]:right-[9%] [@media(max-width:639px)]:[&>img]:h-12 [@media(max-width:639px)]:[&>img]:w-12">
        <img src={picture('connect-avatar3.png')} width="63" height="63" alt="" />
        <img src={picture('connect-avatar3.png')} width="63" height="63" alt="" />
      </div>
    </div>
  </section>
}
