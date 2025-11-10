# 💰 Tip Calculator PWA

A clean, minimal tip calculator designed for iPhone with offline support. Works perfectly even without cell service!

## Features

✨ **Auto-Calculate** - Results update as you type  
📱 **iPhone Optimized** - Large touch targets, perfect for one-handed use  
🌙 **Dark Mode** - Easy on the eyes in restaurants  
📴 **Offline Support** - Works without internet after first visit  
🏠 **PWA** - Install to home screen like a native app  
🧮 **Learn Mode** - Expandable math breakdowns to improve mental math  
💯 **Multiple Tips** - Shows 10%, 15%, 18%, 20% simultaneously  
✏️ **Custom Tip** - Optional field for any percentage  
👥 **Bill Splitting** - Automatic per-person calculation  

## Deploying to Vercel

### Option 1: Deploy via Vercel CLI (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Navigate to the project folder:
```bash
cd tip-calculator
```

3. Deploy:
```bash
vercel
```

4. Follow the prompts - it will guide you through the setup

### Option 2: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your Git repository (or drag & drop the folder)
4. Vercel will auto-detect the settings
5. Click "Deploy"

### Option 3: One-Click Deploy

Click this button to deploy instantly:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=YOUR_REPO_URL)

## Installing as PWA on iPhone

1. Open the deployed URL in Safari
2. Tap the Share button (square with arrow)
3. Scroll down and tap "Add to Home Screen"
4. Name it "Tip Calc" (or whatever you prefer)
5. Tap "Add"

Now you have a native-like app that works offline! 🎉

## Usage

1. **Enter Bill Amount** - Type in your pre-tax bill
2. **Set Number of People** - Defaults to 1, increase if splitting
3. **View Results** - See 10%, 15%, 18%, 20% tips instantly
4. **Learn Math** - Tap "Learn Math" on any card to see the breakdown
5. **Custom Tip** - (Optional) Enter a custom percentage if needed
6. **Dark Mode** - Tap the sun/moon button at the bottom

## Project Structure

```
tip-calculator/
├── index.html           # Main HTML structure
├── styles.css           # Styling with dark mode
├── app.js              # Calculator logic
├── manifest.json       # PWA configuration
├── service-worker.js   # Offline functionality
├── icon.svg            # App icon
└── README.md           # This file
```

## Technical Details

- **No dependencies** - Pure HTML, CSS, and JavaScript
- **Lightweight** - Entire app is < 50KB
- **Fast** - Instant load and calculation
- **Accessible** - Semantic HTML and ARIA labels
- **Responsive** - Works on any screen size
- **Offline-first** - Service Worker caches all assets

## Customization

### Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --accent: #2563eb;  /* Main blue color */
    --success: #16a34a; /* Custom tip color */
    /* ... more colors */
}
```

### Tip Percentages

Edit the `standardTips` array in `app.js`:

```javascript
const standardTips = [10, 15, 18, 20]; // Change these values
```

## Browser Support

- ✅ Safari (iOS 13+)
- ✅ Chrome (Android & iOS)
- ✅ Firefox
- ✅ Edge

## License

Free to use and modify as you wish!

---

Made with ❤️ for better tipping
