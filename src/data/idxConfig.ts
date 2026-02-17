/**
 * IDX Broker Widget Configuration
 * 
 * These widgets are configured in the IDX Broker control panel at:
 * https://patrickmanningrealtor.idxbroker.com
 * 
 * API Key: RedJwFThH8eZLsSUzLg5QY (Core Plan - 300 requests/hour)
 */

export const IDX_CONFIG = {
  subdomain: 'patrickmanningrealtor.idxbroker.com',
  apiKey: 'RedJwFThH8eZLsSUzLg5QY',
  
  /** idxID for Western Kentucky Regional MLS (no-commingle; use idxID+commingle for KY searches) */
  wkrmlsIdxId: 'a463',

  widgets: {
    featuredShowcase: {
      id: '137093',
      name: 'Featured Showcase',
      description: 'Displays featured MLS listings with property details',
    },
    basicSearch: {
      id: '139650',
      name: 'Basic Search Widget',
      description: 'Property search form for MLS listings',
    },
    soldListings: {
      id: '137092',
      name: 'Sold Listings',
      description: 'Displays recently sold properties',
    },
  },
} as const

/**
 * Generate the widget script URL
 * @param widgetId - IDX widget ID
 * @param params - optional query params (e.g. { idxID: 'a463', commingle: '' } for WKRMLS/KY)
 */
export const getWidgetScriptUrl = (widgetId: string, params?: Record<string, string>): string => {
  const base = `https://patrickmanningrealtor.idxbroker.com/idx/widgets/${widgetId}`
  if (!params || Object.keys(params).length === 0) return base
  const search = new URLSearchParams(params).toString()
  return `${base}?${search}`
}

/**
 * Generate the widget script ID
 */
export const getWidgetScriptId = (widgetId: string): string => {
  return `idxwidgetsrc-${widgetId}`
}

export type WidgetType = keyof typeof IDX_CONFIG.widgets
