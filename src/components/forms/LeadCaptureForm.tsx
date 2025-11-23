import { useState } from 'react'
import type { FormEvent } from 'react'
import { usStates } from '../../data/states'
import styles from './LeadCaptureForm.module.css'

interface LeadCaptureFormProps {
  layout?: 'inline' | 'modal'
}

export const LeadCaptureForm = ({ layout = 'inline' }: LeadCaptureFormProps) => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    const formData = new FormData(event.currentTarget)
    const payload = Object.fromEntries(formData)

    const crmEndpoint = import.meta.env.VITE_CRM_ENDPOINT

    try {
      if (!crmEndpoint) {
        console.warn('CRM endpoint is not configured. Define VITE_CRM_ENDPOINT to enable submissions.')
        setStatus('success')
        return
      }

      const response = await fetch(crmEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error('Submission failed')
      }

      setStatus('success')
      event.currentTarget.reset()
    } catch (error) {
      console.error(error)
      setStatus('error')
      setErrorMessage('We were unable to submit your request. Please try again or call +1 615-302-8000.')
    }
  }

  return (
    <form className={styles.formWrapper} onSubmit={handleSubmit} aria-live="polite">
      <div>
        <h3 className={styles.heading}>Tell Us About Your Move</h3>
        <p className="section-subtitle">We reply within one business day with next steps.</p>
      </div>

      <div className={styles.fields}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor={`lead-name-${layout}`}>
            Name
          </label>
          <input
            className={styles.input}
            id={`lead-name-${layout}`}
            name="name"
            type="text"
            required
            placeholder="Your full name"
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor={`lead-email-${layout}`}>
            Email
          </label>
          <input
            className={styles.input}
            id={`lead-email-${layout}`}
            name="email"
            type="email"
            required
            placeholder="name@email.com"
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor={`lead-phone-${layout}`}>
            Phone
          </label>
          <input
            className={styles.input}
            id={`lead-phone-${layout}`}
            name="phone"
            type="tel"
            inputMode="tel"
            required
            placeholder="+1 (###) ###-####"
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor={`lead-interest-${layout}`}>
            Interest
          </label>
          <select
            className={styles.select}
            id={`lead-interest-${layout}`}
            name="interest"
            required
            defaultValue=""
          >
            <option value="" disabled>
              Select focus
            </option>
            <option value="buying">Buying</option>
            <option value="selling">Selling</option>
            <option value="relocating">Relocating</option>
            <option value="investing">Investing</option>
          </select>
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor={`lead-state-${layout}`}>
            Preferred State
          </label>
          <select
            className={styles.select}
            id={`lead-state-${layout}`}
            name="state"
            required
            defaultValue=""
          >
            <option value="" disabled>
              Choose a state
            </option>
            {usStates.map((state) => (
              <option key={state.value} value={state.value}>
                {state.label}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor={`lead-notes-${layout}`}>
            Notes
          </label>
          <textarea
            className={styles.textarea}
            id={`lead-notes-${layout}`}
            name="notes"
            placeholder="Share timing, property goals, or lifestyle priorities"
          />
          <span className={styles.helper}>
            Share as much or as little detail as you would like—no pressure.
          </span>
        </div>
      </div>

      <button className={`cta-button ${styles.submit}`} type="submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Send My Info'}
      </button>

      {status === 'success' && <div role="status">Thank you. We will reach out shortly.</div>}
      {status === 'error' && <div role="alert">{errorMessage}</div>}
    </form>
  )
}
