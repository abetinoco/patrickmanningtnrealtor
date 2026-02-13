# IDX Pagination Not Working – Troubleshooting Guide

When pagination clicks don't work, the cause is often **not** CSS. Use these steps to narrow it down.

## IDX Forum Findings (verified)

| Issue | Fix | Source |
|-------|-----|--------|
| **Smooth scrolling** blocks clicks/scroll | Disable `scroll-behavior: smooth` on the page that contains IDX | [Forum #1646](https://developers.idxbroker.com/forums/reply/1646) – "turned off smooth scrolling in theme, fixed it" |
| **`.ui-dialog` display:none** breaks pagination AJAX | Remove that rule; only hide `.ui-widget-overlay` | Multiple forum threads |
| **Overlay blocking** | Use `pointer-events: none` instead of `display: none` so clicks pass through | Safer than hiding; IDX JS may depend on overlay |
| **`[class*="idx-results-refinement"]` too broad** | Use only `.idx-results-refinement` (exact class) for refinement bar styling. The attribute selector matches parent wrappers (e.g. `idx-results-refinement-view`) that contain pagination, so button/overflow rules can accidentally affect it | This codebase |
| **`--idx-button-color` on refinement** | Don't set this on refinement bar; IDX may use it for pagination or other components | This codebase |
| **Theme/wrapper scripts** conflict | Use static wrapper; remove scripts one-by-one; check console | [Common Issues](https://developers.idxbroker.com/lesson/common-issuesquestions) |

---

## Step 1: Rule out our CSS (5 min)

**Temporarily remove all custom CSS** from IDX Dashboard → Designs → Custom CSS (Global and Results). Clear both slots, save, and hard-refresh (Ctrl+Shift+R / Cmd+Shift+R).

**Test pagination.**  
- If it **works** → Our CSS is conflicting. Use Step 1b to find the rule.  
- If it **still doesn't work** → The problem is elsewhere (steps below).

### Step 1b: Isolate the conflicting rule (if Step 1 showed CSS is the cause)

1. Clear IDX Custom CSS again.
2. Paste **only** the pagination + overlay rules from `docs/idx-css/minimal-pagination.css`. Save, hard-refresh, test.
3. If pagination works, add the refinement bar button styling from `all-in-one.css` (the `.idx-results-refinement button` block). Test again.
4. If it breaks at step 3, the refinement button styling conflicts with pagination – try Results-only CSS instead of Global, or leave refinement buttons navy.

---

## Step 2: Inspect the pagination links

1. Right-click a page number (e.g. "2") → **Inspect**.
2. In DevTools, check the `<a>` tag:
   - **Valid href?** e.g. `href="https://patrickmanningrealtor.idxbroker.com/idx/results/listings?start=11"`  
     → Link should work; something is blocking clicks.
   - **Empty or javascript:** `href="#"` or `href="javascript:void(0)"`  
     → Pagination depends on JavaScript; check Step 3.
   - **No visible number?** (empty link text)  
     → CSS or markup issue; numbers may be hidden or missing.

---

## Step 3: Check for JavaScript errors (CRITICAL)

1. Open **DevTools** (F12) → **Console** tab.
2. Refresh the results page.
3. Note any **red errors**.

### "Uncaught SyntaxError: Illegal return statement" (VM…)

This error **breaks pagination**. It means `return` is used outside a function. Common sources:

1. **IDX Dashboard → Designs → Javascript in Control Panel**  
   Check for any custom JavaScript. A stray `return` at the top level causes this. Remove or fix it.

2. **IDX Global Wrapper / Sub-headers**  
   If you use custom HTML/JS in your wrapper, search for `return` outside of functions.

3. **Your site's scripts** (if IDX is in an iframe)  
   The error may be in the parent page. Check your React/Vite app and third-party scripts (e.g. Vercel Analytics).

4. **Browser extensions**  
   Disable extensions and retest.

**Fix:** Remove or correct the illegal `return`. Until this error is gone, pagination will not work.

---

Other common causes (per IDX Common Issues):
- Conflicting scripts in your **Global Wrapper** or **Sub-headers**
- jQuery or other libraries loading twice
- Ad blockers or extensions blocking IDX scripts

**Next step:** In IDX Dashboard → **Designs → Pages**, switch to a **Static Wrapper** (or minimal template). Test pagination again. If it works, the issue is in your custom wrapper scripts.

---

## Step 4: IDX Dashboard settings

In **Preferences → Global Preferences → Results**:
- Confirm **Results per page** is set (e.g. 10 or 24).
- Confirm pagination is enabled (no “hide pagination” option turned on).

In **Designs → Pages**:
- Ensure the **Results** page uses a supported template.
- If you use a custom wrapper, temporarily switch to the default IDX template and test pagination.

---

## Step 5: How the site embeds IDX

If IDX is embedded in an **iframe** on your site:
- A parent container with `overflow: hidden` can block interaction.
- An overlay or modal on the parent page can cover the iframe.

Check your site’s layout and any full‑page overlays or modals that might sit over the iframe.

---

## Step 6: Contact IDX Support

If none of the above helps:
1. Note what you’ve already tried.
2. Share any console errors (screenshots or copy/paste).
3. Describe how you embed IDX (iframe, direct link, wrapper type).
4. Contact **IDX Broker Support** or post in the **IDX Developer Forums**.

---

## Quick test: direct IDX URL

Open the results page **directly** in a new tab (e.g. `https://patrickmanningrealtor.idxbroker.com/idx/results/...`) instead of via your site’s page.

- If pagination **works** on the direct URL → Your site’s embed or wrapper is likely the cause.  
- If it **doesn’t work** → The issue is in IDX (settings, template, or their platform).
