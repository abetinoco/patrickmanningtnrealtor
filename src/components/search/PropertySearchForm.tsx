import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { neighborhoods } from '../../data/neighborhoods'
import styles from './PropertySearchForm.module.css'

interface PropertySearchFormProps {
    variant?: 'hero' | 'page' | 'compact'
}

// Common cities from neighborhoods data plus individual cities
const CITIES = [
    // Major areas from neighborhoods
    'Franklin, TN',
    'Brentwood, TN',
    'Spring Hill, TN',
    'Columbia, TN',
    'Nashville, TN',
    'Bowling Green, KY',
    // Additional popular cities
    'Thompson\'s Station, TN',
    'Nolensville, TN',
    'Arrington, TN',
    'Belle Meade, TN',
    'Green Hills, TN',
    'Franklin, KY',
]

const PRICE_OPTIONS = [
    { label: 'No Min', value: '' },
    { label: '$200K', value: '200000' },
    { label: '$300K', value: '300000' },
    { label: '$400K', value: '400000' },
    { label: '$500K', value: '500000' },
    { label: '$600K', value: '600000' },
    { label: '$750K', value: '750000' },
    { label: '$1M', value: '1000000' },
    { label: '$1.5M', value: '1500000' },
    { label: '$2M', value: '2000000' },
    { label: '$3M+', value: '3000000' },
]

const BED_OPTIONS = [
    { label: 'Any', value: '' },
    { label: '1+', value: '1' },
    { label: '2+', value: '2' },
    { label: '3+', value: '3' },
    { label: '4+', value: '4' },
    { label: '5+', value: '5' },
]

const BATH_OPTIONS = [
    { label: 'Any', value: '' },
    { label: '1+', value: '1' },
    { label: '2+', value: '2' },
    { label: '3+', value: '3' },
    { label: '4+', value: '4' },
]

export const PropertySearchForm = ({ variant = 'hero' }: PropertySearchFormProps) => {
    const navigate = useNavigate()
    const [city, setCity] = useState('')
    const [minPrice, setMinPrice] = useState('')
    const [maxPrice, setMaxPrice] = useState('')
    const [beds, setBeds] = useState('')
    const [baths, setBaths] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        // Build query params for the search results page
        const params = new URLSearchParams()
        if (city) params.set('city', city)
        if (minPrice) params.set('lp', minPrice)
        if (maxPrice) params.set('hp', maxPrice)
        if (beds) params.set('bd', beds)
        if (baths) params.set('ba', baths)

        navigate(`/search-results?${params.toString()}`)
    }

    const containerClass = variant === 'compact'
        ? styles.containerCompact
        : variant === 'page'
            ? styles.containerPage
            : styles.container

    return (
        <form className={containerClass} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="search-city">Location</label>
                <select
                    id="search-city"
                    className={styles.select}
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                >
                    <option value="">All Areas</option>
                    {CITIES.map((c) => (
                        <option key={c} value={c}>{c}</option>
                    ))}
                </select>
            </div>

            <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="search-min-price">Min Price</label>
                <select
                    id="search-min-price"
                    className={styles.select}
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                >
                    {PRICE_OPTIONS.slice(0, -1).map((p) => (
                        <option key={`min-${p.value}`} value={p.value}>{p.label}</option>
                    ))}
                </select>
            </div>

            <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="search-max-price">Max Price</label>
                <select
                    id="search-max-price"
                    className={styles.select}
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                >
                    <option value="">No Max</option>
                    {PRICE_OPTIONS.slice(1).map((p) => (
                        <option key={`max-${p.value}`} value={p.value}>{p.label}</option>
                    ))}
                </select>
            </div>

            <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="search-beds">Beds</label>
                <select
                    id="search-beds"
                    className={styles.select}
                    value={beds}
                    onChange={(e) => setBeds(e.target.value)}
                >
                    {BED_OPTIONS.map((b) => (
                        <option key={`bed-${b.value}`} value={b.value}>{b.label}</option>
                    ))}
                </select>
            </div>

            <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="search-baths">Baths</label>
                <select
                    id="search-baths"
                    className={styles.select}
                    value={baths}
                    onChange={(e) => setBaths(e.target.value)}
                >
                    {BATH_OPTIONS.map((b) => (
                        <option key={`bath-${b.value}`} value={b.value}>{b.label}</option>
                    ))}
                </select>
            </div>

            <button type="submit" className={styles.searchButton}>
                <svg
                    className={styles.searchIcon}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                </svg>
                <span className={styles.searchText}>Search</span>
            </button>
        </form>
    )
}
