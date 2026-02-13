# Adding Realtracs & Western KY MLS Feeds to Search

This guide covers adding **Realtracs (RTMLS)** and **Western Kentucky Regional MLS (WKRMLS)** to your IDX Broker–powered search. You do **not** implement RETS feeds in this codebase. IDX Broker handles RETS/MLS connections; we add feeds through their account and billing.

---

## Current Setup

- **IDX Broker subdomain:** `patrickmanningrealtor.idxbroker.com`
- **Site:** Embeds IDX results via iframe at `/search-results`
- **Primary feed:** Already connected (existing MLS)

---

## If You Already Have RETS Approval & Credentials

**There is no form or control panel to paste credentials into.** IDX Broker staff adds the feed on their side. You must send the credentials to them.

### Step 1: Email IDX Broker with Your RETS Credentials

Send an email to:

- **approval@elmstreettechnology.com** (MLS/feed setup)
- **info@idxbroker.com** (general; may forward to approval)

### Step 2: Include This Information

**Subject:** Add Western Kentucky RETS Feed – Account: patrickmanningrealtor.idxbroker.com

**Body:**
```
We are approved for the Western Kentucky RETS feed and have received our credentials.
Please add this feed to our IDX Broker account.

Account: patrickmanningrealtor.idxbroker.com
Broker: Andrew Pruitt, Real Broker LLC
Agent: Patrick Manning (approved for RETS)

RETS Feed Details:
- URL: https://westky-rets.paragonrels.com/rets/fnisrets.aspx/WESTKY/login?rets-version-rets/1.8
- Login: halOreTs
- Password: [include the password from the email sent to abe@halo.tech]

Please confirm once the feed is active on our account.
```

### Step 3: Wait for Confirmation

IDX Broker typically needs **2–3 weeks** after receiving credentials to add a new feed. They will confirm when it is live. Your existing search will then automatically include Western KY listings—no code changes required.

### Realtracs (if you have approval)

If you also have Realtracs approval and credentials, send those in the same email (or a follow-up) with the same format. Realtracs may use MLS Grid / RESO API instead of RETS—IDX Broker will confirm what they need.

---

## Feeds You Want to Add

| MLS | IDX Broker Support | Coverage |
|-----|--------------------|----------|
| **Realtracs (RTMLS)** | ✅ Yes ([details](https://idxbroker.com/mls/realtracs-mls-rtmls)) | TN (Davidson, Williamson, Rutherford, etc.), KY, AL |
| **Western KY Regional (WKRMLS)** | ✅ Yes ([details](https://idxbroker.com/mls/western-kentucky-regional-mls-wkrmls)) | Bowling Green, Paducah, Owensboro, Hopkinsville, etc. |

---

## How to Add the Feeds

### Step 1: Contact IDX Broker

- **Phone:** 541-343-3912  
- **Email:** info@idxbroker.com  

Request that **Realtracs (RTMLS)** and **Western Kentucky Regional MLS (WKRMLS)** be added to your account.

### Step 2: Pricing (typical)

- **~$30/month per additional feed** (each MLS)
- **Western KY fees from IDX:** Data Management $5/mo, Connection $35 one-time
- Exact amounts may vary; confirm when you call.

### Step 3: MLS Approval

IDX Broker will need:

- MLS/board approval for Patrick Manning (or broker Andrew Pruitt)
- An IDX license agreement (usually broker-signed)
- Vendor credentials if the MLS requires them

### Step 4: Western KY RETS Credentials (if requested)

The Western KY Paragon RETS feed you’re approved for:

- **URL:** `https://westky-rets.paragonrels.com/rets/fnisrets.aspx/WESTKY/login?rets-version-rets/1.8`
- **Login:** `halOreTs`
- **Password:** Sent separately to abe@halo.tech

Often IDX Broker has their own vendor agreement with Paragon. If they ask for your RETS credentials, these can be provided. If not, they use their own.

---

## After Feeds Are Added

- No code changes are needed in this repo.
- IDX Broker will include all connected MLS feeds in:
  - Basic Search
  - Map Search
  - Address Search
  - Listing Search
- Your existing `/search-results` page will automatically show listings from Realtracs and Western KY once they’re connected.

---

## Multi-MLS Search Behavior

With multiple feeds:

- Users see one unified search.
- Results can combine listings from all feeds.
- You can set a primary feed in **IDX Dashboard → Advanced Search Management** if you want one MLS to drive default filters.

---

## Checklist

- [ ] Call or email IDX Broker to add Realtracs and Western KY
- [ ] Confirm pricing per feed
- [ ] Complete any MLS/board approval or IDX agreements
- [ ] Provide Western KY RETS credentials if IDX Broker requests them
- [ ] After feeds are live, verify search results include both MLSs

---

## References

- [IDX Broker – Add Additional MLS Feeds](https://idxbroker.com/features/search-multiple-idx-mls-feeds-at-once)
- [Realtracs MLS on IDX Broker](https://idxbroker.com/mls/realtracs-mls-rtmls)
- [Western KY Regional MLS on IDX Broker](https://idxbroker.com/mls/western-kentucky-regional-mls-wkrmls)
