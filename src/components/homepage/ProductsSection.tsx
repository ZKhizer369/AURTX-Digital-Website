import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Navigation, Autoplay } from 'swiper/modules'
import type { Swiper as SwiperInstance } from 'swiper'
import { picture, icon } from './assets'
import { RemixIcon } from './RemixIcon'
import { SectionHeading } from './SectionHeading'
const products = [['Aurtx Digital', 'Client & Team Management', 417, 556], ['Aurtx AI', 'AI Client Assistance', 501, 485], ['Aurtx Mobile', 'Your Workspace, Anywhere', 348, 460]] as const
export function ProductsSection() {
  const slider = useRef<SwiperInstance | null>(null)
  const [reducedMotion, setReducedMotion] = useState(false)
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReducedMotion(preference.matches)
    update(); preference.addEventListener('change', update)
    return () => preference.removeEventListener('change', update)
  }, [])
  return <section className="product-section max-w-325 mx-auto rounded-[42px] drop-shadow-[0_2px_8px_rgba(0,0,0,0.15)] bg-[#edf1ef]" id="products" aria-labelledby="product-title">
    <div className="product-panel px-6 pt-13.5 pb-16 [&_.section-heading>p]:mt-6 [@media(max-width:639px)]:px-3 [@media(max-width:639px)]:py-10">
      <SectionHeading>
        <h2 id="product-title">THE PRODUCTS</h2>
        <p>From managing client conversations to coordinating your team and getting AI assistance, Aurtx gives your business the tools to work smarter from one place.</p>
      </SectionHeading>
      <div className="product-carousel relative mx-auto mt-10 min-w-0 max-w-335 px-14.5 focus-visible:[&_.swiper-slide-active_.product-label]:-translate-y-2.25 focus-visible:[&_.swiper-slide-active_.product-label]:shadow-[0_14px_26px_#063d3933] [@media(max-width:639px)]:mt-7 [@media(max-width:639px)]:px-8" role="region" aria-label="Aurtx products" tabIndex={0} onKeyDown={event => { if (event.key === 'ArrowRight') { event.preventDefault(); slider.current?.slideNext() } else if (event.key === 'ArrowLeft') { event.preventDefault(); slider.current?.slidePrev() } }}>
        <Swiper className="relative z-1 mx-auto block list-none overflow-hidden p-0 touch-pan-y [&>.swiper-wrapper]:relative [&>.swiper-wrapper]:z-1 [&>.swiper-wrapper]:flex [&>.swiper-wrapper]:h-full [&>.swiper-wrapper]:w-full [&>.swiper-wrapper]:transform-[translate3d(0,0,0)] [&>.swiper-wrapper]:transition-transform [&>.swiper-wrapper]:ease-(--swiper-wrapper-transition-timing-function,initial) [&.swiper-backface-hidden_.swiper-slide]:transform-[translateZ(0)] [&.swiper-backface-hidden_.swiper-slide]:backface-hidden " key={reducedMotion ? 'reduced' : 'motion'} modules={[A11y, Navigation, Autoplay]} loop autoplay={reducedMotion ? false : { delay: 3500, pauseOnMouseEnter: true, disableOnInteraction: false }} onSwiper={instance => { slider.current = instance }} slidesPerView={1} spaceBetween={24} breakpoints={{ 640: { slidesPerView: 2, spaceBetween: 24 }, 1100: { slidesPerView: 3, spaceBetween: 48 } }} speed={reducedMotion ? 0 : 350} navigation={{ prevEl: '.product-previous', nextEl: '.product-next' }} a11y={{ containerMessage: 'Aurtx products. Use left and right arrow keys to browse.' }}>{[...products, ...products].map(([name, description, width, height], itemIndex) => {
          const index = itemIndex % products.length; return <SwiperSlide className="relative block h-full w-full shrink-0 transition-transform [&.swiper-slide-invisible-blank]:invisible " key={`${name}-${itemIndex}`}>
            <article className={`product-card group relative h-110 overflow-hidden rounded-[18px] bg-white [@media(max-width:1099px)]:h-100 [@media(max-width:639px)]:h-92.5 product-${index + 1}`}>
              <img className="product-image h-full w-full object-contain in-[.product-1]:object-bottom in-[.product-2]:px-2 in-[.product-2]:py-5 in-[.product-3]:pt-11.5" src={picture(`products-img${index + 1}.png`)} width={width} height={height} alt={`${name} workspace preview`} loading="lazy" />
              <div className="product-label absolute bottom-9.5 left-0 flex min-h-21.25 w-[92%] items-center gap-3 rounded-r-[18px] bg-[rgba(242,242,242,0.6)] py-3 pl-5 shadow-[0_7px_20px_#063d3926] transition-all duration-350 ease-[ease] group-hover:bg-[rgba(242,242,242,1)] group-hover:shadow-[0_14px_26px_#063d3933] [&_h3]:text-lg [&_h3]:leading-[1.3] [&_h3]:font-black [&_p]:mt-1.25 [&_p]:text-sm [&_p]:leading-[1.4] [&_p]:font-semibold [&_p]:text-[#000b] [@media(max-width:639px)]:bottom-7 [@media(max-width:639px)]:min-h-19 [@media(max-width:639px)]:gap-2 [@media(max-width:639px)]:pr-2 [@media(max-width:639px)]:[&_h3]:text-base [@media(max-width:639px)]:[&_p]:text-xs">
                <span className="product-mark flex h-17 w-16 shrink-0 items-center justify-center rounded-2xl bg-(image:--button-gradient) [&>img]:h-auto [&>img]:w-11.5 [@media(max-width:639px)]:h-14.5 [@media(max-width:639px)]:w-11.5 [@media(max-width:639px)]:[&>img]:w-8.75">
                  <img src={icon('logo-white')} width="93" height="64" alt="" />
                </span>
                <div>
                  <h3>{name}</h3>
                  <p>{description}</p>
                </div>
              </div>
            </article>
          </SwiperSlide>
        })}</Swiper>
        <div className="product-controls contents [&>button]:absolute [&>button]:top-1/2 [&>button]:z-2 [&>button]:-mt-5.5 [&>button]:grid [&>button]:h-11 [&>button]:w-11 [&>button]:place-items-center [&>button]:rounded-full [&>button]:border-0 [&>button]:bg-[#063d39] [&>button]:text-[22px] [&>button]:text-white [&>button]:shadow-[0_5px_16px_#063d3926] [&>button:hover]:bg-[#16856b] [&>.swiper-button-disabled]:opacity-30 [&>.swiper-button-lock]:hidden [@media(max-width:639px)]:[&>button]:h-9.5 [@media(max-width:639px)]:[&>button]:w-7.5 [@media(max-width:639px)]:[&>button]:text-[19px]">
          <button type="button" className="product-previous left-0" aria-label="Previous product">
            <RemixIcon name="arrow-left-line" />
          </button>
          <button type="button" className="product-next right-0" aria-label="Next product">
            <RemixIcon name="arrow-right-line" />
          </button>
        </div>
      </div>
    </div>
  </section>
}
