import fs from 'fs'
import path from 'path'
import Image from 'next/legacy/image'
import styles from '../../style.module.css'

export default function EventGallery({ params }) {
  const { event } = params

  const folderPath = path.join(process.cwd(), 'public', 'gallery', event)
  let images = []

  try {
    images = fs.readdirSync(folderPath).filter(f => /\.(jpg|jpeg|png|webp|gif)$/i.test(f))
  } catch (err) {
    console.error('Error reading folder:', err)
  }

  if (images.length === 0) return <div className={styles.gallery}><h1>No images found for {event}</h1></div>

  return (
    
    <div className={styles.gallery}>
      <h1>{event.toUpperCase()}</h1>

      <div className={styles.pics}>
        {images.map((img, idx) => (
          <div className={styles.sectionSmall} key={idx}>
            <Image src={`/gallery/${event}/${img}`} alt={img} layout="fill" />
          </div>
          
        ))}
      </div>
    </div>
  )
}
