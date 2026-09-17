export function PresentationButton({ children, outline = false, href, tone = 'dark' }: { children: string; outline?: boolean; href?: string; tone?: 'dark' | 'green' }) {
  // No destination has been supplied for these presentation-only calls to action.
  const className = "gradient-button relative isolate inline-flex h-10.75 min-w-35.5 items-center justify-center overflow-hidden rounded-[35px] border-white px-4.5 whitespace-nowrap text-white before:absolute before:inset-0 before:-z-10 before:-translate-x-full before:bg-(image:--button-gradient) before:transition-transform before:duration-450 before:ease-[ease] before:content-[''] hover:before:translate-x-0 focus-visible:before:translate-x-0 cursor-pointer focus-visible:shadow-[0_5px_20px_#0003]" + (outline ? " outline-button border-2 before:bg-(image:--button-gradient-green)" : " border " + (tone === 'green' ? "bg-(image:--button-gradient-green)" : "bg-(image:--button-gradient)")) + (outline && tone === 'dark' ? " max-[540px]:w-full" : "")
  if (href) return <a href={href} className={className}>{children}</a>
  return <button type="button" aria-disabled="true" className={className}>{children}</button>
}
