import { useMemo } from 'react'
import { getWidgetScriptUrl } from '../../data/idxConfig'
import styles from './IDXWidget.module.css'

interface IDXWidgetProps {
  widgetId: string
  /** Optional URL params (e.g. idxID for KY/WKRMLS feed) */
  queryParams?: Record<string, string>
  className?: string
  minHeight?: string
}

/**
 * Base component for embedding IDX Broker widgets in React.
 * Uses an iframe to properly load IDX scripts that rely on document.currentScript.
 */
export const IDXWidget = ({
  widgetId,
  queryParams,
  className = '',
  minHeight = '400px',
}: IDXWidgetProps) => {
  const scriptUrl = getWidgetScriptUrl(widgetId, queryParams)
  const scriptId = `idxwidgetsrc-${widgetId}${queryParams?.idxID ? '-ky' : ''}`
  
  // Create iframe srcdoc with the widget script
  const iframeSrc = useMemo(() => {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <base target="_parent">
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            html, body { 
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              overflow: hidden;
              width: 100%;
            }
            /* Make IDX widget responsive */
            form, div, table, input, select, button {
              max-width: 100% !important;
              box-sizing: border-box !important;
            }
            input[type="text"], input[type="search"], select {
              width: 100% !important;
              max-width: 100% !important;
            }
            table {
              width: 100% !important;
              table-layout: fixed !important;
            }
            td, th {
              word-wrap: break-word !important;
            }
          </style>
        </head>
        <body>
          <script charset="UTF-8" type="text/javascript" id="${scriptId}" src="${scriptUrl}"></script>
        </body>
      </html>
    `
  }, [widgetId, scriptUrl, scriptId])

  return (
    <iframe
      srcDoc={iframeSrc}
      className={`${styles.widgetContainer} ${className}`}
      style={{ 
        border: 'none', 
        width: '100%',
        minHeight,
        overflow: 'hidden',
      }}
      scrolling="no"
      sandbox="allow-scripts allow-forms allow-same-origin allow-popups allow-top-navigation"
      title={`IDX Widget ${widgetId}`}
    />
  )
}
