import { useState } from 'react'
import styles from './HomeValuationTool.module.css'

type Step = 'property' | 'details' | 'contact' | 'result'

interface PropertyData {
    address: string
    propertyType: string
    bedrooms: string
    bathrooms: string
    squareFeet: string
    yearBuilt: string
    condition: string
    recentUpdates: string[]
}

interface ContactData {
    name: string
    email: string
    phone: string
}

const PROPERTY_TYPES = [
    'Single Family Home',
    'Townhouse',
    'Condo',
    'Multi-Family (2-4 units)',
    'Land/Lot',
]

const CONDITIONS = [
    'Excellent - Move-in ready, updated',
    'Good - Well maintained, minor updates needed',
    'Fair - Some repairs or updates needed',
    'Needs Work - Significant updates required',
]

const UPDATES = [
    'Kitchen remodel (last 5 years)',
    'Bathroom remodel (last 5 years)',
    'New roof (last 10 years)',
    'New HVAC (last 5 years)',
    'New windows',
    'Hardwood floors',
    'Finished basement',
    'Pool/outdoor living',
]

// Simple valuation estimate based on Middle TN market
const estimateValue = (data: PropertyData): { low: number; mid: number; high: number } => {
    const sqft = parseInt(data.squareFeet) || 2000
    const beds = parseInt(data.bedrooms) || 3
    const yearBuilt = parseInt(data.yearBuilt) || 2000

    // Base price per sqft (varies by area, using Nashville metro average)
    let basePricePerSqft = 280

    // Adjust for property type
    if (data.propertyType === 'Condo') basePricePerSqft *= 0.85
    if (data.propertyType === 'Townhouse') basePricePerSqft *= 0.9
    if (data.propertyType === 'Multi-Family (2-4 units)') basePricePerSqft *= 1.1

    // Adjust for condition
    if (data.condition.includes('Excellent')) basePricePerSqft *= 1.15
    if (data.condition.includes('Good')) basePricePerSqft *= 1.0
    if (data.condition.includes('Fair')) basePricePerSqft *= 0.9
    if (data.condition.includes('Needs Work')) basePricePerSqft *= 0.75

    // Adjust for age
    const age = new Date().getFullYear() - yearBuilt
    if (age < 5) basePricePerSqft *= 1.1
    else if (age > 50) basePricePerSqft *= 0.85

    // Adjust for updates
    const updateBonus = data.recentUpdates.length * 0.02
    basePricePerSqft *= (1 + updateBonus)

    // Bedroom adjustment
    if (beds >= 4) basePricePerSqft *= 1.05

    const baseValue = sqft * basePricePerSqft

    return {
        low: Math.round(baseValue * 0.9 / 1000) * 1000,
        mid: Math.round(baseValue / 1000) * 1000,
        high: Math.round(baseValue * 1.1 / 1000) * 1000,
    }
}

const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
    }).format(value)
}

export const HomeValuationTool = () => {
    const [step, setStep] = useState<Step>('property')
    const [propertyData, setPropertyData] = useState<PropertyData>({
        address: '',
        propertyType: '',
        bedrooms: '',
        bathrooms: '',
        squareFeet: '',
        yearBuilt: '',
        condition: '',
        recentUpdates: [],
    })
    const [contactData, setContactData] = useState<ContactData>({
        name: '',
        email: '',
        phone: '',
    })
    const [estimate, setEstimate] = useState<{ low: number; mid: number; high: number } | null>(null)

    const handlePropertyChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setPropertyData(prev => ({ ...prev, [name]: value }))
    }

    const handleUpdateToggle = (update: string) => {
        setPropertyData(prev => ({
            ...prev,
            recentUpdates: prev.recentUpdates.includes(update)
                ? prev.recentUpdates.filter(u => u !== update)
                : [...prev.recentUpdates, update]
        }))
    }

    const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setContactData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const result = estimateValue(propertyData)
        setEstimate(result)
        setStep('result')
    }

    const stepNumber = step === 'property' ? 1 : step === 'details' ? 2 : step === 'contact' ? 3 : 4

    return (
        <section id="home-valuation" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className="section-subtitle">Free Estimate</span>
                    <h2 className="section-title">What's Your Home Worth?</h2>
                    <p className={styles.intro}>
                        Get an instant estimate based on current Middle Tennessee market data. For a detailed CMA, Patrick will follow up personally.
                    </p>
                </div>

                {step !== 'result' && (
                    <div className={styles.stepIndicator}>
                        <div className={`${styles.stepDot} ${stepNumber >= 1 ? styles.active : ''}`}>1</div>
                        <div className={styles.stepLine} />
                        <div className={`${styles.stepDot} ${stepNumber >= 2 ? styles.active : ''}`}>2</div>
                        <div className={styles.stepLine} />
                        <div className={`${styles.stepDot} ${stepNumber >= 3 ? styles.active : ''}`}>3</div>
                    </div>
                )}

                <form className={styles.form} onSubmit={handleSubmit}>
                    {step === 'property' && (
                        <div className={styles.stepContent}>
                            <h3 className={styles.stepTitle}>Property Information</h3>
                            <div className={styles.formGrid}>
                                <div className={styles.fieldGroup} style={{ gridColumn: '1 / -1' }}>
                                    <label htmlFor="address" className={styles.label}>Property Address</label>
                                    <input
                                        type="text"
                                        id="address"
                                        name="address"
                                        value={propertyData.address}
                                        onChange={handlePropertyChange}
                                        placeholder="123 Main St, Nashville, TN"
                                        className={styles.input}
                                        required
                                    />
                                </div>
                                <div className={styles.fieldGroup}>
                                    <label htmlFor="propertyType" className={styles.label}>Property Type</label>
                                    <select
                                        id="propertyType"
                                        name="propertyType"
                                        value={propertyData.propertyType}
                                        onChange={handlePropertyChange}
                                        className={styles.select}
                                        required
                                    >
                                        <option value="">Select type</option>
                                        {PROPERTY_TYPES.map(type => (
                                            <option key={type} value={type}>{type}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className={styles.fieldGroup}>
                                    <label htmlFor="bedrooms" className={styles.label}>Bedrooms</label>
                                    <select
                                        id="bedrooms"
                                        name="bedrooms"
                                        value={propertyData.bedrooms}
                                        onChange={handlePropertyChange}
                                        className={styles.select}
                                        required
                                    >
                                        <option value="">Select</option>
                                        {['1', '2', '3', '4', '5', '6+'].map(n => (
                                            <option key={n} value={n}>{n}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className={styles.fieldGroup}>
                                    <label htmlFor="bathrooms" className={styles.label}>Bathrooms</label>
                                    <select
                                        id="bathrooms"
                                        name="bathrooms"
                                        value={propertyData.bathrooms}
                                        onChange={handlePropertyChange}
                                        className={styles.select}
                                        required
                                    >
                                        <option value="">Select</option>
                                        {['1', '1.5', '2', '2.5', '3', '3.5', '4+'].map(n => (
                                            <option key={n} value={n}>{n}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <button
                                type="button"
                                className={styles.nextButton}
                                onClick={() => setStep('details')}
                                disabled={!propertyData.address || !propertyData.propertyType}
                            >
                                Next: Property Details
                            </button>
                        </div>
                    )}

                    {step === 'details' && (
                        <div className={styles.stepContent}>
                            <h3 className={styles.stepTitle}>Property Details</h3>
                            <div className={styles.formGrid}>
                                <div className={styles.fieldGroup}>
                                    <label htmlFor="squareFeet" className={styles.label}>Square Feet</label>
                                    <input
                                        type="number"
                                        id="squareFeet"
                                        name="squareFeet"
                                        value={propertyData.squareFeet}
                                        onChange={handlePropertyChange}
                                        placeholder="2,000"
                                        className={styles.input}
                                        required
                                    />
                                </div>
                                <div className={styles.fieldGroup}>
                                    <label htmlFor="yearBuilt" className={styles.label}>Year Built</label>
                                    <input
                                        type="number"
                                        id="yearBuilt"
                                        name="yearBuilt"
                                        value={propertyData.yearBuilt}
                                        onChange={handlePropertyChange}
                                        placeholder="2005"
                                        className={styles.input}
                                        required
                                    />
                                </div>
                                <div className={styles.fieldGroup} style={{ gridColumn: '1 / -1' }}>
                                    <label htmlFor="condition" className={styles.label}>Overall Condition</label>
                                    <select
                                        id="condition"
                                        name="condition"
                                        value={propertyData.condition}
                                        onChange={handlePropertyChange}
                                        className={styles.select}
                                        required
                                    >
                                        <option value="">Select condition</option>
                                        {CONDITIONS.map(c => (
                                            <option key={c} value={c}>{c}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className={styles.fieldGroup}>
                                <label className={styles.label}>Recent Updates (select all that apply)</label>
                                <div className={styles.checkboxGrid}>
                                    {UPDATES.map(update => (
                                        <button
                                            key={update}
                                            type="button"
                                            className={`${styles.updateButton} ${propertyData.recentUpdates.includes(update) ? styles.updateButtonActive : ''}`}
                                            onClick={() => handleUpdateToggle(update)}
                                        >
                                            {update}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className={styles.buttonRow}>
                                <button type="button" className={styles.backButton} onClick={() => setStep('property')}>
                                    Back
                                </button>
                                <button
                                    type="button"
                                    className={styles.nextButton}
                                    onClick={() => setStep('contact')}
                                    disabled={!propertyData.squareFeet || !propertyData.condition}
                                >
                                    Next: Get Estimate
                                </button>
                            </div>
                        </div>
                    )}

                    {step === 'contact' && (
                        <div className={styles.stepContent}>
                            <h3 className={styles.stepTitle}>Get Your Estimate</h3>
                            <p className={styles.stepSubtitle}>Enter your info to see your home's estimated value</p>
                            <div className={styles.formGrid}>
                                <div className={styles.fieldGroup}>
                                    <label htmlFor="name" className={styles.label}>Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={contactData.name}
                                        onChange={handleContactChange}
                                        placeholder="Your name"
                                        className={styles.input}
                                        required
                                    />
                                </div>
                                <div className={styles.fieldGroup}>
                                    <label htmlFor="email" className={styles.label}>Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={contactData.email}
                                        onChange={handleContactChange}
                                        placeholder="you@example.com"
                                        className={styles.input}
                                        required
                                    />
                                </div>
                                <div className={styles.fieldGroup} style={{ gridColumn: '1 / -1' }}>
                                    <label htmlFor="phone" className={styles.label}>Phone (optional)</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={contactData.phone}
                                        onChange={handleContactChange}
                                        placeholder="(555) 555-5555"
                                        className={styles.input}
                                    />
                                </div>
                            </div>
                            <div className={styles.buttonRow}>
                                <button type="button" className={styles.backButton} onClick={() => setStep('details')}>
                                    Back
                                </button>
                                <button
                                    type="submit"
                                    className={styles.submitButton}
                                    disabled={!contactData.name || !contactData.email}
                                >
                                    See My Estimate
                                </button>
                            </div>
                        </div>
                    )}

                    {step === 'result' && estimate && (
                        <div className={styles.resultContent}>
                            <div className={styles.resultCard}>
                                <h3 className={styles.resultTitle}>Your Estimated Home Value</h3>
                                <div className={styles.estimateRange}>
                                    <div className={styles.rangeValue}>
                                        <span className={styles.rangeLabel}>Low</span>
                                        <span className={styles.rangeAmount}>{formatCurrency(estimate.low)}</span>
                                    </div>
                                    <div className={styles.rangePrimary}>
                                        <span className={styles.rangeLabel}>Estimate</span>
                                        <span className={styles.rangeAmountPrimary}>{formatCurrency(estimate.mid)}</span>
                                    </div>
                                    <div className={styles.rangeValue}>
                                        <span className={styles.rangeLabel}>High</span>
                                        <span className={styles.rangeAmount}>{formatCurrency(estimate.high)}</span>
                                    </div>
                                </div>
                                <p className={styles.disclaimer}>
                                    This is an automated estimate based on general market data. For an accurate valuation, Patrick will prepare a detailed Comparative Market Analysis (CMA) specific to your property and neighborhood.
                                </p>
                                <div className={styles.resultActions}>
                                    <a href="/contact" className={styles.ctaButton}>Request Detailed CMA</a>
                                    <button type="button" className={styles.resetButton} onClick={() => {
                                        setStep('property')
                                        setEstimate(null)
                                    }}>
                                        Start Over
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </form>
            </div>
        </section>
    )
}
