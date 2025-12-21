import { useState, useEffect } from 'react'
import styles from './MortgageCalculator.module.css'

interface CalculationResult {
    monthlyPayment: number
    principal: number
    interest: number
    propertyTax: number
    insurance: number
    totalPayment: number
    totalInterest: number
}

const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
    }).format(value)
}

const formatCurrencyDecimals = (value: number): string => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(value)
}

export const MortgageCalculator = () => {
    const [homePrice, setHomePrice] = useState(500000)
    const [downPaymentPercent, setDownPaymentPercent] = useState(20)
    const [interestRate, setInterestRate] = useState(6.75)
    const [loanTerm, setLoanTerm] = useState(30)
    const [propertyTaxRate] = useState(0.75) // TN average
    const [insuranceRate] = useState(0.35)
    const [result, setResult] = useState<CalculationResult | null>(null)

    useEffect(() => {
        calculateMortgage()
    }, [homePrice, downPaymentPercent, interestRate, loanTerm, propertyTaxRate, insuranceRate])

    const calculateMortgage = () => {
        const downPayment = homePrice * (downPaymentPercent / 100)
        const loanAmount = homePrice - downPayment
        const monthlyRate = interestRate / 100 / 12
        const numberOfPayments = loanTerm * 12

        // Monthly principal & interest (P&I)
        let monthlyPI: number
        if (monthlyRate === 0) {
            monthlyPI = loanAmount / numberOfPayments
        } else {
            monthlyPI = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
                (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
        }

        // Monthly property tax
        const monthlyTax = (homePrice * (propertyTaxRate / 100)) / 12

        // Monthly insurance
        const monthlyInsurance = (homePrice * (insuranceRate / 100)) / 12

        // Total monthly payment
        const totalMonthly = monthlyPI + monthlyTax + monthlyInsurance

        // Total payment over loan term
        const totalPayment = monthlyPI * numberOfPayments

        // Total interest paid
        const totalInterest = totalPayment - loanAmount

        setResult({
            monthlyPayment: totalMonthly,
            principal: monthlyPI - (loanAmount * monthlyRate),
            interest: loanAmount * monthlyRate,
            propertyTax: monthlyTax,
            insurance: monthlyInsurance,
            totalPayment,
            totalInterest,
        })
    }

    const downPaymentAmount = homePrice * (downPaymentPercent / 100)
    const loanAmount = homePrice - downPaymentAmount

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className="section-subtitle">Financial Planning</span>
                    <h2 className="section-title">Mortgage Calculator</h2>
                    <p className={styles.intro}>
                        Estimate your monthly payment to help plan your budget. Adjust the values to see how they affect your payment.
                    </p>
                </div>

                <div className={styles.calculatorGrid}>
                    <div className={styles.inputsPanel}>
                        <div className={styles.sliderGroup}>
                            <div className={styles.sliderHeader}>
                                <label className={styles.sliderLabel}>Home Price</label>
                                <span className={styles.sliderValue}>{formatCurrency(homePrice)}</span>
                            </div>
                            <input
                                type="range"
                                min={100000}
                                max={2000000}
                                step={10000}
                                value={homePrice}
                                onChange={(e) => setHomePrice(Number(e.target.value))}
                                className={styles.slider}
                            />
                            <div className={styles.sliderRange}>
                                <span>$100K</span>
                                <span>$2M</span>
                            </div>
                        </div>

                        <div className={styles.sliderGroup}>
                            <div className={styles.sliderHeader}>
                                <label className={styles.sliderLabel}>Down Payment</label>
                                <span className={styles.sliderValue}>{downPaymentPercent}% ({formatCurrency(downPaymentAmount)})</span>
                            </div>
                            <input
                                type="range"
                                min={0}
                                max={50}
                                step={1}
                                value={downPaymentPercent}
                                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                                className={styles.slider}
                            />
                            <div className={styles.sliderRange}>
                                <span>0%</span>
                                <span>50%</span>
                            </div>
                        </div>

                        <div className={styles.sliderGroup}>
                            <div className={styles.sliderHeader}>
                                <label className={styles.sliderLabel}>Interest Rate</label>
                                <span className={styles.sliderValue}>{interestRate.toFixed(2)}%</span>
                            </div>
                            <input
                                type="range"
                                min={3}
                                max={10}
                                step={0.125}
                                value={interestRate}
                                onChange={(e) => setInterestRate(Number(e.target.value))}
                                className={styles.slider}
                            />
                            <div className={styles.sliderRange}>
                                <span>3%</span>
                                <span>10%</span>
                            </div>
                        </div>

                        <div className={styles.termGroup}>
                            <label className={styles.sliderLabel}>Loan Term</label>
                            <div className={styles.termButtons}>
                                <button
                                    type="button"
                                    className={`${styles.termButton} ${loanTerm === 15 ? styles.termButtonActive : ''}`}
                                    onClick={() => setLoanTerm(15)}
                                >
                                    15 Years
                                </button>
                                <button
                                    type="button"
                                    className={`${styles.termButton} ${loanTerm === 30 ? styles.termButtonActive : ''}`}
                                    onClick={() => setLoanTerm(30)}
                                >
                                    30 Years
                                </button>
                            </div>
                        </div>

                        <div className={styles.loanSummary}>
                            <div className={styles.summaryRow}>
                                <span>Loan Amount</span>
                                <span>{formatCurrency(loanAmount)}</span>
                            </div>
                        </div>
                    </div>

                    {result && (
                        <div className={styles.resultPanel}>
                            <div className={styles.monthlyTotal}>
                                <span className={styles.monthlyLabel}>Estimated Monthly Payment</span>
                                <span className={styles.monthlyAmount}>{formatCurrencyDecimals(result.monthlyPayment)}</span>
                            </div>

                            <div className={styles.breakdown}>
                                <div className={styles.breakdownItem}>
                                    <span className={styles.breakdownLabel}>Principal & Interest</span>
                                    <span className={styles.breakdownValue}>
                                        {formatCurrencyDecimals(result.principal + result.interest)}
                                    </span>
                                </div>
                                <div className={styles.breakdownItem}>
                                    <span className={styles.breakdownLabel}>Property Tax</span>
                                    <span className={styles.breakdownValue}>{formatCurrencyDecimals(result.propertyTax)}</span>
                                </div>
                                <div className={styles.breakdownItem}>
                                    <span className={styles.breakdownLabel}>Home Insurance</span>
                                    <span className={styles.breakdownValue}>{formatCurrencyDecimals(result.insurance)}</span>
                                </div>
                            </div>

                            <div className={styles.totalInterest}>
                                <span>Total interest over {loanTerm} years</span>
                                <span>{formatCurrency(result.totalInterest)}</span>
                            </div>

                            <p className={styles.disclaimer}>
                                * Estimates based on current inputs. Actual payment may vary. Does not include HOA fees, PMI, or other costs.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
