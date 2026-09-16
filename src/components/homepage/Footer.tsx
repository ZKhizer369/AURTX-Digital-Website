import { icon } from './assets'
export function Footer() {
  return <footer id="contact" className="site-footer bg-[#161b1a] px-6 pt-10 pb-6 font-[Lato,sans-serif] text-white [@media(max-width:540px)]:pt-8">
    <div className="footer-top mx-auto grid max-w-313 grid-cols-[1.4fr_1fr_1fr_1fr] items-start gap-10 [@media(540px<width<=767px)]:grid-cols-2 [@media(max-width:767px)]:gap-8 [@media(max-width:540px)]:grid-cols-1">
      <div className="footer-brand [&>img]:h-auto [&>img]:w-18.75 [&>p]:mt-6 [&>p]:max-w-73.5 [&>p]:text-lg [&>p]:leading-[1.45] [@media(max-width:540px)]:[&>p]:max-w-none">
        <img src={icon('logo-white')} width="93" height="64" alt="Aurtx Digital" />
        <p>Work With Your Clients.<br />Work Smarter. From One Place.</p>
        <div className="social-icons mt-4 flex gap-2.5 [&>span]:flex [&>span]:h-9.75 [&>span]:w-9.75 [&>span]:items-center [&>span]:justify-center [&>span]:rounded-xl [&>span]:bg-[#ffffff1a] [&>span]:transition-colors [&>span]:duration-300 [&>span:hover]:bg-[#064c38] [&_img]:h-[17px] [&_img]:w-[17px] [&_img]:object-contain">{['facebook', 'twitter', 'linkedin', 'instagram'].map(name => <span key={name}>
          <img src={icon(name)} width="17" height="17" alt={name} />
        </span>)}</div>
      </div>
      <div className="footer-column flex flex-col gap-3 pt-2 text-[15px] leading-normal text-[#d9e6e1] [&>h2]:mb-0.75 [&>h2]:text-[19px] [&>h2]:font-bold [&>h2]:text-white [&>a]:transition-[color,text-shadow] [&>a]:duration-300 [&>a:hover]:text-white [&>a:hover]:[text-shadow:0_0_12px_#9af6d98c] [@media(max-width:639px)]:[overflow-wrap:anywhere] [@media(max-width:540px)]:pt-0">
        <h2>Quick Links</h2>
        <a href="#home">Home</a>
        <a href="#features">Feature</a>
        <a href="#how-it-works">How It Works</a>
      </div>
      <div className="footer-column flex flex-col gap-3 pt-2 text-[15px] leading-normal text-[#d9e6e1] [&>h2]:mb-0.75 [&>h2]:text-[19px] [&>h2]:font-bold [&>h2]:text-white [&>a]:transition-[color,text-shadow] [&>a]:duration-300 [&>a:hover]:text-white [&>a:hover]:[text-shadow:0_0_12px_#9af6d98c] [@media(max-width:639px)]:[overflow-wrap:anywhere] [@media(max-width:540px)]:pt-0">
        <h2>Company</h2>
        <a href="#why-aurtx">About Us</a>
        <span>Careers</span>
        <span>Blog</span>
        <a href="#contact">Contact</a>
      </div>
      <div className="footer-column flex flex-col gap-3 pt-2 text-[15px] leading-normal text-[#d9e6e1] [&>h2]:mb-0.75 [&>h2]:text-[19px] [&>h2]:font-bold [&>h2]:text-white [&>a]:transition-[color,text-shadow] [&>a]:duration-300 [&>a:hover]:text-white [&>a:hover]:[text-shadow:0_0_12px_#9af6d98c] [@media(max-width:639px)]:[overflow-wrap:anywhere] [@media(max-width:540px)]:pt-0">
        <h2>Resources</h2>
        <span>Help Center</span>
        <span>Documentation</span>
        <span>FAQs</span>
        <span>Privacy Policy</span>
        <span>Terms &amp; Conditions</span>
      </div>
    </div>
    <div className="footer-bottom mx-auto mt-8 flex max-w-313 justify-between gap-6 border-t border-[#ffffff1a] pt-5.5 text-sm leading-[1.6] text-[#d9e6e199] [&>div]:flex [&>div]:gap-[22px] [&_a]:transition-[color,text-shadow] [&_a]:duration-300 [&_a:hover]:text-white [&_a:hover]:[text-shadow:0_0_12px_#9af6d98c] [@media(max-width:767px)]:flex-col [@media(max-width:767px)]:gap-[14px] [@media(max-width:639px)]:[&>div]:flex-wrap [@media(max-width:639px)]:[&>div]:gap-[14px] [@media(max-width:639px)]:[&>div]:text-[13px]">
      <a href="#">© 2026 Aurtx. All rights reserved.</a>
      <div>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Cookies</a>
      </div>
    </div>
  </footer>
}
