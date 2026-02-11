/**
 * Map display city names (from PropertySearchForm) to IDX Broker params.
 * IDX accepts:
 *   - a_cityName = city name (e.g. "Nashville") - used here
 *   - city[] = MLS city ID (numeric) - use if a_cityName doesn't filter correctly
 *
 * To get city[] IDs: IDX Control Panel → Saved Links, inspect a city search URL,
 * or Preferences → MLS Settings → Core Fields.
 */

/** Extract city name for a_cityName (IDX matches "Nashville" from "Nashville, TN") */
export function getCityNameForIdX(displayCity: string): string {
    if (!displayCity.trim()) return ''
    // "Franklin, TN" → "Franklin" (IDX a_cityName typically uses city only)
    const parts = displayCity.split(',')
    return parts[0]?.trim() || displayCity
}
