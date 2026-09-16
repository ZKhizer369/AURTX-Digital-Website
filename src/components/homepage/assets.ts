const images = import.meta.glob<string>('../../assets/homepage/images/*', { eager: true, query: '?url', import: 'default' })
const videos = import.meta.glob<string>('../../assets/homepage/videos/*.mp4', { eager: true, query: '?url', import: 'default' })
const icons = import.meta.glob<string>('../../assets/homepage/icons/*', { eager: true, query: '?url', import: 'default' })
export const picture = (name: string) => images[`../../assets/homepage/images/${name}`]
export const icon = (name: string) => icons[`../../assets/homepage/icons/${name}.svg`]
export const video = (index: number) => videos['../../assets/homepage/videos/preview-' + index + '.mp4']
