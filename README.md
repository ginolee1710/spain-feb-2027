# Spain Feb 2027 itinerary (static)

Plain HTML / CSS / JS single-page itinerary for Gino + GF (Fri 12 – Sat 20 Feb 2027).
No build step, no dependencies. Styled like the portfolio-preview site (sticky nav, light/dark, cards).

```
index.html      full itinerary (spine, days, hotels, flights, pending)
styles.css      portfolio-style + warm trip accents
script.js       theme toggle, mobile nav, day-nav, local checklist
photos/         landmark + hotel style-reference images
photos/SOURCES.md  CDN URLs + captions notes
.nojekyll       GitHub Pages: serve as-is
```

## Preview locally
Open `index.html` in a browser, or:

```bash
cd spain-feb-2027-site
python3 -m http.server 8000
```

Then visit http://localhost:8000

## Publish to GitHub Pages (later)
1. Create a repo and upload **this folder’s contents** to the root (or `/docs`).
2. Settings → Pages → Deploy from branch → `main` / root.
3. Optional: encrypt with StatiCrypt before publish (same flow as portfolio-preview). Keep the password out of git and out of this README.

The published page is password-gated. The unlock password is not stored in this repository.

## Notes
- Nothing is booked. GF feedback is the booking blocker.
- Hotel photos are **style references** — confirm the live property on Booking.com.
- Currency HKD. Prices as of 25 Oct 2026 HKT.
