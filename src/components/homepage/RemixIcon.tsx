const glyphs = { 'menu-3-line': '\uEF34', 'close-line': '\uEB99', 'arrow-left-line': '\uEA60', 'arrow-right-line': '\uEA6C' } as const
export function RemixIcon({ name }: { name: keyof typeof glyphs }) {
  return <i className="font-[remixicon] not-italic antialiased" aria-hidden="true">{glyphs[name]}</i>
}
