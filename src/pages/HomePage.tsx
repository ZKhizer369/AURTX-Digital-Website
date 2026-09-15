import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Navigation, Autoplay } from 'swiper/modules'
import type { Swiper as SwiperInstance } from 'swiper'
import 'swiper/css'
import 'remixicon/fonts/remixicon.css'
import './homepage.css'

const images = import.meta.glob<string>('../assets/homepage/images/*', { eager: true, query: '?url', import: 'default' })
const videos = import.meta.glob<string>('../assets/homepage/videos/*.mp4', { eager: true, query: '?url', import: 'default' })
const icons = import.meta.glob<string>('../assets/homepage/icons/*', { eager: true, query: '?url', import: 'default' })
const picture = (name: string) => images[`../assets/homepage/images/${name}`]
const icon = (name: string) => icons[`../assets/homepage/icons/${name}.svg`]
const navigation = [['Home', '#home'], ['Feature', '#features'], ['How It Work', '#how-it-works'], ['About Us', '#why-aurtx'], ['Contact', '#contact']] as const
const features = [
  ['Never Miss a Message', 'Keep every client conversation organized and easy to manage in one shared workspace.'],
  ['Work Better Together', 'Assign clients, conversations, and tasks to your team leads and agents.'],
  ['Let AI Help You Reply', 'Give AI your business information so it can help answer client questions and alert your team when needed.'],
]
const reasons = [
  ['All Your Work in One Place', 'Manage client conversations, customers, tasks, and team activity without switching between different tools.'],
  ['Never Miss a Client Message', "Keep your WhatsApp conversations organized so important customer messages don't get overlooked."],
  ['Clear Team Responsibilities', 'Assign clients, conversations, and tasks to team leads and agents so everyone knows what they need to handle.'],
  ['Stay on Top of Every Task', "Create, assign, and track tasks and follow-ups so important work doesn't get forgotten."],
  ['AI That Understand Your Business', 'Give Aurtx information about your business so AI can help respond to customer questions using your own knowledge.'],
  ['Your Team Stays in Control', "When AI doesn't know how to handle a customer question, Aurtx can bring it to your team's attention instead of guessing."],
]
const roles = [
  ['Business Owners', 'See your clients, team, and business activity from one place.'],
  ['Team Leads', 'Assign work, manage agents, and keep conversations moving.'],
  ['Agents', 'Handle assigned clients, conversations, and tasks with clarity.'],
  ['Customer Support', 'Stay on top of questions, messages, and follow-ups.'],
  ['Business Managers', "See what's happening across your conversations and team."],
]
const products = [['Aurtx Digital', 'Client & Team Management', 417, 556], ['Aurtx AI', 'AI Client Assistance', 501, 485], ['Aurtx Mobile', 'Your Workspace, Anywhere', 348, 460]] as const
function PresentationButton({ children, outline = false }: { children: string; outline?: boolean }) {
  // No destination has been supplied for these presentation-only calls to action.
  return <button type="button" aria-disabled="true" className={`gradient-button${outline ? ' outline-button' : ''}`}>{children}</button>
}
export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [menuClosing, setMenuClosing] = useState(false)
  const [activeHash, setActiveHash] = useState(() => window.location.hash || '#home')
  const drawer = useRef<HTMLElement>(null)
  const closeMenu = () => { setMenuOpen(false); setMenuClosing(true); menuButton.current?.focus() }
  const menuButton = useRef<HTMLButtonElement>(null)
  const slider = useRef<SwiperInstance | null>(null)
  const [reducedMotion, setReducedMotion] = useState(false)
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReducedMotion(preference.matches)
    update(); preference.addEventListener('change', update)
    return () => preference.removeEventListener('change', update)
  }, [])
  useEffect(() => {
    const update = () => setActiveHash(window.location.hash || '#home')
    window.addEventListener('hashchange', update)
    return () => window.removeEventListener('hashchange', update)
  }, [])
  useEffect(() => {
    if (!menuClosing) return
    const timer = window.setTimeout(() => setMenuClosing(false), 400)
    return () => window.clearTimeout(timer)
  }, [menuClosing])
  useEffect(() => {
    if (!menuOpen) return
    const oldOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const focusFrame = requestAnimationFrame(() => drawer.current?.querySelector<HTMLButtonElement>('.drawer-close')?.focus())
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setMenuOpen(false); setMenuClosing(true); menuButton.current?.focus() }
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
    return () => { cancelAnimationFrame(focusFrame); document.body.style.overflow = oldOverflow; document.removeEventListener('keydown', close); window.removeEventListener('resize', resize) }
  }, [menuOpen])
  return <div className="homepage" id="home">
    <a className="skip-link" href="#main-content">Skip to content</a>
    <div className="hero-wrap"><section className="hero" aria-labelledby="hero-title">
      <header className="site-header"><a href="#home" aria-label="Aurtx Digital home"><img src={icon('logo')} width="86" height="64" alt="Aurtx Digital" /></a>
        <button ref={menuButton} className="menu-toggle" type="button" aria-label="Open navigation" aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => { setMenuClosing(false); setMenuOpen(true) }}><i className="ri-menu-3-line" aria-hidden="true" /></button>
        <div className={`drawer-backdrop${menuOpen ? ' is-open' : ''}`} onClick={closeMenu} aria-hidden="true" />
        <nav ref={drawer} id="main-navigation" aria-label="Main navigation" className={`navigation${menuOpen ? ' is-open' : ''}${menuClosing ? ' is-closing' : ''}`}>
          <button className="drawer-close" type="button" aria-label="Close navigation" onClick={closeMenu}><i className="ri-close-line" aria-hidden="true" /></button>
          {navigation.map(([label, href]) => <a key={label} href={href} aria-current={activeHash === href ? 'location' : undefined} onClick={() => { setActiveHash(href); if (menuOpen) closeMenu() }}>{label}</a>)}
          <div className="drawer-actions"><PresentationButton>Sign In</PresentationButton><PresentationButton>Get Started</PresentationButton></div>
        </nav>
        <div className="header-actions"><PresentationButton>Sign In</PresentationButton><PresentationButton>Get Started</PresentationButton></div>
      </header>
      <div className="hero-content">
      <h1 id="hero-title">Work With Your Clients.<br />Work <span>Smarter</span>. From <span>One Place</span>.</h1>
      <img className="hero-person" src={picture('banner-hero.png')} width="751" height="858" alt="Aurtx workspace dashboard presented on a laptop" fetchPriority="high" />
      <div className="hero-intro"><p>Aurtx Digital brings your client conversations, WhatsApp, team, tasks, and AI assistance together in one simple workspace.</p><div className="hero-actions"><PresentationButton outline>Get Started</PresentationButton><a className="learn-more" href="#features">Learn More</a></div></div>
      <div className="hero-team"><h2>Everything Your Team Needs</h2><p>Manage client conversations, assign work to your team, keep track of tasks, and get AI assistance — all from one place.</p><strong>Built for teams that work with clients</strong><div className="hero-avatars">{['banner-avatar1.png', 'banner-avatar2.png', 'banner-avatar3.png', 'banner-avatars4.png'].map(name => <img key={name} src={picture(name)} width="70" height="70" alt="" />)}</div></div>
    </div></section><dl className="statistics">{[['1', 'Workspace for your team'], ['24/7', 'Client conversations'], ['AI', 'Reply assistance'], ['100%', 'Team visibility']].map(([number, label]) => <div key={number}><dt>{number}</dt><dd>{label}</dd></div>)}</dl></div>
    <main id="main-content">
      <section className="video-section" id="how-it-works" aria-labelledby="video-title"><div className="section-heading"><span className="eyebrow pill">AURTX DIGITAL</span><h2 id="video-title">See How Aurtx Makes Client Work Simpler</h2><p>Bring your WhatsApp conversations, team, tasks, and AI assistance together in one workspace built to keep your business moving</p></div><div className="video-previews">{['WhatsApp phone workspace', 'Team member using the Aurtx dashboard', 'Aurtx dashboard on a desktop monitor'].map((alt, index) => <video key={alt} src={videos[`../assets/homepage/videos/preview-${index + 1}.mp4`]} controls playsInline preload="none" poster={picture(`video-placeholder${index + 1}.png`)} aria-label={alt} width="387" height="340">Your browser does not support video.</video>)}</div></section>
      <section className="feature-section" id="features" aria-labelledby="feature-title"><div className="section-heading"><span className="eyebrow pill">WHY AURTX DIGITAL</span><h2 id="feature-title">Everything Your Team Needs, In One Place</h2><p>From the first client message to the final follow-up, Aurtx helps your team stay organized, responsive, and connected.</p></div><div className="feature-grid">{features.map(([title, description], index) => <article className="feature-card" key={title}><div className="feature-icon"><img src={icon(`team-icon${index + 1}`)} width="56" height="54" alt="" /></div><h3>{title}</h3><p>{description}</p></article>)}</div></section>
      <section className="product-section" id="products" aria-labelledby="product-title"><div className="product-panel"><div className="section-heading"><h2 id="product-title">THE PRODUCTS</h2><p>From managing client conversations to coordinating your team and getting AI assistance, Aurtx gives your business the tools to work smarter from one place.</p></div><div className="product-carousel" role="region" aria-label="Aurtx products" tabIndex={0} onKeyDown={event => { if (event.key === 'ArrowRight') { event.preventDefault(); slider.current?.slideNext() } else if (event.key === 'ArrowLeft') { event.preventDefault(); slider.current?.slidePrev() } }}>
        <Swiper key={reducedMotion ? 'reduced' : 'motion'} modules={[A11y, Navigation, Autoplay]} loop autoplay={reducedMotion ? false : { delay: 3500, pauseOnMouseEnter: true, disableOnInteraction: false }} onSwiper={instance => { slider.current = instance }} slidesPerView={1} spaceBetween={24} breakpoints={{ 640: { slidesPerView: 2, spaceBetween: 24 }, 1100: { slidesPerView: 3, spaceBetween: 48 } }} speed={reducedMotion ? 0 : 350} navigation={{ prevEl: '.product-previous', nextEl: '.product-next' }} a11y={{ containerMessage: 'Aurtx products. Use left and right arrow keys to browse.' }}>{[...products, ...products].map(([name, description, width, height], itemIndex) => { const index = itemIndex % products.length; return <SwiperSlide key={`${name}-${itemIndex}`}><article className={`product-card product-${index + 1}`}><img className="product-image" src={picture(`products-img${index + 1}.png`)} width={width} height={height} alt={`${name} workspace preview`} loading="lazy" /><div className="product-label"><span className="product-mark"><img src={icon('logo-white')} width="93" height="64" alt="" /></span><div><h3>{name}</h3><p>{description}</p></div></div></article></SwiperSlide> })}</Swiper>
        <div className="product-controls"><button type="button" className="product-previous" aria-label="Previous product"><i className="ri-arrow-left-line" aria-hidden="true" /></button><button type="button" className="product-next" aria-label="Next product"><i className="ri-arrow-right-line" aria-hidden="true" /></button></div>
      </div></div></section>
      <section className="why-section" id="why-aurtx" aria-labelledby="why-title"><div className="section-heading"><span className="eyebrow">WHY CHOOSE AURTX</span><h2 id="why-title">Everything Your Team Needs to Work Smarter</h2></div><div className="reason-grid">{reasons.map(([title, description], index) => <article key={title} tabIndex={0} className="reason-card hover-card"><span className="number-badge">{index + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div></section>
      <section className="growth-section" aria-label="Work smarter and stay connected"><div className="growth-chart"><h2>Work Smarter.<br />Grow Faster.</h2><p>More Efficiency ↑</p><div className="growth-bars" aria-hidden="true">{[29, 51, 59, 97, 75, 85, 100].map((height, index) => <span key={height} className={index === 3 ? 'bright' : ''} style={{ height: `${height}%` }} />)}</div></div><div className="connection-panel"><h2>Everything Connected. Everyone Aligned.</h2><img className="connection-background" src={picture('connect-bg.svg')} width="718" height="492" alt="" loading="lazy" /><div className="connection-people"><img src={picture('connect-avatar1.png')} width="44" height="44" alt="" /><img src={picture('connect-avatar2.png')} width="44" height="44" alt="" /></div><div className="review-bubble"><div aria-label="Four and a half stars">{[0, 1, 2, 3].map(n => <img key={n} src={icon('review-star')} width="20" height="19" alt="" />)}<img src={icon('review-half-start')} width="20" height="20" alt="" /></div><p>Thanks!</p></div><img className="review-avatar" src={picture('connect-avatar4.png')} width="59" height="59" alt="" /><div className="connection-flags"><img src={picture('connect-avatar3.png')} width="63" height="63" alt="" /><img src={picture('connect-avatar3.png')} width="63" height="63" alt="" /></div></div></section>
      <section className="roles-section" aria-labelledby="roles-title"><div className="section-heading"><span className="eyebrow">BUILT FOR YOUR TEAM</span><h2 id="roles-title">Built for Everyone on Your Team</h2></div><div className="roles-grid">{roles.map(([title, description], index) => <article className="role-card" key={title}><span className="role-icon"><img src={icon(`built-icon${index + 1}`)} width="37" height="33" alt="" /></span><h3>{title}</h3><p>{description}</p></article>)}</div></section>
    </main>
    <footer id="contact" className="site-footer"><div className="footer-top"><div className="footer-brand"><img src={icon('logo-white')} width="93" height="64" alt="Aurtx Digital" /><p>Work With Your Clients.<br />Work Smarter. From One Place.</p><div className="social-icons">{['facebook', 'twitter', 'linkedin', 'instagram'].map(name => <span key={name}><img src={icon(name)} width="17" height="17" alt={name} /></span>)}</div></div><div className="footer-column"><h2>Quick Links</h2><a href="#home">Home</a><a href="#features">Feature</a><a href="#how-it-works">How It Works</a></div><div className="footer-column"><h2>Company</h2><a href="#why-aurtx">About Us</a><span>Careers</span><span>Blog</span><a href="#contact">Contact</a></div><div className="footer-column"><h2>Resources</h2><span>Help Center</span><span>Documentation</span><span>FAQs</span><span>Privacy Policy</span><span>Terms &amp; Conditions</span></div></div><div className="footer-bottom"><a href="#">© 2026 Aurtx. All rights reserved.</a><div><a href="#">Privacy Policy</a><a href="#">Terms of Service</a><a href="#">Cookies</a></div></div></footer>
  </div>
}

