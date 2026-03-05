/**
 * OG Image Preview — screenshot this page at 1200×630 for social sharing.
 *
 * How to use:
 * 1. Run the dev server and navigate to /og-preview
 * 2. Open browser DevTools → toggle device toolbar → set custom size 1200 × 630
 * 3. Screenshot the page (Cmd+Shift+4 on Mac, or DevTools "Capture screenshot")
 * 4. Save as /public/media/og-image.jpg
 * 5. Update metaDefaults.ts: image: 'https://patrickmanningrealtor.com/media/og-image.jpg'
 */

const OGPreview = () => (
  <div
    style={{
      width: '1200px',
      height: '630px',
      display: 'flex',
      fontFamily: "'Inter', 'SF Pro Display', system-ui, sans-serif",
      background: '#ffffff',
      overflow: 'hidden',
      position: 'relative',
    }}
  >
    {/* Left teal accent bar */}
    <div
      style={{
        width: '8px',
        background: 'linear-gradient(180deg, #38e0c3 0%, #2bc9b0 100%)',
        flexShrink: 0,
      }}
    />

    {/* Main content area */}
    <div
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '56px 60px 48px',
        background: '#ffffff',
        position: 'relative',
        zIndex: 1,
      }}
    >
      {/* Top section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        {/* Left: name & tagline */}
        <div>
          <div
            style={{
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#38e0c3',
              marginBottom: '14px',
            }}
          >
            Real Broker, LLC · TN &amp; KY
          </div>
          <div
            style={{
              fontFamily: "'Cormorant Garamond', 'Times New Roman', serif",
              fontSize: '68px',
              fontWeight: 700,
              lineHeight: 1.05,
              color: '#1a2332',
              letterSpacing: '-0.02em',
            }}
          >
            Patrick<br />Manning
          </div>
          <div
            style={{
              marginTop: '18px',
              fontSize: '22px',
              fontWeight: 500,
              color: '#5a6a7d',
              letterSpacing: '0.01em',
            }}
          >
            Realtor &amp; Home Lifestyle Expert
          </div>
        </div>

        {/* Right: photo */}
        <div
          style={{
            width: '220px',
            height: '280px',
            borderRadius: '16px',
            overflow: 'hidden',
            flexShrink: 0,
            border: '1px solid rgba(0,0,0,0.06)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
          }}
        >
          <img
            src="/media/patrick.png"
            alt="Patrick Manning"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
          />
        </div>
      </div>

      {/* Bottom: stats + domain */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        {/* Stats */}
        <div style={{ display: 'flex', gap: '48px' }}>
          {[
            { value: '$60M+', label: 'In Transactions' },
            { value: '125+', label: 'Families Helped' },
            { value: 'TN & KY', label: 'Licensed' },
          ].map((stat) => (
            <div key={stat.label}>
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', 'Times New Roman', serif",
                  fontSize: '36px',
                  fontWeight: 700,
                  color: '#38e0c3',
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  marginTop: '4px',
                  fontSize: '13px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: '#8b97ab',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Domain */}
        <div
          style={{
            fontSize: '15px',
            fontWeight: 600,
            color: '#8b97ab',
            letterSpacing: '0.04em',
          }}
        >
          patrickmanningrealtor.com
        </div>
      </div>
    </div>

    {/* Decorative teal glow bottom-right */}
    <div
      style={{
        position: 'absolute',
        bottom: '-80px',
        right: '80px',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(56,224,195,0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
      }}
    />
  </div>
)

export default OGPreview
