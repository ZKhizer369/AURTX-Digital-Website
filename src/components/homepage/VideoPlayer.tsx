import { useEffect, useId, useRef, useState, type CSSProperties } from 'react'
import { RemixIcon } from './RemixIcon'

const controlClass = 'grid shrink-0 place-items-center rounded-full border border-white/20 bg-black/35 text-white backdrop-blur-md transition-colors hover:bg-black/60 focus-visible:outline-white disabled:cursor-not-allowed disabled:opacity-45'
const formatTime = (seconds: number) => `${Math.floor(seconds / 60)}:${Math.floor(seconds % 60).toString().padStart(2, '0')}`

export function VideoPlayer({ src, poster, label }: { src?: string; poster?: string; label: string }) {
  const media = useRef<HTMLVideoElement>(null)
  const card = useRef<HTMLDivElement>(null)
  const settings = useRef<HTMLDivElement>(null)
  const settingsButton = useRef<HTMLButtonElement>(null)
  const settingsId = useId()
  const [ready, setReady] = useState(false)
  const [failed, setFailed] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [muted, setMuted] = useState(true)
  const [rate, setRate] = useState(1)
  const [fullscreen, setFullscreen] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [notice, setNotice] = useState('')
  const unavailable = !src || failed
  const canPlay = ready && !unavailable
  const canSeek = canPlay && duration > 0

  const syncMedia = () => {
    const element = media.current
    if (!element) return
    setPlaying(!element.paused && !element.ended)
    setCurrentTime(Number.isFinite(element.currentTime) ? element.currentTime : 0)
    setDuration(Number.isFinite(element.duration) ? element.duration : 0)
    setMuted(element.muted)
    setRate(element.playbackRate)
  }

  useEffect(() => {
    const update = () => setFullscreen(document.fullscreenElement === card.current)
    document.addEventListener('fullscreenchange', update)
    return () => document.removeEventListener('fullscreenchange', update)
  }, [])

  useEffect(() => {
    if (!settingsOpen) return
    const outside = (event: PointerEvent) => {
      if (event.target instanceof Node && !settings.current?.contains(event.target)) setSettingsOpen(false)
    }
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSettingsOpen(false)
        settingsButton.current?.focus()
      }
    }
    document.addEventListener('pointerdown', outside)
    document.addEventListener('keydown', escape)
    return () => {
      document.removeEventListener('pointerdown', outside)
      document.removeEventListener('keydown', escape)
    }
  }, [settingsOpen])

  const togglePlayback = async () => {
    const element = media.current
    if (!element || !canPlay) return
    setNotice('')
    if (!element.paused) element.pause()
    else {
      try { await element.play() }
      catch { setNotice('Playback could not start. Try again.'); syncMedia() }
    }
  }
  const seek = (time: number) => {
    if (media.current && canSeek) media.current.currentTime = Math.min(duration, Math.max(0, time))
  }
  const toggleFullscreen = async () => {
    try {
      if (document.fullscreenElement === card.current) await document.exitFullscreen()
      else if (card.current?.requestFullscreen) await card.current.requestFullscreen()
      else setNotice('Fullscreen is unavailable in this browser.')
    } catch { setNotice('Fullscreen could not open in this browser.') }
  }

  return <div ref={card} role="group" aria-label={`${label} video player`} className="video-player relative isolate aspect-387/340 min-w-0 overflow-hidden rounded-xl bg-[#101b18] text-white shadow-[0_8px_24px_#063d391a] fullscreen:aspect-auto fullscreen:h-dvh fullscreen:w-screen">
    <video ref={media} src={src} poster={poster} autoPlay muted playsInline preload="metadata" aria-label={label} width="387" height="340" className="block h-full w-full object-contain"
      onLoadedMetadata={syncMedia} onDurationChange={syncMedia} onTimeUpdate={syncMedia} onPlay={syncMedia} onPause={syncMedia} onEnded={syncMedia} onVolumeChange={syncMedia} onRateChange={syncMedia}
      onCanPlay={() => { setReady(true); syncMedia() }} onError={() => { setFailed(true); setReady(false); setPlaying(false); setDuration(0); setCurrentTime(0) }} />
    {unavailable && <img src={poster} alt="" className="absolute inset-0 h-full w-full object-contain" />}
    <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/80 via-black/15 to-black/20" />
    <div className="absolute top-3 right-3 z-20 flex gap-1.5">
      <button type="button" className={`${controlClass} size-11 text-xl`} aria-label={fullscreen ? 'Exit fullscreen' : 'Enter fullscreen'} onClick={() => void toggleFullscreen()}><RemixIcon name={fullscreen ? 'fullscreen-exit-line' : 'fullscreen-line'} /></button>
      <div ref={settings}>
        <button ref={settingsButton} type="button" className={`${controlClass} size-11 text-xl`} aria-label="Video settings" aria-expanded={settingsOpen} aria-controls={settingsId} disabled={!canPlay} onClick={() => setSettingsOpen(!settingsOpen)}><RemixIcon name="more-2-fill" /></button>
        {settingsOpen && <div id={settingsId} className="absolute top-13 right-0 w-44 rounded-xl border border-white/20 bg-[#101b18]/95 p-3 text-sm shadow-lg backdrop-blur-md">
          <button type="button" className="flex min-h-11 w-full items-center gap-2 rounded-md px-2 hover:bg-white/15" onClick={() => { if (media.current) media.current.muted = !media.current.muted }}><RemixIcon name={muted ? 'volume-mute-line' : 'volume-up-line'} />{muted ? 'Unmute' : 'Mute'}</button>
          <label className="mt-1 flex flex-col gap-1">Playback speed
            <select className="min-h-11 rounded-md border border-white/30 bg-[#101b18] px-2" value={rate} onChange={event => { if (media.current) media.current.playbackRate = Number(event.target.value) }}>
              {[0.5, 1, 1.5, 2].map(speed => <option key={speed} value={speed}>{speed}x</option>)}
            </select>
          </label>
        </div>}
      </div>
    </div>
    <div className="absolute inset-0 flex items-center justify-center gap-3">
      <button type="button" className={`${controlClass} size-12 text-2xl`} aria-label="Seek backward 10 seconds" disabled={!canSeek} onClick={() => seek((media.current?.currentTime ?? 0) - 10)}><RemixIcon name="skip-back-fill" /></button>
      <button type="button" className={`${controlClass} size-20 text-[40px]`} aria-label={playing ? 'Pause video' : 'Play video'} disabled={!canPlay} onClick={() => void togglePlayback()}><RemixIcon name={playing ? 'pause-fill' : 'play-fill'} /></button>
      <button type="button" className={`${controlClass} size-12 text-2xl`} aria-label="Seek forward 10 seconds" disabled={!canSeek} onClick={() => seek((media.current?.currentTime ?? 0) + 10)}><RemixIcon name="skip-forward-fill" /></button>
    </div>
    <div className="absolute right-5 bottom-2 left-5">
      <p role="status" className="mb-1 text-center text-xs">{unavailable ? 'Video unavailable' : !ready ? 'Loading video…' : notice}</p>
      <p className="text-right text-[11px] tabular-nums">{formatTime(currentTime)} / {duration > 0 && !unavailable ? formatTime(duration) : '--:--'}</p>
      <input type="range" min="0" max={duration || 1} step="0.1" value={Math.min(currentTime, duration || 1)} disabled={!canSeek} aria-label="Video progress" aria-valuetext={`${formatTime(currentTime)} of ${duration ? formatTime(duration) : 'unknown duration'}`} onChange={event => seek(Number(event.target.value))}
        style={{ '--progress': `${duration ? Math.min(100, currentTime / duration * 100) : 0}%` } as CSSProperties}
        className="block h-8 w-full cursor-pointer appearance-none bg-transparent disabled:cursor-not-allowed [&::-webkit-slider-runnable-track]:h-0.5 [&::-webkit-slider-runnable-track]:bg-[linear-gradient(to_right,white_var(--progress),#ffffff66_var(--progress))] [&::-webkit-slider-thumb]:-mt-1 [&::-webkit-slider-thumb]:size-2.5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-moz-range-track]:h-0.5 [&::-moz-range-track]:bg-white/40 [&::-moz-range-progress]:bg-white [&::-moz-range-thumb]:size-2.5 [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white" />
    </div>
  </div>
}
