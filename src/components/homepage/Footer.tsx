import { icon } from './assets'
export function Footer() {
  return <footer id="contact" className="site-footer bg-[#161b1a] px-6 pt-10 pb-6 font-[Lato,sans-serif] text-white [@media(max-width:540px)]:pt-8">
    <div className="footer-top mx-auto grid max-w-313 grid-cols-[1.4fr_1fr_1fr_1fr] items-start gap-10 [@media(540px<width<=767px)]:grid-cols-2 [@media(max-width:767px)]:gap-8 [@media(max-width:540px)]:grid-cols-1">
      <div className="footer-brand [&>img]:h-auto [&>img]:w-18.75 [&>p]:mt-6 [&>p]:max-w-73.5 [&>p]:text-lg [&>p]:leading-[1.45] [@media(max-width:540px)]:[&>p]:max-w-none">
        <img src={icon('logo-white')} width="93" height="64" alt="Aurtx Digital" />
        <p>Work With Your Clients.<br />Work Smarter. From One Place.</p>
        <div className="social-icons mt-4 flex gap-2.5 [&>a]:flex [&>a]:h-9.75 [&>a]:w-9.75 [&>a]:items-center [&>a]:justify-center [&>a]:rounded-xl [&>a]:bg-[#ffffff1a] [&>a]:transition-colors [&>a]:duration-300 [&>a:hover]:bg-[#064c38] [&_img]:h-4.25 [&_img]:w-4.25 [&_img]:object-contain">
          <a href="#" aria-label="Facebook"><img src={icon('facebook')} width="17" height="17" alt="" /></a>
          <a href="#" aria-label="Twitter"><img src={icon('twitter')} width="17" height="17" alt="" /></a>
          <a href="#" aria-label="LinkedIn"><img src={icon('linkedin')} width="17" height="17" alt="" /></a>
          <a href="#" aria-label="Instagram"><img src={icon('instagram')} width="17" height="17" alt="" /></a>
        </div>
      </div>
      <div className="footer-column flex flex-col gap-3 pt-2 text-[18px] leading-normal text-[#d9e6e1] [&>h2]:mb-0.75 [&>h2]:text-[19px] [&>h2]:font-bold [&>h2]:text-white [&>a]:transition-[color,text-shadow] [&>a]:duration-300 [&>a:hover]:text-white [&>a:hover]:[text-shadow:0_0_12px_#9af6d98c] [@media(max-width:639px)]:wrap-anywhere [@media(max-width:540px)]:pt-0">
        <h2 className='text-[22px]!'>Quick Links</h2>
        <a href="#home">Home</a>
        <a href="#features">Feature</a>
        <a href="#how-it-works">How It Works</a>
      </div>
      <div className="footer-column flex flex-col gap-3 pt-2 text-[18px] leading-normal text-[#d9e6e1] [&>h2]:mb-0.75 [&>h2]:text-[19px] [&>h2]:font-bold [&>h2]:text-white [&>a]:transition-[color,text-shadow] [&>a]:duration-300 [&>a:hover]:text-white [&>a:hover]:[text-shadow:0_0_12px_#9af6d98c] [@media(max-width:639px)]:wrap-anywhere [@media(max-width:540px)]:pt-0">
        <h2 className='text-[22px]!'>Company</h2>
        <a href="#why-aurtx">About Us</a>
        <span>Careers</span>
        <span>Blog</span>
        <a href="#contact">Contact</a>
      </div>
      <div className="footer-column flex flex-col gap-3 pt-2 text-[18px] leading-normal text-[#d9e6e1] [&>h2]:mb-0.75 [&>h2]:text-[19px] [&>h2]:font-bold [&>h2]:text-white [&>a]:transition-[color,text-shadow] [&>a]:duration-300 [&>a:hover]:text-white [&>a:hover]:[text-shadow:0_0_12px_#9af6d98c] [@media(max-width:639px)]:wrap-anywhere [@media(max-width:540px)]:pt-0">
        <h2 className='text-[22px]!'>Resources</h2>
        <span>Help Center</span>
        <span>Documentation</span>
        <span>FAQs</span>
        <span>Privacy Policy</span>
        <span>Terms &amp; Conditions</span>
      </div>
    </div>
    <div className="footer-bottom mx-auto mt-8 flex max-w-313 justify-between max-[768px]:items-center gap-6 border-t border-[#ffffff1a] pt-5.5 text-sm leading-[1.6] text-[#d9e6e199] [&>div]:flex [&>div]:gap-5.5 [&_a]:transition-[color,text-shadow] [&_a]:duration-300 [&_a:hover]:text-white [&_a:hover]:[text-shadow:0_0_12px_#9af6d98c] [@media(max-width:767px)]:flex-col [@media(max-width:767px)]:gap-3.5 [@media(max-width:639px)]:[&>div]:flex-wrap [@media(max-width:639px)]:[&>div]:gap-3.5 [@media(max-width:639px)]:[&>div]:text-[13px]">
      <a href="#">© 2026 Aurtx. All rights reserved.</a>
      <div>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Cookies</a>
      </div>
    </div>
  </footer>
}
