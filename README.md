# Tip calculator PWA

A clean, minimal tip calculator that actually works when you need it. Built this because my phone always loses service right when the check arrives. 

## Why I built this

Ever notice how restaurant cell service is basically nonexistent? Like they're all built inside Faraday cages or something. I got tired of doing tip math on napkins (and being wrong half the time), so I built a calculator that works offline. Once you load it once, it's yours forever. No internet required.

## Features

**Auto-calculate** - Results update as you type. No submit button nonsense.  
**iPhone optimized** - Big buttons for when you're holding a beer in the other hand  
**Dark mode** - Because squinting at your phone in a dim restaurant is the worst  
**Works offline** - Service Worker magic means it works in the cell phone dead zone  
**Install to home screen** - Looks and feels like a real app (because it basically is)  
**Learn mode** - Shows the actual math so you can get better at this stuff  
**Multiple tips at once** - Shows 10%, 15%, 18%, 20% all at the same time  
**Custom tip** - For when you want to leave exactly 17.5% for some reason  
**Bill splitting** - Calculates per-person automatically (no more "I'll Venmo you")  

## Deploying to Vercel

Three ways to ship this thing. Pick whatever feels right.

### Option 1: Deploy via Vercel CLI (what I usually do)

Install the Vercel CLI if you haven't already:
```bash
npm install -g vercel
```

Navigate to the project folder:
```bash
cd tip-calculator
```

Deploy it:
```bash
vercel
```

Follow the prompts. Vercel's pretty smart about figuring out what you're trying to do.

### Option 2: Deploy via Vercel dashboard

1. Head to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your Git repository (or just drag the folder in like it's 1999)
4. Vercel will figure out the settings
5. Click "Deploy" and you're done

### Option 3: One-click deploy

If you're feeling lucky:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=YOUR_REPO_URL)

## Installing as PWA on iPhone

This is the cool part. You can install this like a real app:

1. Open your deployed URL in Safari (has to be Safari, not Chrome)
2. Tap the Share button (the square with the arrow pointing up)
3. Scroll down and tap "Add to Home Screen"
4. Name it something short like "Tip Calc"
5. Tap "Add"

Boom. You now have an app that works anywhere, even in that restaurant basement with zero bars of signal.

## How to actually use it

1. **Enter your bill** - Just the pre-tax amount
2. **Set number of people** - Defaults to 1, bump it up if you're splitting
3. **Check the results** - See all the standard tips instantly
4. **Want to understand the math?** - Tap "Learn Math" on any card
5. **Need a weird percentage?** - There's a custom tip field for that
6. **Dark mode** - Tap the sun/moon button when the lights are low

## Project structure

Here's what's under the hood:
```
tip-calculator/
├── index.html           # Main HTML structure
├── styles.css           # Styling with dark mode support
├── app.js              # Calculator logic (the fun part)
├── manifest.json       # PWA configuration
├── service-worker.js   # Offline functionality magic
├── icon.svg            # App icon
└── README.md           # You're reading it
```

## Technical details

The nerdy stuff that makes me happy:

- **Zero dependencies** - Just HTML, CSS, and JavaScript. No npm install nightmare.
- **Tiny footprint** - Entire app is under 50KB (your average Medium article is bigger)
- **Lightning fast** - Instant load, instant calculations
- **Actually accessible** - Semantic HTML and ARIA labels where they matter
- **Responsive** - Works on any screen (tested on my kid's tablet)
- **Offline-first** - Service Worker caches everything

## Want to customize it?

### Change the colors

Edit the CSS variables in `styles.css`:
```css
:root {
    --accent: #2563eb;  /* Main blue color */
    --success: #16a34a; /* Custom tip color */
    /* ... more colors */
}
```

### Change the tip percentages

Edit the `standardTips` array in `app.js`:
```javascript
const standardTips = [10, 15, 18, 20]; // Change to whatever you want
```

## Browser support

Works everywhere that matters:

- Safari (iOS 13+)
- Chrome (Android & iOS)
- Firefox
- Edge

## License

Do whatever you want with this. Seriously. Fork it, break it, make it better. Just ship something.

---

Made for everyone who's ever panicked when the check arrived and their phone showed "No Service"
