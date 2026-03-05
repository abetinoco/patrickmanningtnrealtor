import { useSearchParams, useNavigate } from 'react-router-dom'
import { useMemo, useEffect, useState } from 'react'
import { IDX_CONFIG } from '../data/idxConfig'
import styles from './SearchResults.module.css'

const STATE_LABELS: Record<string, string> = { TN: 'Tennessee', KY: 'Kentucky' }

/** Infer state from zip for correct MLS feed. TN: 37xxx,38xxx. KY: 40xxx,41xxx,42xxx */
function inferStateFromZip(zip: string): 'TN' | 'KY' | null {
    const digits = zip.trim().replace(/\D/g, '')
    if (digits.length < 2) return null
    const prefix = parseInt(digits.slice(0, 2), 10)
    if (prefix === 37 || prefix === 38) return 'TN'
    if (prefix >= 40 && prefix <= 42) return 'KY'
    return null
}

const SearchResults = () => {
    const [searchParams] = useSearchParams()
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()

    // Build IDX Broker results URL from query params
    const idxUrl = useMemo(() => {
        const baseUrl = `https://${IDX_CONFIG.subdomain}/idx/results/listings`
        const params = new URLSearchParams()

        // TN = default (RealTracs). KY = WKRMLS via idxID.
        // Use zip to infer state when it conflicts with Location dropdown.
        const urlState = searchParams.get('state')
        const zip = searchParams.get('zip')
        const inferredState = zip ? inferStateFromZip(zip) : null
        const effectiveState = inferredState ?? urlState ?? 'TN'
        if (effectiveState === 'KY') {
            params.set('idxID', IDX_CONFIG.wkrmlsIdxId)
            params.set('commingle', '')
        }

        const address = searchParams.get('address')
        if (address) params.set('address', address)
        if (zip) params.set('zip', zip)

        const minPrice = searchParams.get('lp')
        const maxPrice = searchParams.get('hp')
        const beds = searchParams.get('bd')
        const baths = searchParams.get('ba')

        if (minPrice) params.set('lp', minPrice)
        if (maxPrice) params.set('hp', maxPrice)
        if (beds) params.set('bd', beds)
        if (baths) params.set('tb', baths) // IDX uses "tb" for total baths minimum

        params.set('pt', '1') // residential

        const queryString = params.toString()
        return queryString ? `${baseUrl}?${queryString}` : baseUrl
    }, [searchParams])

    // Human-readable summary of applied filters
    const searchSummary = useMemo(() => {
        const parts: string[] = []
        const address = searchParams.get('address')
        const zip = searchParams.get('zip')
        const urlState = searchParams.get('state')
        const inferredState = zip ? inferStateFromZip(zip) : null
        const state = inferredState ?? urlState
        const minPrice = searchParams.get('lp')
        const maxPrice = searchParams.get('hp')
        const beds = searchParams.get('bd')
        const baths = searchParams.get('ba')

        if (address) parts.push(address)
        if (zip) parts.push(`Zip ${zip}`)
        if (state) parts.push(STATE_LABELS[state as string] ?? state)
        if (minPrice || maxPrice) {
            const min = minPrice ? `$${(parseInt(minPrice) / 1000)}K` : ''
            const max = maxPrice ? `$${(parseInt(maxPrice) / 1000)}K` : ''
            if (min && max) parts.push(`${min}–${max}`)
            else if (min) parts.push(`${min}+`)
            else parts.push(`Up to ${max}`)
        }
        if (beds) parts.push(`${beds}+ beds`)
        if (baths) parts.push(`${baths}+ baths`)

        return parts.length > 0 ? parts.join(' · ') : 'All Properties'
    }, [searchParams])

    // IDX iframe breaks with smooth-scroll enabled — disable it only on this route
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
                    <button
                        className={styles.backButton}
                        onClick={() => navigate('/buy')}
                        aria-label="Back to search"
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 12H5M12 5l-7 7 7 7" />
                        </svg>
                        <span>Refine Search</span>
                    </button>

                    <div className={styles.headerTitle}>
                        <h1 className={styles.title}>Search Results</h1>
                        <span className={styles.summary}>{searchSummary}</span>
                    </div>

                    <div className={styles.headerSpacer} />
                </div>
            </header>

            <div className={styles.resultsContainer}>
                {isLoading && (
                    <div className={styles.loadingOverlay}>
                        <div className={styles.spinner} />
                        <p className={styles.loadingText}>Loading listings…</p>
                    </div>
                )}
                <iframe
                    key={idxUrl}
                    src={idxUrl}
                    className={`${styles.resultsFrame} ${isLoading ? styles.resultsFrameHidden : ''}`}
                    title="Property Search Results"
                    onLoad={() => setIsLoading(false)}
                />
            </div>
        </div>
    )
}

export default SearchResults
