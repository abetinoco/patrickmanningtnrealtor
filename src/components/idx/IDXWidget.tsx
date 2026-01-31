import { useEffect, useRef } from 'react'
import { getWidgetScriptUrl, getWidgetScriptId } from '../../data/idxConfig'
import styles from './IDXWidget.module.css'

interface IDXWidgetProps {
  widgetId: string
  className?: string
}

// Track which widgets have been initialized to prevent duplicates
const initializedWidgets = new Set<string>()

/**
 * Base component for embedding IDX Broker widgets in React.
 * 
 * IDX Broker widgets work by injecting content via document.write() after the script tag.
 * This component handles the script loading in a way that works with React.
 */
export const IDXWidget = ({
  widgetId,
  className = '',
}: IDXWidgetProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const mountedRef = useRef(false)

  useEffect(() => {
    // Prevent double initialization in StrictMode
    if (mountedRef.current) return
    if (initializedWidgets.has(widgetId)) return
    
    const container = containerRef.current
    if (!container) return

    mountedRef.current = true
    initializedWidgets.add(widgetId)

    const scriptId = getWidgetScriptId(widgetId)
    const scriptUrl = getWidgetScriptUrl(widgetId)

    // Remove any existing script with this ID
    const existingScript = document.getElementById(scriptId)
    if (existingScript) {
      existingScript.remove()
    }

    // Create script element
    const script = document.createElement('script')
    script.id = scriptId
    script.src = scriptUrl
    script.type = 'text/javascript'
    script.charset = 'UTF-8'

    // Append script to container - IDX widgets inject content after the script
    container.appendChild(script)

    return () => {
      // Cleanup only on actual unmount, not StrictMode re-render
      // We keep the widget initialized to prevent duplicates
    }
  }, [widgetId])

  return (
    <div
      ref={containerRef}
      className={`${styles.widgetContainer} ${className}`}
    />
  )
}
