import { useState } from 'react'
import styles from './BuyerQuestionnaireForm.module.css'

// Google Form submission URL (formResponse endpoint)
const GOOGLE_FORM_ACTION = 'https://docs.google.com/forms/d/e/1FAIpQLSfo5CToatY-U8AViEnhNETb1wlZxy6W46xOtlg8anCGY-8RxA/formResponse'

// All entry IDs from the actual Google Form
const ENTRIES = {
    name: 'entry.972020306',
    email: 'emailAddress',
    address: 'entry.1484964692',
    phone: 'entry.1517208721',
    contactMethod: 'entry.692296290',
    coPurchaser: 'entry.1183684062',
    availability: 'entry.1478376309',
    purchaseType: 'entry.64024739',
    desiredLocation: 'entry.1627683891',
    schoolDistrict: 'entry.365283241',
    budget: 'entry.2084878076',
    purchaseMethod: 'entry.1675750926',
    preApproved: 'entry.1035573989',
    loanOfficer: 'entry.1946155191',
    timeline: 'entry.1087343112',
    urgency: 'entry.2139428487',
    mustHaves: 'entry.272534971',
    doNotWant: 'entry.358084063',
    homeStyles: 'entry.1124677771',
    topHomeStyle: 'entry.1658604896',
    additionalInfo: 'entry.1649264200',
}

interface FormData {
    name: string
    email: string
    address: string
    phone: string
    contactMethod: string
    coPurchaser: string
    availability: string[]
    purchaseType: string
    desiredLocation: string[]
    schoolDistrict: string
    budget: string
    purchaseMethod: string
    preApproved: string
    loanOfficer: string
    timeline: string
    urgency: string
    mustHaves: string
    doNotWant: string
    homeStyles: string[]
    topHomeStyle: string
    additionalInfo: string
}

const CONTACT_METHODS = [
    'Text',
    'Phone Call',
    'Email',
]

const AVAILABILITY_OPTIONS = [
    'Weekday Mornings',
    'Weekday Afternoons',
    'Weekday Evenings',
    'Weekends',
    'Flexible',
]

const PURCHASE_TYPES = [
    'Primary Residence',
    'Investment Property',
    'Vacation Home',
    'Second Home',
]

const LOCATIONS = [
    { id: 'williamson', label: 'Williamson County' },
    { id: 'maury', label: 'Maury County' },
    { id: 'rutherford', label: 'Rutherford County' },
    { id: 'davidson', label: 'Davidson County (Nashville)' },
    { id: 'sumner', label: 'Sumner County' },
    { id: 'wilson', label: 'Wilson County' },
]

const BUDGETS = [
    'Under $300K',
    '$300K - $400K',
    '$400K - $500K',
    '$500K - $600K',
    '$600K - $800K',
    '$800K - $1M',
    '$1M - $1.5M',
    '$1.5M+',
]

const PURCHASE_METHODS = [
    'Cash',
    'Conventional Loan',
    'FHA Loan',
    'VA Loan',
    'USDA Loan',
    'Other',
]

const TIMELINES = [
    'ASAP',
    'In 1-3 Months',
    'In 3-6 Months',
    'In 6-12 Months',
    'Just browsing for now',
]

const HOME_STYLES = [
    { id: 'ranch', label: 'Ranch/Single Story' },
    { id: 'twostory', label: 'Two Story' },
    { id: 'colonial', label: 'Colonial' },
    { id: 'craftsman', label: 'Craftsman' },
    { id: 'modern', label: 'Modern/Contemporary' },
    { id: 'farmhouse', label: 'Farmhouse' },
    { id: 'townhouse', label: 'Townhouse' },
    { id: 'condo', label: 'Condo' },
]

export const BuyerQuestionnaireForm = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        address: '',
        phone: '',
        contactMethod: '',
        coPurchaser: '',
        availability: [],
        purchaseType: '',
        desiredLocation: [],
        schoolDistrict: '',
        budget: '',
        purchaseMethod: '',
        preApproved: '',
        loanOfficer: '',
        timeline: '',
        urgency: '5',
        mustHaves: '',
        doNotWant: '',
        homeStyles: [],
        topHomeStyle: '',
        additionalInfo: '',
    })
    const [submitted, setSubmitted] = useState(false)
    const [expandedSections, setExpandedSections] = useState({
        contact: true,
        preferences: false,
        financing: false,
        features: false,
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleMultiSelect = (field: keyof FormData, value: string) => {
        setFormData(prev => {
            const current = prev[field] as string[]
            return {
                ...prev,
                [field]: current.includes(value)
                    ? current.filter(v => v !== value)
                    : [...current, value]
            }
        })
    }

    const toggleSection = (section: keyof typeof expandedSections) => {
        setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        // Submit to hidden iframe
        const form = document.getElementById('google-form-buyer') as HTMLFormElement
        if (form) {
            form.submit()
        }

        // Show success state
        setSubmitted(true)
    }

    if (submitted) {
        return (
            <section id="buyer-questionnaire" className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.successMessage}>
                        <div className={styles.successIcon}>✓</div>
                        <h2 className="section-title">Thank You!</h2>
                        <p>Your buyer questionnaire has been submitted successfully. Patrick will review your preferences and reach out within 24 hours to discuss your home search.</p>
                        <button
                            className={styles.resetButton}
                            onClick={() => setSubmitted(false)}
                        >
                            Submit Another Response
                        </button>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section id="buyer-questionnaire" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className="section-subtitle">Buyer Questionnaire</span>
                    <h2 className="section-title">Tell Us About Your Home Search</h2>
                    <p className={styles.intro}>
                        Complete this questionnaire and Patrick will prepare personalized recommendations for your home search.
                    </p>
                </div>

                {/* Hidden iframe for form submission */}
                <iframe name="hidden_iframe_buyer" id="hidden_iframe_buyer" style={{ display: 'none' }} />

                {/* Hidden Google Form */}
                <form
                    id="google-form-buyer"
                    action={GOOGLE_FORM_ACTION}
                    method="POST"
                    target="hidden_iframe_buyer"
                    style={{ display: 'none' }}
                >
                    <input type="hidden" name={ENTRIES.name} value={formData.name} />
                    <input type="hidden" name={ENTRIES.email} value={formData.email} />
                    <input type="hidden" name={ENTRIES.address} value={formData.address} />
                    <input type="hidden" name={ENTRIES.phone} value={formData.phone} />
                    <input type="hidden" name={ENTRIES.contactMethod} value={formData.contactMethod} />
                    <input type="hidden" name={ENTRIES.coPurchaser} value={formData.coPurchaser} />
                    <input type="hidden" name={ENTRIES.availability} value={formData.availability.join(', ')} />
                    <input type="hidden" name={ENTRIES.purchaseType} value={formData.purchaseType} />
                    <input type="hidden" name={ENTRIES.desiredLocation} value={formData.desiredLocation.map(id => LOCATIONS.find(l => l.id === id)?.label || id).join(', ')} />
                    <input type="hidden" name={ENTRIES.schoolDistrict} value={formData.schoolDistrict} />
                    <input type="hidden" name={ENTRIES.budget} value={formData.budget} />
                    <input type="hidden" name={ENTRIES.purchaseMethod} value={formData.purchaseMethod} />
                    <input type="hidden" name={ENTRIES.preApproved} value={formData.preApproved} />
                    <input type="hidden" name={ENTRIES.loanOfficer} value={formData.loanOfficer} />
                    <input type="hidden" name={ENTRIES.timeline} value={formData.timeline} />
                    <input type="hidden" name={ENTRIES.urgency} value={formData.urgency} />
                    <input type="hidden" name={ENTRIES.mustHaves} value={formData.mustHaves} />
                    <input type="hidden" name={ENTRIES.doNotWant} value={formData.doNotWant} />
                    <input type="hidden" name={ENTRIES.homeStyles} value={formData.homeStyles.map(id => HOME_STYLES.find(s => s.id === id)?.label || id).join(', ')} />
                    <input type="hidden" name={ENTRIES.topHomeStyle} value={formData.topHomeStyle} />
                    <input type="hidden" name={ENTRIES.additionalInfo} value={formData.additionalInfo} />
                </form>

                {/* Visible Form */}
                <form className={styles.form} onSubmit={handleSubmit}>

                    {/* Section 1: Contact Information */}
                    <div className={styles.formSection}>
                        <button
                            type="button"
                            className={`${styles.sectionHeader} ${expandedSections.contact ? styles.expanded : ''}`}
                            onClick={() => toggleSection('contact')}
                        >
                            <span className={styles.sectionNumber}>1</span>
                            <span className={styles.sectionTitle}>Contact Information</span>
                            <span className={styles.chevron}>▾</span>
                        </button>

                        {expandedSections.contact && (
                            <div className={styles.sectionContent}>
                                <div className={styles.formGrid}>
                                    <div className={styles.fieldGroup}>
                                        <label htmlFor="name" className={styles.label}>Full Legal Name *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className={styles.input}
                                            required
                                        />
                                    </div>

                                    <div className={styles.fieldGroup}>
                                        <label htmlFor="email" className={styles.label}>Email *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className={styles.input}
                                            required
                                        />
                                    </div>

                                    <div className={styles.fieldGroup}>
                                        <label htmlFor="phone" className={styles.label}>Phone Number *</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className={styles.input}
                                            required
                                        />
                                    </div>

                                    <div className={styles.fieldGroup}>
                                        <label htmlFor="address" className={styles.label}>Current Address</label>
                                        <input
                                            type="text"
                                            id="address"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleInputChange}
                                            placeholder="City, State"
                                            className={styles.input}
                                        />
                                    </div>
                                </div>

                                <div className={styles.formRow}>
                                    <div className={styles.fieldGroup}>
                                        <label className={styles.label}>Preferred Contact Method</label>
                                        <div className={styles.radioGroup}>
                                            {CONTACT_METHODS.map(method => (
                                                <label key={method} className={styles.radioLabel}>
                                                    <input
                                                        type="radio"
                                                        name="contactMethod"
                                                        value={method}
                                                        checked={formData.contactMethod === method}
                                                        onChange={handleInputChange}
                                                        className={styles.radio}
                                                    />
                                                    {method}
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.fieldGroup}>
                                    <label htmlFor="coPurchaser" className={styles.label}>Co-Purchaser Name (if applicable)</label>
                                    <input
                                        type="text"
                                        id="coPurchaser"
                                        name="coPurchaser"
                                        value={formData.coPurchaser}
                                        onChange={handleInputChange}
                                        className={styles.input}
                                    />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Section 2: Search Preferences */}
                    <div className={styles.formSection}>
                        <button
                            type="button"
                            className={`${styles.sectionHeader} ${expandedSections.preferences ? styles.expanded : ''}`}
                            onClick={() => toggleSection('preferences')}
                        >
                            <span className={styles.sectionNumber}>2</span>
                            <span className={styles.sectionTitle}>Search Preferences</span>
                            <span className={styles.chevron}>▾</span>
                        </button>

                        {expandedSections.preferences && (
                            <div className={styles.sectionContent}>
                                <div className={styles.fieldGroup}>
                                    <label className={styles.label}>Availability for Showings</label>
                                    <div className={styles.checkboxGrid}>
                                        {AVAILABILITY_OPTIONS.map(opt => (
                                            <button
                                                key={opt}
                                                type="button"
                                                className={`${styles.chipButton} ${formData.availability.includes(opt) ? styles.chipActive : ''}`}
                                                onClick={() => handleMultiSelect('availability', opt)}
                                            >
                                                {opt}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className={styles.formRow}>
                                    <div className={styles.fieldGroup}>
                                        <label htmlFor="purchaseType" className={styles.label}>Purchase Type</label>
                                        <select
                                            id="purchaseType"
                                            name="purchaseType"
                                            value={formData.purchaseType}
                                            onChange={handleInputChange}
                                            className={styles.select}
                                        >
                                            <option value="">Select type</option>
                                            {PURCHASE_TYPES.map(type => (
                                                <option key={type} value={type}>{type}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className={styles.fieldGroup}>
                                        <label htmlFor="timeline" className={styles.label}>When are you hoping to buy?</label>
                                        <select
                                            id="timeline"
                                            name="timeline"
                                            value={formData.timeline}
                                            onChange={handleInputChange}
                                            className={styles.select}
                                        >
                                            <option value="">Select timeline</option>
                                            {TIMELINES.map(t => (
                                                <option key={t} value={t}>{t}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className={styles.fieldGroup}>
                                    <label className={styles.label}>Desired Locations</label>
                                    <div className={styles.checkboxGrid}>
                                        {LOCATIONS.map(loc => (
                                            <button
                                                key={loc.id}
                                                type="button"
                                                className={`${styles.chipButton} ${formData.desiredLocation.includes(loc.id) ? styles.chipActive : ''}`}
                                                onClick={() => handleMultiSelect('desiredLocation', loc.id)}
                                            >
                                                {loc.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className={styles.formRow}>
                                    <div className={styles.fieldGroup}>
                                        <label htmlFor="schoolDistrict" className={styles.label}>Preferred School District</label>
                                        <input
                                            type="text"
                                            id="schoolDistrict"
                                            name="schoolDistrict"
                                            value={formData.schoolDistrict}
                                            onChange={handleInputChange}
                                            placeholder="e.g., Williamson County Schools"
                                            className={styles.input}
                                        />
                                    </div>

                                    <div className={styles.fieldGroup}>
                                        <label htmlFor="budget" className={styles.label}>Budget Range</label>
                                        <select
                                            id="budget"
                                            name="budget"
                                            value={formData.budget}
                                            onChange={handleInputChange}
                                            className={styles.select}
                                        >
                                            <option value="">Select budget</option>
                                            {BUDGETS.map(b => (
                                                <option key={b} value={b}>{b}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className={styles.fieldGroup}>
                                    <label className={styles.label}>Urgency (1 = Just Browsing, 10 = Need to Buy Now)</label>
                                    <div className={styles.sliderContainer}>
                                        <input
                                            type="range"
                                            id="urgency"
                                            name="urgency"
                                            min="1"
                                            max="10"
                                            value={formData.urgency}
                                            onChange={handleInputChange}
                                            className={styles.slider}
                                        />
                                        <span className={styles.sliderValue}>{formData.urgency}</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Section 3: Financing */}
                    <div className={styles.formSection}>
                        <button
                            type="button"
                            className={`${styles.sectionHeader} ${expandedSections.financing ? styles.expanded : ''}`}
                            onClick={() => toggleSection('financing')}
                        >
                            <span className={styles.sectionNumber}>3</span>
                            <span className={styles.sectionTitle}>Financing</span>
                            <span className={styles.chevron}>▾</span>
                        </button>

                        {expandedSections.financing && (
                            <div className={styles.sectionContent}>
                                <div className={styles.formRow}>
                                    <div className={styles.fieldGroup}>
                                        <label htmlFor="purchaseMethod" className={styles.label}>How will you purchase?</label>
                                        <select
                                            id="purchaseMethod"
                                            name="purchaseMethod"
                                            value={formData.purchaseMethod}
                                            onChange={handleInputChange}
                                            className={styles.select}
                                        >
                                            <option value="">Select method</option>
                                            {PURCHASE_METHODS.map(m => (
                                                <option key={m} value={m}>{m}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className={styles.fieldGroup}>
                                        <label className={styles.label}>Are you pre-approved?</label>
                                        <div className={styles.radioGroup}>
                                            {['Yes', 'No', 'In Progress'].map(opt => (
                                                <label key={opt} className={styles.radioLabel}>
                                                    <input
                                                        type="radio"
                                                        name="preApproved"
                                                        value={opt}
                                                        checked={formData.preApproved === opt}
                                                        onChange={handleInputChange}
                                                        className={styles.radio}
                                                    />
                                                    {opt}
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.fieldGroup}>
                                    <label htmlFor="loanOfficer" className={styles.label}>Loan Officer Name & Company (if applicable)</label>
                                    <input
                                        type="text"
                                        id="loanOfficer"
                                        name="loanOfficer"
                                        value={formData.loanOfficer}
                                        onChange={handleInputChange}
                                        className={styles.input}
                                    />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Section 4: Home Features */}
                    <div className={styles.formSection}>
                        <button
                            type="button"
                            className={`${styles.sectionHeader} ${expandedSections.features ? styles.expanded : ''}`}
                            onClick={() => toggleSection('features')}
                        >
                            <span className={styles.sectionNumber}>4</span>
                            <span className={styles.sectionTitle}>Home Features & Style</span>
                            <span className={styles.chevron}>▾</span>
                        </button>

                        {expandedSections.features && (
                            <div className={styles.sectionContent}>
                                <div className={styles.fieldGroup}>
                                    <label className={styles.label}>Preferred Home Styles (select all that interest you)</label>
                                    <div className={styles.checkboxGrid}>
                                        {HOME_STYLES.map(style => (
                                            <button
                                                key={style.id}
                                                type="button"
                                                className={`${styles.chipButton} ${formData.homeStyles.includes(style.id) ? styles.chipActive : ''}`}
                                                onClick={() => handleMultiSelect('homeStyles', style.id)}
                                            >
                                                {style.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className={styles.fieldGroup}>
                                    <label htmlFor="topHomeStyle" className={styles.label}>Your #1 Home Style Choice</label>
                                    <select
                                        id="topHomeStyle"
                                        name="topHomeStyle"
                                        value={formData.topHomeStyle}
                                        onChange={handleInputChange}
                                        className={styles.select}
                                    >
                                        <option value="">Select your top choice</option>
                                        {HOME_STYLES.map(style => (
                                            <option key={style.id} value={style.label}>{style.label}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className={styles.fieldGroup}>
                                    <label htmlFor="mustHaves" className={styles.label}>Must-Have Features</label>
                                    <textarea
                                        id="mustHaves"
                                        name="mustHaves"
                                        value={formData.mustHaves}
                                        onChange={handleInputChange}
                                        placeholder="e.g., 3+ bedrooms, garage, fenced yard, pool..."
                                        className={styles.textarea}
                                        rows={3}
                                    />
                                </div>

                                <div className={styles.fieldGroup}>
                                    <label htmlFor="doNotWant" className={styles.label}>Dealbreakers (features you do NOT want)</label>
                                    <textarea
                                        id="doNotWant"
                                        name="doNotWant"
                                        value={formData.doNotWant}
                                        onChange={handleInputChange}
                                        placeholder="e.g., HOA, busy road, no basement..."
                                        className={styles.textarea}
                                        rows={3}
                                    />
                                </div>

                                <div className={styles.fieldGroup}>
                                    <label htmlFor="additionalInfo" className={styles.label}>Anything else you'd like us to know?</label>
                                    <textarea
                                        id="additionalInfo"
                                        name="additionalInfo"
                                        value={formData.additionalInfo}
                                        onChange={handleInputChange}
                                        className={styles.textarea}
                                        rows={4}
                                    />
                                </div>
                            </div>
                        )}
                    </div>

                    <div className={styles.submitWrapper}>
                        <button type="submit" className={styles.submitButton}>
                            Submit Questionnaire
                        </button>
                        <p className={styles.submitNote}>
                            Patrick will review your preferences and reach out within 24 hours.
                        </p>
                    </div>
                </form>
            </div>
        </section>
    )
}
