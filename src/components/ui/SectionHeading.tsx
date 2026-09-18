import type { ReactNode } from 'react'
export function SectionHeading({ children, eyebrow }: { children: ReactNode; eyebrow?: ReactNode }) {
  return <div className="mx-auto max-w-262.5 px-6 text-center [&>h2]:text-[clamp(26px,2.6vw,36px)] [&>h2]:leading-tight [&>h2]:font-extrabold [&>h2]:tracking-normal [&>p]:mx-auto [&>p]:mt-4 [&>p]:max-w-220 [&>p]:text-[17px] [&>p]:leading-[1.6] [&>p]:font-medium [&>p]:text-[#707372] [@media(max-width:639px)]:px-0 [@media(max-width:639px)]:[&>p]:text-[15px] section-heading">{eyebrow && <div className="mb-4">{eyebrow}</div>}{children}</div>
}
