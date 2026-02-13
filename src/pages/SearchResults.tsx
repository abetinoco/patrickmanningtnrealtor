import { useSearchParams } from 'react-router-dom'
import { useMemo, useEffect } from 'react'
import { IDX_CONFIG } from '../data/idxConfig'
import { getCityNameForIdX } from '../data/idxCityMap'
import styles from './SearchResults.module.css'

const SearchResults = () => {
    const [searchParams] = useSearchParams()

    // Build IDX Broker results URL from query params
    const idxUrl = useMemo(() => {
        const baseUrl = `https://${IDX_CONFIG.subdomain}/idx/results/listings`
        const params = new URLSearchParams()

        // Location: pass city name for IDX a_cityName
        const city = searchParams.get('city')
        if (city) {
            const cityName = getCityNameForIdX(city)
            if (cityName) params.set('a_cityName', cityName)
        }

        // Numeric filters - IDX shortcodes: lp, hp, bd, tb
        const minPrice = searchParams.get('lp')
        const maxPrice = searchParams.get('hp')
        const beds = searchParams.get('bd')
        const baths = searchParams.get('ba')

        if (minPrice) params.set('lp', minPrice)
        if (maxPrice) params.set('hp', maxPrice)
        if (beds) params.set('bd', beds)
        if (baths) params.set('tb', baths) // IDX uses "tb" for minimum total bathrooms

        // Default to residential property type
        params.set('pt', '1')

        const queryString = params.toString()
        return queryString ? `${baseUrl}?${queryString}` : baseUrl
    }, [searchParams])

    // Get readable search summary
    const searchSummary = useMemo(() => {
        const parts: string[] = []
        const city = searchParams.get('city')
        const minPrice = searchParams.get('lp')
        const maxPrice = searchParams.get('hp')
        const beds = searchParams.get('bd')
        const baths = searchParams.get('ba')

        if (city) parts.push(city)
        if (minPrice || maxPrice) {
            const min = minPrice ? `$${(parseInt(minPrice) / 1000)}K` : ''
            const max = maxPrice ? `$${(parseInt(maxPrice) / 1000)}K` : ''
            if (min && max) parts.push(`${min} - ${max}`)
            else if (min) parts.push(`${min}+`)
            else if (max) parts.push(`Up to ${max}`)
        }
        if (beds) parts.push(`${beds}+ beds`)
        if (baths) parts.push(`${baths}+ baths`)

        return parts.length > 0 ? parts.join(' • ') : 'All Properties'
    }, [searchParams])

    /* IDX forum #1646: smooth scrolling in theme breaks clicks/scrolling – disable on this page */
    useEffect(() => {
        const html = document.documentElement
        const prev = html.style.scrollBehavior
        html.style.scrollBehavior = 'auto'
        return () => { html.style.scrollBehavior = prev }
    }, [])

    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <div className={styles.headerContent}>
                    <div className={styles.headerTitle}>
                        <h1 className={styles.title}>Search Results</h1>
                        <span className={styles.summary}>{searchSummary}</span>
                    </div>
                </div>
            </header>

            <main className={styles.resultsContainer}>
                {/* No sandbox: IDX pagination and map require full iframe capabilities.
                    Sandbox was blocking clicks/navigation in some environments. */}
                <iframe
                    key={idxUrl}
                    src={idxUrl}
                    className={styles.resultsFrame}
                    title="Property Search Results"
                />
            </main>
        </div>
    )
}

export default SearchResults
