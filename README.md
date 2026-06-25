# Vitou & Carmen's Wedding Website (oppakimchi.github.io)

A personal website for our wedding! I've been building this to help guests see the order of service, songs, and RSVP details.

QR code generator: 
https://www.nayuki.io/page/qr-code-generator-library
https://github.com/nayuki/QR-Code-generator 

## Getting started

- Requirements: Node.js (LTS recommended)
- Install dependencies:

```bash
npm install
```

- Run the site locally:

```bash
npm start
```

Then open http://localhost:3000 in your browser.

---

## Recent Updates & What I've Learned

Here is a summary of the recent features I've added to the site!

### 1. Adding New Songs with Translations
I added a 4th song to the ceremony ("Amazing Grace - My Chains Are Gone"). Because the site is bilingual (English and Khmer), I learned that I can't just type the text in the HTML. I have to use a `data-i18n` attribute in the HTML and then add the actual lyrics in `translations.js`.

**HTML Example:**
```html
<h3 data-i18n="song4-title">Recessional Song</h3>
<p class="song-meta"><strong data-i18n="song4-name">Amazing Grace (My Chains Are Gone)</strong></p>
<div class="song-lyrics" data-i18n="song4-lyrics" data-i18n-html></div>
```

**JavaScript Example (`translations.js`):**
```javascript
"song4-name": { 
    en: "Amazing Grace (My Chains Are Gone)", 
    km: "Amazing Grace (My Chains Are Gone)" 
},
```

### 2. Family Photo Groupings
I added an ordered list to the 11:50 AM "Family Photos" schedule. To make it look neat, I used an `<ol>` tag and added each group of friends and family as an `<li>`. I also hooked every single line up to the translation file so our Khmer-speaking guests can read it too!

### 3. Fixing the 12:00 PM "Light Refreshments" Bug
I ran into a super tricky bug! I was trying to change the 12:00 PM text in `index.html` to say *"We invite you to enjoy some light refreshments including Bánh mì..."*, but it kept reverting to the old "Intermission" text every time the page loaded. 

I learned that my `translations.js` script was overwriting my HTML changes on page load! To fix it, I just updated the text directly in the JavaScript dictionary instead of the HTML.

### 4. Adding a Wishing Well
I built a nice, elegant box for the Wishing Well so people know our bank details if they want to give a gift. I used some simple CSS styling to give it a soft background and dashed border so it stands out but still matches the wedding theme.

### 5. Blocking AI Bots and Web Scrapers
I wanted to make sure random AI bots (like ChatGPT) and Google don't scan our private wedding details. I learned two cool tricks to stop them:

First, I created a `robots.txt` file to block the web crawlers:
```txt
User-agent: *
Disallow: /

User-agent: GPTBot
Disallow: /
```

Second, I added a `<meta>` tag into the `<head>` of my `index.html` file to tell browsers strictly not to index the page:
```html
<meta name="robots" content="noindex, nofollow, noarchive, nosnippet">
```
