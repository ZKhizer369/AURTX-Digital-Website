const glyphs = { 'arrow-up-line': '\uEA76', 'close-large-line': '\uF4C7', 'play-fill': '\uF00A', 'pause-fill': '\uEFD7', 'skip-back-fill': '\uF13F', 'skip-forward-fill': '\uF143', 'fullscreen-line': '\uED9C', 'fullscreen-exit-line': '\uED9A', 'more-2-fill': '\uEF76', 'volume-mute-line': '\uF29E', 'volume-up-line': '\uF2A2', 'menu-3-line': '\uEF34', 'close-line': '\uEB99', 'arrow-left-line': '\uEA60', 'arrow-right-line': '\uEA6C' } as const
export function RemixIcon({ name }: { name: keyof typeof glyphs }) {
  return <i className="font-[remixicon] not-italic antialiased" aria-hidden="true">{glyphs[name]}</i>
}
