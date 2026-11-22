import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import styles from './style.module.css'

export default function GalleryHome() {
  // Get all event folders from /public/gallery
  const galleryPath = path.join(process.cwd(), 'public', 'gallery')
  let events = []
  try {
    events = fs.readdirSync(galleryPath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name)
  } catch (err) {
    console.error(err)
  }

  return (
    <div className={styles.gallery}>
      <h1>Gallery</h1>

      <div className={styles.folders}>
        {events.map((event) => (
          <Link key={event} href={`/gallery/${event}`} className={styles.folder}>
            📁 {event.toUpperCase()}
          </Link>
        ))}
      </div>
    </div>
  )
}
