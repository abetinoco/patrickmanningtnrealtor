import { useState } from 'react'
import styles from './SellerQuestionnaireForm.module.css'

// Google Form submission URL (formResponse endpoint)
const GOOGLE_FORM_ACTION = 'https://docs.google.com/forms/d/e/1FAIpQLSdIKMhCGY10fJqKytzmPD9Q2E2Zy9asrkst2gOXNd6XGt_35A/formResponse'

// All entry IDs from the actual Google Form
const ENTRIES = {
    name: 'entry.2121939110',
    email: 'emailAddress',
    phone: 'entry.2068689037',
    address: 'entry.1486463686',
    contactMethod: 'entry.1950059125',
    contactTime: 'entry.370138701',
    coOwner: 'entry.1023106531',
    sellingReason: 'entry.931061901',
    commitment: 'entry.903565926',
    propertyType: 'entry.81496515',
    sqftAbove: 'entry.1532391031',
    sqftBelow: 'entry.2144543541',
    basement: 'entry.945340657',
    fullBaths: 'entry.2053703529',
    totalBaths: 'entry.1277865687',
    stories: 'entry.1679343990',
    upgrades: 'entry.1696228179',
    homeStyle: 'entry.625573617',
    lotSize: 'entry.1211965941',
    city: 'entry.899370617',
    county: 'entry.1634928434',
    schoolDistrict: 'entry.1728434054',
    subdivision: 'entry.498508687',
    subdivisionHOA: 'entry.564001158',
    hoaFee: 'entry.2064825541',
    timeline: 'entry.1618647844',
    urgency: 'entry.1464594341',
    keysAgreement: 'entry.937444673',
    attendanceAgreement: 'entry.1811483171',
}

interface FormData {
    name: string
    email: string
    phone: string
    address: string
    contactMethod: string
    contactTime: string
    coOwner: string
    sellingReason: string
    commitment: string
    propertyType: string
    sqftAbove: string
    sqftBelow: string
    basement: string
    fullBaths: string
    totalBaths: string
    stories: string
    upgrades: string
    homeStyle: string
    lotSize: string
    city: string
    county: string
    schoolDistrict: string
    subdivision: string
    subdivisionHOA: string
    hoaFee: string
    timeline: string
    urgency: string
    keysAgreement: string
    attendanceAgreement: string
}

const CONTACT_METHODS = ['Text', 'Phone Call', 'Email']
const CONTACT_TIMES = ['Morning', 'Afternoon', 'Evening', 'Anytime']

const SELLING_REASONS = [
    'Relocating for work',
    'Upgrading to larger home',
    'Downsizing',
    'Investment/Rental property sale',
    'Divorce/Separation',
    'Family changes',
    'Financial reasons',
    'Retirement',
    'Other',
]

const PROPERTY_TYPES = [
    'Single Family Home',
    'Townhouse',
    'Condo',
    'Multi-Family',
    'Land/Lot',
    'Mobile Home',
    'Other',
]

const HOME_STYLES = [
    'Ranch/Single Story',
    'Two Story',
    'Split Level',
    'Colonial',
    'Craftsman',
    'Modern/Contemporary',
    'Farmhouse',
    'Cape Cod',
    'Other',
]

const TIMELINES = [
    'ASAP',
    'In 1-3 Months',
    'In 3-6 Months',
    'In 6-12 Months',
    'Just exploring options',
]

export const SellerQuestionnaireForm = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        address: '',
        contactMethod: '',
        contactTime: '',
        coOwner: '',
        sellingReason: '',
        commitment: '5',
        propertyType: '',
        sqftAbove: '',
        sqftBelow: '',
        basement: '',
        fullBaths: '',
        totalBaths: '',
        stories: '',
        upgrades: '',
        homeStyle: '',
        lotSize: '',
        city: '',
        county: '',
        schoolDistrict: '',
        subdivision: '',
        subdivisionHOA: '',
        hoaFee: '',
        timeline: '',
        urgency: '5',
        keysAgreement: '',
        attendanceAgreement: '',
    })
    const [submitted, setSubmitted] = useState(false)
    const [expandedSections, setExpandedSections] = useState({
        contact: true,
        property: false,
        location: false,
        timeline: false,
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const toggleSection = (section: keyof typeof expandedSections) => {
        setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        // Submit to hidden iframe
        const form = document.getElementById('google-form-seller') as HTMLFormElement
        if (form) {
            form.submit()
        }

        // Show success state
        setSubmitted(true)
    }

    if (submitted) {
        return (
            <section id="seller-questionnaire" className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.successMessage}>
                        <div className={styles.successIcon}>✓</div>
                        <h2 className="section-title">Thank You!</h2>
                        <p>Your seller questionnaire has been submitted successfully. Patrick will review your property details and reach out within 24 hours to discuss your home valuation and selling strategy.</p>
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
        <section id="seller-questionnaire" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className="section-subtitle">Seller Questionnaire</span>
                    <h2 className="section-title">Tell Us About Your Property</h2>
                    <p className={styles.intro}>
                        Complete this questionnaire and Patrick will prepare a comprehensive market analysis for your home.
                    </p>
                </div>

                {/* Hidden iframe for form submission */}
                <iframe name="hidden_iframe_seller" id="hidden_iframe_seller" style={{ display: 'none' }} />

                {/* Hidden Google Form */}
                <form
                    id="google-form-seller"
                    action={GOOGLE_FORM_ACTION}
                    method="POST"
                    target="hidden_iframe_seller"
                    style={{ display: 'none' }}
                >
                    <input type="hidden" name={ENTRIES.name} value={formData.name} />
                    <input type="hidden" name={ENTRIES.email} value={formData.email} />
                    <input type="hidden" name={ENTRIES.phone} value={formData.phone} />
                    <input type="hidden" name={ENTRIES.address} value={formData.address} />
                    <input type="hidden" name={ENTRIES.contactMethod} value={formData.contactMethod} />
                    <input type="hidden" name={ENTRIES.contactTime} value={formData.contactTime} />
                    <input type="hidden" name={ENTRIES.coOwner} value={formData.coOwner} />
                    <input type="hidden" name={ENTRIES.sellingReason} value={formData.sellingReason} />
                    <input type="hidden" name={ENTRIES.commitment} value={formData.commitment} />
                    <input type="hidden" name={ENTRIES.propertyType} value={formData.propertyType} />
                    <input type="hidden" name={ENTRIES.sqftAbove} value={formData.sqftAbove} />
                    <input type="hidden" name={ENTRIES.sqftBelow} value={formData.sqftBelow} />
                    <input type="hidden" name={ENTRIES.basement} value={formData.basement} />
                    <input type="hidden" name={ENTRIES.fullBaths} value={formData.fullBaths} />
                    <input type="hidden" name={ENTRIES.totalBaths} value={formData.totalBaths} />
                    <input type="hidden" name={ENTRIES.stories} value={formData.stories} />
                    <input type="hidden" name={ENTRIES.upgrades} value={formData.upgrades} />
                    <input type="hidden" name={ENTRIES.homeStyle} value={formData.homeStyle} />
                    <input type="hidden" name={ENTRIES.lotSize} value={formData.lotSize} />
                    <input type="hidden" name={ENTRIES.city} value={formData.city} />
                    <input type="hidden" name={ENTRIES.county} value={formData.county} />
                    <input type="hidden" name={ENTRIES.schoolDistrict} value={formData.schoolDistrict} />
                    <input type="hidden" name={ENTRIES.subdivision} value={formData.subdivision} />
                    <input type="hidden" name={ENTRIES.subdivisionHOA} value={formData.subdivisionHOA} />
                    <input type="hidden" name={ENTRIES.hoaFee} value={formData.hoaFee} />
                    <input type="hidden" name={ENTRIES.timeline} value={formData.timeline} />
                    <input type="hidden" name={ENTRIES.urgency} value={formData.urgency} />
                    <input type="hidden" name={ENTRIES.keysAgreement} value={formData.keysAgreement} />
                    <input type="hidden" name={ENTRIES.attendanceAgreement} value={formData.attendanceAgreement} />
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
                                        <label htmlFor="address" className={styles.label}>Property Address *</label>
                                        <input
                                            type="text"
                                            id="address"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleInputChange}
                                            placeholder="123 Main St, City, TN 12345"
                                            className={styles.input}
                                            required
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

                                    <div className={styles.fieldGroup}>
                                        <label className={styles.label}>Best Time to Contact</label>
                                        <div className={styles.radioGroup}>
                                            {CONTACT_TIMES.map(time => (
                                                <label key={time} className={styles.radioLabel}>
                                                    <input
                                                        type="radio"
                                                        name="contactTime"
                                                        value={time}
                                                        checked={formData.contactTime === time}
                                                        onChange={handleInputChange}
                                                        className={styles.radio}
                                                    />
                                                    {time}
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.fieldGroup}>
                                    <label htmlFor="coOwner" className={styles.label}>Co-Owner Name (if applicable)</label>
                                    <input
                                        type="text"
                                        id="coOwner"
                                        name="coOwner"
                                        value={formData.coOwner}
                                        onChange={handleInputChange}
                                        className={styles.input}
                                    />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Section 2: Property Details */}
                    <div className={styles.formSection}>
                        <button
                            type="button"
                            className={`${styles.sectionHeader} ${expandedSections.property ? styles.expanded : ''}`}
                            onClick={() => toggleSection('property')}
                        >
                            <span className={styles.sectionNumber}>2</span>
                            <span className={styles.sectionTitle}>Property Details</span>
                            <span className={styles.chevron}>▾</span>
                        </button>

                        {expandedSections.property && (
                            <div className={styles.sectionContent}>
                                <div className={styles.formRow}>
                                    <div className={styles.fieldGroup}>
                                        <label htmlFor="propertyType" className={styles.label}>Property Type</label>
                                        <select
                                            id="propertyType"
                                            name="propertyType"
                                            value={formData.propertyType}
                                            onChange={handleInputChange}
                                            className={styles.select}
                                        >
                                            <option value="">Select type</option>
                                            {PROPERTY_TYPES.map(type => (
                                                <option key={type} value={type}>{type}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className={styles.fieldGroup}>
                                        <label htmlFor="homeStyle" className={styles.label}>Home Style</label>
                                        <select
                                            id="homeStyle"
                                            name="homeStyle"
                                            value={formData.homeStyle}
                                            onChange={handleInputChange}
                                            className={styles.select}
                                        >
                                            <option value="">Select style</option>
                                            {HOME_STYLES.map(style => (
                                                <option key={style} value={style}>{style}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className={styles.formGrid}>
                                    <div className={styles.fieldGroup}>
                                        <label htmlFor="sqftAbove" className={styles.label}>Sq Ft (Above Grade)</label>
                                        <input
                                            type="number"
                                            id="sqftAbove"
                                            name="sqftAbove"
                                            value={formData.sqftAbove}
                                            onChange={handleInputChange}
                                            placeholder="e.g., 2400"
                                            className={styles.input}
                                        />
                                    </div>

                                    <div className={styles.fieldGroup}>
                                        <label htmlFor="sqftBelow" className={styles.label}>Sq Ft (Below Grade)</label>
                                        <input
                                            type="number"
                                            id="sqftBelow"
                                            name="sqftBelow"
                                            value={formData.sqftBelow}
                                            onChange={handleInputChange}
                                            placeholder="e.g., 800"
                                            className={styles.input}
                                        />
                                    </div>

                                    <div className={styles.fieldGroup}>
                                        <label htmlFor="fullBaths" className={styles.label}>Full Bathrooms</label>
                                        <input
                                            type="number"
                                            id="fullBaths"
                                            name="fullBaths"
                                            value={formData.fullBaths}
                                            onChange={handleInputChange}
                                            className={styles.input}
                                        />
                                    </div>

                                    <div className={styles.fieldGroup}>
                                        <label htmlFor="totalBaths" className={styles.label}>Total Bathrooms</label>
                                        <input
                                            type="number"
                                            id="totalBaths"
                                            name="totalBaths"
                                            value={formData.totalBaths}
                                            onChange={handleInputChange}
                                            className={styles.input}
                                            step="0.5"
                                        />
                                    </div>
                                </div>

                                <div className={styles.formRow}>
                                    <div className={styles.fieldGroup}>
                                        <label htmlFor="stories" className={styles.label}>Number of Stories</label>
                                        <select
                                            id="stories"
                                            name="stories"
                                            value={formData.stories}
                                            onChange={handleInputChange}
                                            className={styles.select}
                                        >
                                            <option value="">Select</option>
                                            <option value="1">1 Story</option>
                                            <option value="1.5">1.5 Stories</option>
                                            <option value="2">2 Stories</option>
                                            <option value="2.5">2.5 Stories</option>
                                            <option value="3+">3+ Stories</option>
                                        </select>
                                    </div>

                                    <div className={styles.fieldGroup}>
                                        <label htmlFor="lotSize" className={styles.label}>Lot Size (Acres)</label>
                                        <input
                                            type="text"
                                            id="lotSize"
                                            name="lotSize"
                                            value={formData.lotSize}
                                            onChange={handleInputChange}
                                            placeholder="e.g., 0.5"
                                            className={styles.input}
                                        />
                                    </div>
                                </div>

                                <div className={styles.fieldGroup}>
                                    <label htmlFor="basement" className={styles.label}>Basement Info</label>
                                    <input
                                        type="text"
                                        id="basement"
                                        name="basement"
                                        value={formData.basement}
                                        onChange={handleInputChange}
                                        placeholder="e.g., Finished basement with walkout"
                                        className={styles.input}
                                    />
                                </div>

                                <div className={styles.fieldGroup}>
                                    <label htmlFor="upgrades" className={styles.label}>Recent Upgrades or Renovations</label>
                                    <textarea
                                        id="upgrades"
                                        name="upgrades"
                                        value={formData.upgrades}
                                        onChange={handleInputChange}
                                        placeholder="e.g., New roof in 2023, updated kitchen, etc."
                                        className={styles.textarea}
                                        rows={3}
                                    />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Section 3: Location */}
                    <div className={styles.formSection}>
                        <button
                            type="button"
                            className={`${styles.sectionHeader} ${expandedSections.location ? styles.expanded : ''}`}
                            onClick={() => toggleSection('location')}
                        >
                            <span className={styles.sectionNumber}>3</span>
                            <span className={styles.sectionTitle}>Location & Community</span>
                            <span className={styles.chevron}>▾</span>
                        </button>

                        {expandedSections.location && (
                            <div className={styles.sectionContent}>
                                <div className={styles.formGrid}>
                                    <div className={styles.fieldGroup}>
                                        <label htmlFor="city" className={styles.label}>City</label>
                                        <input
                                            type="text"
                                            id="city"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleInputChange}
                                            className={styles.input}
                                        />
                                    </div>

                                    <div className={styles.fieldGroup}>
                                        <label htmlFor="county" className={styles.label}>County</label>
                                        <input
                                            type="text"
                                            id="county"
                                            name="county"
                                            value={formData.county}
                                            onChange={handleInputChange}
                                            className={styles.input}
                                        />
                                    </div>

                                    <div className={styles.fieldGroup}>
                                        <label htmlFor="schoolDistrict" className={styles.label}>School District</label>
                                        <input
                                            type="text"
                                            id="schoolDistrict"
                                            name="schoolDistrict"
                                            value={formData.schoolDistrict}
                                            onChange={handleInputChange}
                                            className={styles.input}
                                        />
                                    </div>

                                    <div className={styles.fieldGroup}>
                                        <label htmlFor="subdivision" className={styles.label}>Subdivision Name</label>
                                        <input
                                            type="text"
                                            id="subdivision"
                                            name="subdivision"
                                            value={formData.subdivision}
                                            onChange={handleInputChange}
                                            className={styles.input}
                                        />
                                    </div>
                                </div>

                                <div className={styles.formRow}>
                                    <div className={styles.fieldGroup}>
                                        <label htmlFor="subdivisionHOA" className={styles.label}>Does subdivision have HOA?</label>
                                        <select
                                            id="subdivisionHOA"
                                            name="subdivisionHOA"
                                            value={formData.subdivisionHOA}
                                            onChange={handleInputChange}
                                            className={styles.select}
                                        >
                                            <option value="">Select</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                            <option value="Not sure">Not sure</option>
                                        </select>
                                    </div>

                                    <div className={styles.fieldGroup}>
                                        <label htmlFor="hoaFee" className={styles.label}>HOA Fee (if applicable)</label>
                                        <input
                                            type="text"
                                            id="hoaFee"
                                            name="hoaFee"
                                            value={formData.hoaFee}
                                            onChange={handleInputChange}
                                            placeholder="e.g., $300/year"
                                            className={styles.input}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Section 4: Timeline & Motivation */}
                    <div className={styles.formSection}>
                        <button
                            type="button"
                            className={`${styles.sectionHeader} ${expandedSections.timeline ? styles.expanded : ''}`}
                            onClick={() => toggleSection('timeline')}
                        >
                            <span className={styles.sectionNumber}>4</span>
                            <span className={styles.sectionTitle}>Timeline & Motivation</span>
                            <span className={styles.chevron}>▾</span>
                        </button>

                        {expandedSections.timeline && (
                            <div className={styles.sectionContent}>
                                <div className={styles.formRow}>
                                    <div className={styles.fieldGroup}>
                                        <label htmlFor="sellingReason" className={styles.label}>Primary Reason for Selling</label>
                                        <select
                                            id="sellingReason"
                                            name="sellingReason"
                                            value={formData.sellingReason}
                                            onChange={handleInputChange}
                                            className={styles.select}
                                        >
                                            <option value="">Select reason</option>
                                            {SELLING_REASONS.map(reason => (
                                                <option key={reason} value={reason}>{reason}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className={styles.fieldGroup}>
                                        <label htmlFor="timeline" className={styles.label}>When do you want to sell?</label>
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
                                    <label className={styles.label}>Commitment to Selling (1 = Just Exploring, 10 = Ready to List)</label>
                                    <div className={styles.sliderContainer}>
                                        <input
                                            type="range"
                                            id="commitment"
                                            name="commitment"
                                            min="1"
                                            max="10"
                                            value={formData.commitment}
                                            onChange={handleInputChange}
                                            className={styles.slider}
                                        />
                                        <span className={styles.sliderValue}>{formData.commitment}</span>
                                    </div>
                                </div>

                                <div className={styles.fieldGroup}>
                                    <label className={styles.label}>Urgency Level (1 = No Rush, 10 = Need to Sell Immediately)</label>
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

                                <div className={styles.agreementSection}>
                                    <p className={styles.agreementTitle}>Agent Agreements</p>

                                    <div className={styles.fieldGroup}>
                                        <label className={styles.radioLabel}>
                                            <input
                                                type="checkbox"
                                                name="keysAgreement"
                                                value="Yes"
                                                checked={formData.keysAgreement === 'Yes'}
                                                onChange={(e) => setFormData(prev => ({
                                                    ...prev,
                                                    keysAgreement: e.target.checked ? 'Yes' : ''
                                                }))}
                                                className={styles.checkbox}
                                            />
                                            I agree to provide a set of keys to the agent for showings
                                        </label>
                                    </div>

                                    <div className={styles.fieldGroup}>
                                        <label className={styles.radioLabel}>
                                            <input
                                                type="checkbox"
                                                name="attendanceAgreement"
                                                value="Yes"
                                                checked={formData.attendanceAgreement === 'Yes'}
                                                onChange={(e) => setFormData(prev => ({
                                                    ...prev,
                                                    attendanceAgreement: e.target.checked ? 'Yes' : ''
                                                }))}
                                                className={styles.checkbox}
                                            />
                                            I understand I should not be present during showings
                                        </label>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className={styles.submitWrapper}>
                        <button type="submit" className={styles.submitButton}>
                            Submit Questionnaire
                        </button>
                        <p className={styles.submitNote}>
                            Patrick will review your property and reach out within 24 hours.
                        </p>
                    </div>
                </form>
            </div>
        </section>
    )
}
