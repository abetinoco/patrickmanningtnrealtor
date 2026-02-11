# IDX Broker Theming Guide – Patrick Manning TN Realtor

This doc clarifies **what lives where**, **what to theme where**, and **what we’re using** so you can work with IDX without getting lost.

---

## 1. Hero search: recommended approach (least friction)

**Recommendation: use the custom search form everywhere and don’t embed an IDX search widget in the hero.**

- **Why:** The hero form is already your custom `PropertySearchForm` (dark glass, teal button, Location / Min Price / Max Price / Beds / Baths). It matches your site, submits to your `/search-results` page, and has no iframe or IDX script issues.
- **What we did:** The **Buy** page hero now uses the same `PropertySearchForm` as Home, so both heroes behave and look the same. The IDX “Basic Search” widget (139650) is no longer in any hero.
- **Result:** One search experience, one theme, no IDX widget styling or behavior to debug in the hero.

---

## 2. Second screenshot = IDX-hosted results page (iframe content)

The second screenshot (map + “500 LISTINGS” + “Historical Results” sidebar) is **not** your React app. It’s the **IDX Broker hosted results page** that loads **inside the iframe** on your `/search-results` route.

- **“Historical Results”** is IDX’s label for the **list of listings** next to the map. It’s the default results layout (map left, list right). It’s not your “Featured Listings” widget.
- **Featured Listings** on your site are the **IDX Featured Showcase widget** (137091) embedded on **Home** and **Buy** (the horizontal “Featured Listings” section). That’s separate from the results page.
- **White/blue look:** That’s IDX’s out-of-the-box theme. You change it by adding **Custom CSS** in the IDX dashboard (**Designs → Custom CSS**). We can’t inject that from your React app into the iframe for security reasons.

So: the “search results page” you want to fix = the **IDX results page** in the iframe. Fix it by pasting the teal-themed CSS from `idx-custom-css-for-dashboard.css` into **Designs → Custom CSS**.

---

## 3. City filter

You’re not filtering by city in IDX (and don’t want to). The form can still show “Location” for context, but we only pass price/beds/baths to IDX. No changes required unless you want to remove the Location field entirely.

---

## 4. Pages vs widgets – what IDX gives you, what we use

### IDX-hosted “pages” (live on their domain, open in iframe or new tab)

| Page type        | What it is                         | Where we use it                          |
|------------------|-------------------------------------|------------------------------------------|
| **Results**      | Map + list of listings              | Iframe on your `/search-results` page    |
| **Listing detail** | Single property page               | When user clicks a listing (IDX URL)     |
| **Search form**  | IDX’s own search page               | We don’t use it; we use our custom form  |
| **Map search**   | Full-page map search                | Optional; not required for current flow  |

You only need to **theme** the pages that the user actually sees. For you that’s mainly the **Results** page (and optionally Listing detail if you want it to match).

### Widgets (snippets you embed on your site)

| Widget              | ID   | Where used        | Theming |
|--------------------|------|-------------------|--------|
| **Featured Showcase** | 137091 | Home, Buy        | Our CSS overrides in `IDXFeaturedShowcase.module.css` (already themed) |
| **Sold Listings**  | 137092 | Home             | Our CSS overrides in `IDXSoldListings.module.css` (already themed) |
| **Basic Search**   | 139650 | Not in hero anymore | Could be used on a dedicated “Search” page later; widget-level CSS in IDX if needed |

So:

- **Our site:** Home, Buy, `/search-results` (your header + iframe).
- **IDX pages we care about for styling:** Results (and optionally Listing detail).
- **IDX widgets we use:** Featured Showcase, Sold Listings. Theme those with our existing module CSS; any extra tweaks can go in **Designs → Widgets → [widget] → edit CSS** in IDX.

---

## 5. Where to theme what (no custom CSS in IDX yet)

You’re starting from an out-of-the-box IDX experience. Here’s the split:

| What | Where to theme |
|------|----------------|
| **Hero search form** | Already your design (custom form). No IDX. |
| **Featured Showcase / Sold Listings on your site** | Our repo: `IDXFeaturedShowcase.module.css`, `IDXSoldListings.module.css` (already done). Optional: per-widget CSS in IDX **Designs → Widgets → Manage → edit** for that widget. |
| **Results page (map + “Historical Results” list)** | **IDX Dashboard → Designs → Custom CSS**. Paste the contents of `docs/idx-custom-css-for-dashboard.css` (teal theme). |
| **Listing detail page** | Same: **Designs → Custom CSS** (applies to all IDX pages) or IDX’s template/layout settings if available. |

So the only place you **must** paste CSS in IDX is **Designs → Custom CSS** to fix the white/blue results page. The rest is either already in your repo or optional widget-level tweaks.

---

## 6. Quick checklist (no need to be scared)

1. **Hero search** – Done. Custom form on Home and Buy; no IDX widget in hero.
2. **Results page look** – Paste `docs/idx-custom-css-for-dashboard.css` into **Designs → Custom CSS** in IDX. If something doesn’t change, inspect the results page in the browser and add overrides for the class names you see (IDX can vary by template).
3. **Featured / Sold widgets on your site** – Already themed in the repo. If something still looks off, we can add more `:global()` overrides or you can edit that widget’s CSS in **Designs → Widgets**.
4. **City** – Not used for IDX filtering; no change needed unless you want to remove the Location field from the form.

If you tell me which part still feels “interesting” (e.g. “Custom CSS doesn’t change the filter bar”), we can narrow it down to one place and one fix.

---

## 7. Duplicate buttons on search results (resolved)

You had two sets of filters: (1) our header form (Location, Min/Max Price, Beds, Baths, Search) and (2) IDX's bar inside the iframe (ANY PRICE, ANY BEDS, APPLY FILTERS, etc.). We **removed our refine form** from the Search Results page so there's only **one** place to refine: IDX's bar inside the iframe. The header now shows Back to Home, "Search Results", the summary (e.g. "All Properties"), and a short hint: "Use the filters below to narrow your search."

---

## 8. What to do next

| Priority | Action |
|----------|--------|
| **1** | Test the flow: Home or Buy → search form → Search Results. Confirm only IDX's filter bar appears and theming looks good. |
| **2** | In IDX **Designs → Custom CSS**: if any element (e.g. the light blue "SHOWING 500 LISTINGS" bar) didn't change color, inspect that element in the browser (right-click → Inspect), find its class, and add a rule in Custom CSS. |
| **3** | Optional: In IDX **Designs → Template** (or layout settings), see if you can choose a template that's closer to your layout so less CSS is needed. |
| **4** | When a user clicks a listing, they go to IDX's **listing detail** page. If you want that page to match your teal theme, add more rules to the same Custom CSS (same dashboard); it applies to all IDX pages. |
| **5** | Mobile: Check Search Results on a phone. If the iframe is cramped, we can adjust our wrapper (e.g. min-height, full-width) in `SearchResults.module.css`. |
| **6** | **Results not filtering (e.g. $200K+ still shows $24M listings):** Click "Open results in new tab" in the footer and check the URL (should contain `lp=200000`, `hp=`, `ba=`). If the URL has the right params but IDX still shows wrong results, the issue is in IDX: check **Global Preferences** or **Results Page** settings in the IDX dashboard for anything that overrides URL parameters or default sort. |
| **7** | **Listing detail page:** Our header now has "Back to results" (returns to the list) and "Home". The file `docs/idx-custom-css-for-dashboard.css` includes rules to hide IDX’s duplicate "Back to results" bar and to apply teal to listing detail. Re-paste that file into **Designs → Custom CSS** if you had an older version. If hiding the bar removes too much (e.g. the whole nav), inspect the listing page and replace the selector with a more specific one. |
