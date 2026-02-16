# Multi-MLS Search Troubleshooting: RealTracs + WKRMLS

You have **two active MLS feeds** (RealTracs and Western Kentucky Regional MLS) in IDX Broker, but generic search shows only one feed. This doc explains why and how to fix it.

---

## Root Cause: No-Commingle Policy

When an IDX account has **multiple MLS feeds** and **one or more MLSs prohibit commingling**, IDX Broker must display results separately per MLS to stay compliant.

**What "no-commingle" means:** Some MLS boards (e.g., Western Kentucky Regional MLS) do not allow their listings to be mixed with listings from other MLSs on the same page. IDX Broker handles this by:

1. **Creating separate tabs** – one tab per MLS (or one for commingled MLSs, one for non-commingled)
2. **Defaulting to Tab 1** – which shows only the **commingling-enabled** MLS(s), often RealTracs
3. **Hiding WKRMLS** – until the user manually clicks the Western Kentucky / WKRMLS tab

So you’re not missing data; WKRMLS results are on a different tab that users may not notice.

---

## What to Check

### 1. Look for MLS Tabs on the Results Page

Open a generic search on your site (or directly at `https://patrickmanningrealtor.idxbroker.com/idx/results/listings`).

- Do you see **tabs** near the top (e.g., "RealTracs" | "Western Kentucky" | "All")?
- If yes, click the **Western Kentucky** (or WKRMLS) tab. Do listings appear?

If WKRMLS listings show only when that tab is selected, the no-commingle behavior is confirmed.

### 2. IDX Dashboard: Advanced Search Management

- Go to **IDX Broker Dashboard** → **Advanced Search Management**
- Confirm **both** RealTracs and Western Kentucky Regional MLS are added
- Check which MLS is set as **primary/default** – this affects what shows first

### 3. Contact IDX Broker Support

They can:

- Confirm which MLS(s) have no-commingle policies
- Provide the `idxID` value(s) for each MLS
- Explain how to default search to WKRMLS or show both tabs more clearly

**Contact:** 541-343-3912 | info@idxbroker.com

---

## URL Parameter: idxID for WKRMLS (Resolved)

For Kentucky searches, use `idxID=a463&commingle` to switch to the Western Kentucky Regional MLS feed. The `a_state=KY` param does not work because it filters within the default RealTracs feed, which has zero Kentucky listings.

**Implementation:** When the user selects "Kentucky" in the Location dropdown, `SearchResults.tsx` passes `idxID=a463&commingle` to the IDX results URL. No other params needed for a blanket search.

---

## Advanced Search: MLS Names vs State Names

Inside the IDX iframe (Advanced Search / More Filters), the LOCATION dropdown shows MLS names ("RealTracs MLS", "Western Kentucky Regional MLS") instead of state names ("Tennessee", "Kentucky").

### Option 1: IDX Control Panel (Preferred)

- **Preferences** → **MLS Settings** or **Rename Fields** (Platinum feature)
- Some plans allow customizing MLS display labels
- Contact IDX support (541-343-3912) to confirm if your plan supports renaming MLS to "Tennessee" / "Kentucky"

### Option 2: Custom CSS

`docs/idx-css/all-in-one.css` includes a block that replaces MLS names with state names via CSS:

- "Western Kentucky Regional MLS" → "Kentucky"
- "RealTracs MLS" → "Tennessee"

**To use:** Paste into **IDX Dashboard → Designs → Custom CSS → Global** (so it applies to Advanced Search and Results). If you use Results-only CSS, also add it to **Advanced Search** or **Search** if IDX offers that scope—the LOCATION dropdown appears on the Advanced Search page.

**Structure targeted:** Select2 (`ul#select2-IDX-idxID-results`) + `div.IDX-custom-form-element__label`. When the dropdown is *open*, options should show "Tennessee" / "Kentucky". The closed/selected display (`.select2-selection__rendered`) may still show MLS names—that would require IDX's `templateSelection` or a Control Panel rename.

---

## References

- [IDX Broker – MLS Approval & Popular Terms (no-commingle)](https://blog.idxbroker.com/mls-approval-popular-terms-clearly-explained)
- [Custom Basic Search – idxID & commingle parameter](https://developers.idxbroker.com/forums/topic/custom-basic-search-coding)
- [Select Your Primary IDX Feed](https://idxbroker.com/features/select-your-primary-idx-feed)
