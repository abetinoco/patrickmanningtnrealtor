import { useEffect, useRef } from 'react'
import styles from './ChimeWidget.module.css'

interface ChimeWidgetProps {
  widgetUrl: string
  className?: string
  title?: string
}

// Renders Lofty/Chime IDX widgets and keeps iframe height in sync with their postMessage events.
export const ChimeWidget = ({ widgetUrl, className, title }: ChimeWidgetProps) => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null)

  useEffect(() => {
    const handler = (event: MessageEvent) => {
      if (!iframeRef.current) return

      try {
        const payload = typeof event.data === 'string' ? JSON.parse(event.data) : event.data
        if (payload?.from === 'chimeSite' && payload?.event === 'updateBodyRect') {
          const height = payload?.data?.height ?? payload?.height
          if (typeof height === 'number') {
            iframeRef.current.style.height = `${height}px`
          }
        }
      } catch {
        // Ignore messages that are not JSON or not from Chime.
      }
    }

    window.addEventListener('message', handler)
    return () => window.removeEventListener('message', handler)
  }, [])

  return (
    <div className={`${styles.wrapper} ${className ?? ''}`.trim()}>
      <iframe
        ref={iframeRef}
        src={widgetUrl}
        title={title ?? 'MLS widget'}
        className={styles.frame}
        allow="clipboard-write"
        loading="lazy"
      />
    </div>
  )
}
