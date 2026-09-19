import { useCallback, useEffect, useRef, useState } from 'react'
import { icon } from '../homepage/assets'
import { PresentationButton } from '../ui/PresentationButton'
import { RemixIcon } from '../ui/RemixIcon'
const homeNavigation = [['Home', '#home'], ['Feature', '/features'], ['How It Works', '/how-it-works'], ['About Us', '#why-aurtx'], ['Contact', '#contact']] as const
const featuresNavigation = [['Home', '/'], ['Feature', '/features'], ['How It Works', '/how-it-works'], ['About Us', '/#why-aurtx'], ['Contact', '#contact']] as const
export function Header({ page = 'home', inset = false }: { page?: 'home' | 'features' | 'how-it-works'; inset?: boolean }) {
  const navigation = page !== 'home' ? featuresNavigation : homeNavigation
  const [menuOpen, setMenuOpen] = useState(false)
  const [menuClosing, setMenuClosing] = useState(false)
  const [activeHash, setActiveHash] = useState(() => window.location.hash || '#home')
  const drawer = useRef<HTMLElement>(null)
  const closeMenu = useCallback(() => { setMenuOpen(false); setMenuClosing(true); menuButton.current?.focus() }, [])
  const menuButton = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    const update = () => setActiveHash(window.location.hash || '#home')
    window.addEventListener('hashchange', update)
    return () => window.removeEventListener('hashchange', update)
  }, [])
  useEffect(() => {
    if (!menuClosing) return
    const timer = window.setTimeout(() => setMenuClosing(false), window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 500)
    return () => window.clearTimeout(timer)
  }, [menuClosing])
  useEffect(() => {
    if (!menuOpen) return
    const oldOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    // Allow the opening visibility transition to paint before moving focus.
    let focusFrame = 0
    const openingFrame = requestAnimationFrame(() => {
      focusFrame = requestAnimationFrame(() => drawer.current?.querySelector<HTMLButtonElement>('.drawer-close')?.focus())
    })
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMenu()
      if (event.key === 'Tab') {
        const items = Array.from(drawer.current?.querySelectorAll<HTMLElement>('a, button') ?? []).filter(element => element.getClientRects().length > 0)
        const first = items[0]; const last = items[items.length - 1]
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus() }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus() }
      }
    }
    const resize = () => { if (window.innerWidth >= 1100) setMenuOpen(false) }
    document.addEventListener('keydown', close)
    window.addEventListener('resize', resize)
    return () => { cancelAnimationFrame(openingFrame); cancelAnimationFrame(focusFrame); document.body.style.overflow = oldOverflow; document.removeEventListener('keydown', close); window.removeEventListener('resize', resize) }
  }, [menuOpen, closeMenu])

  return <header className={`site-header z-20 mx-auto rounded-3xl bg-[#F5F8F7] flex h-20 max-w-380 items-center justify-between gap-6 px-6 py-3 text-[#0b6b53] [&>a]:shrink-0 [&>a_img]:h-auto [&>a_img]:w-16.25 before:absolute before:inset-0 before:left-1/2 before:-z-10 before:w-screen before:-translate-x-1/2 before:bg-[#f5f8f7] before:content-[''] [@media(max-width:1099px)]:gap-4 [@media(max-width:639px)]:h-18 [@media(max-width:639px)]:px-5 [@media(max-width:639px)]:[&>a_img]:w-14.5 ${inset ? 'relative shadow-[0px_1px_8px_0.1px_#0004] before:hidden' : ''}`}>
    <a href={page !== 'home' ? '/' : '#home'} aria-label="Aurtx Digital home">
      <img className='max-[639px]:h-6 max-[639px]:w-6' src={icon('logo')} width="86" height="64" alt="Aurtx Digital" />
    </a>
    <button ref={menuButton} className="menu-toggle hidden [@media(max-width:1099px)]:order-3 [@media(max-width:1099px)]:m-0 [@media(max-width:1099px)]:grid [@media(max-width:1099px)]:h-10.5 [@media(max-width:1099px)]:w-10.5 [@media(max-width:1099px)]:shrink-0 [@media(max-width:1099px)]:place-items-center [@media(max-width:1099px)]:rounded-lg [@media(max-width:1099px)]:border-0 [@media(max-width:1099px)]:bg-transparent [@media(max-width:1099px)]:p-0 [@media(max-width:1099px)]:text-[28px] [@media(max-width:1099px)]:text-[#063d39] [@media(max-width:1099px)]:hover:bg-[#dceae4] [@media(max-width:639px)]:ml-auto [@media(max-width:639px)]:text-2xl"  type="button" aria-label="Open navigation" aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => { setMenuClosing(false); setMenuOpen(true) }}>
      <RemixIcon name="menu-3-line" />
    </button>
    <div className={`drawer-backdrop hidden [@media(max-width:1099px)]:fixed [@media(max-width:1099px)]:inset-0 [@media(max-width:1099px)]:z-30 [@media(max-width:1099px)]:block [@media(max-width:1099px)]:bg-[#061c164d] [@media(max-width:1099px)]:opacity-0 [@media(max-width:1099px)]:invisible [@media(max-width:1099px)]:backdrop-blur-[7px] [@media(max-width:1099px)]:transition-[opacity,visibility] [@media(max-width:1099px)]:duration-400 [@media(max-width:1099px)]:[&.is-open]:opacity-100 [@media(max-width:1099px)]:[&.is-open]:visible${menuOpen ? ' is-open' : ''}`} onClick={closeMenu} aria-hidden="true" />
    <nav ref={drawer} data-state={menuOpen ? 'open' : menuClosing ? 'closing' : 'closed'} onTransitionEnd={event => { if (event.target === event.currentTarget && event.propertyName === 'transform' && menuClosing) setMenuClosing(false) }} inert={menuClosing || undefined} id="main-navigation" aria-label="Main navigation" className={`navigation flex items-center ${inset ? 'gap-6' : 'gap-12'} font-[Lato,sans-serif] font-semibold text-lg [&>a]:relative [&>a]:w-fit [&>a]:py-2 [&>a]:after:absolute [&>a]:after:bottom-0 [&>a]:after:left-0 [&>a]:after:h-0.5 [&>a]:after:w-full [&>a]:after:origin-left [&>a]:after:scale-x-0 [&>a]:after:bg-current [&>a]:after:transition-transform [&>a]:after:duration-400 [&>a]:after:content-[''] [&>a:hover]:after:scale-x-100 [&>a:focus-visible]:after:scale-x-100 [&>a[aria-current]]:after:scale-x-100 [@media(max-width:1099px)]:[&>a]:px-0 [@media(max-width:1099px)]:[&>a[aria-current]]:px-4.5 [@media(max-width:1099px)]:[&>a]:rounded-xl [@media(max-width:1099px)]:[&>a]:w-full [@media(max-width:1099px)]:[&>a]:after:bg-[#0b6b53] [@media(max-width:1099px)]:[&>a]:after:px-5 [@media(max-width:1099px)]:[&>a:not([aria-current])]:after:scale-x-100 [@media(max-width:1099px)]:[&>a[aria-current]]:after:hidden [@media(max-width:1099px)]:[&>a[aria-current]]:bg-[#0b6b53] [@media(max-width:1099px)]:[&>a[aria-current]]:text-white [@media(max-width:1099px)]:fixed [@media(max-width:1099px)]:inset-y-0 [@media(max-width:1099px)]:left-0 [@media(max-width:1099px)]:right-auto [@media(max-width:1099px)]:z-31 [@media(max-width:1099px)]:m-0 [@media(max-width:1099px)]:h-dvh [@media(max-width:1099px)]:w-[75vw] [@media(max-width:1099px)]:flex-col [@media(max-width:1099px)]:items-start [@media(max-width:1099px)]:gap-5 [@media(max-width:1099px)]:overflow-y-auto [@media(max-width:1099px)]:rounded-none [@media(max-width:1099px)]:bg-[#f5f8f7] [@media(max-width:1099px)]:px-7 [@media(max-width:1099px)]:pt-21 [@media(max-width:1099px)]:pb-8 [@media(max-width:1099px)]:text-lg [@media(max-width:1099px)]:shadow-[10px_0_40px_#0002] [@media(max-width:1099px)]:transform-[translateX(-105%)] [@media(max-width:1099px)]:visible [@media(max-width:1099px)]:data-[state=closed]:invisible [@media(max-width:1099px)]:transition-[transform] [@media(max-width:1099px)]:duration-400 [@media(max-width:1099px)]:ease-[ease] [@media(max-width:1099px)]:data-[state=open]:transform-[translateX(0)]`}>
      <button className="drawer-close rounded-lg transition-colors focus-visible:bg-[#dceae4] hidden [@media(max-width:1099px)]:absolute [@media(max-width:1099px)]:top-5 [@media(max-width:1099px)]:right-5 [@media(max-width:1099px)]:grid [@media(max-width:1099px)]:h-10.5 [@media(max-width:1099px)]:w-10.5 [@media(max-width:1099px)]:place-items-center [@media(max-width:1099px)]:border-0 [@media(max-width:1099px)]:bg-transparent [@media(max-width:1099px)]:text-[28px] [@media(max-width:1099px)]:text-[#063d39] [@media(max-width:1099px)]:hover:bg-[#dceae4]" type="button" aria-label="Close navigation" onClick={closeMenu}>
        <RemixIcon name="close-large-line" />
      </button>
      {navigation.map(([label, href]) => <a key={label} href={href} aria-current={page !== 'home' ? (href === `/${page}` ? 'page' : undefined) : (activeHash === href ? 'location' : undefined)} onClick={() => { setActiveHash(href); if (menuOpen) closeMenu() }}>{label}</a>)}
      <div className="drawer-actions hidden [@media(max-width:639px)]:mt-3 [@media(max-width:639px)]:flex [@media(max-width:639px)]:w-full [@media(max-width:639px)]:flex-col [@media(max-width:639px)]:gap-3 [@media(max-width:639px)]:[&_button]:w-full [@media(max-width:639px)]:[&_button]:min-w-0">
        <PresentationButton>Sign In</PresentationButton>
        <PresentationButton>Get Started</PresentationButton>
      </div>
    </nav>
    <div className="header-actions ml-6 flex gap-2.5 [@media(max-width:1099px)]:order-2 [@media(max-width:1099px)]:ml-auto [@media(max-width:1099px)]:w-auto [@media(max-width:1099px)]:[&_button]:min-w-28.75 [@media(max-width:1099px)]:[&_button]:text-[15px] [@media(max-width:639px)]:hidden">
      <PresentationButton>Sign In</PresentationButton>
      <PresentationButton>Get Started</PresentationButton>
    </div>
  </header>
}
