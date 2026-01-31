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
  
  widgets: {
    featuredShowcase: {
      id: '137091',
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
 */
export const getWidgetScriptUrl = (widgetId: string): string => {
  return `https://patrickmanningrealtor.idxbroker.com/idx/widgets/${widgetId}`
}

/**
 * Generate the widget script ID
 */
export const getWidgetScriptId = (widgetId: string): string => {
  return `idxwidgetsrc-${widgetId}`
}

export type WidgetType = keyof typeof IDX_CONFIG.widgets
