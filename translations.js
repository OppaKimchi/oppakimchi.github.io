// ─── Translations ───
// Each key maps to { en: "English text", km: "Khmer text" }
// Keys match data-i18n attributes in the HTML.
// Replace [KM] placeholders with real Khmer translations.

const translations = {

    // ── Shared: Nav ──
    "nav-order":        { en: "Order of Service",   km: "កម្មវិធីពិធី" },
    "nav-songs":        { en: "Songs",              km: "បទចម្រៀង" },
    "nav-bible":        { en: "Bible Readings",     km: "អត្ថបទព្រះគម្ពីរ" },
    "nav-seating":      { en: "Reception Seating",  km: "កន្លែងអង្គុយ" },
    "nav-menu":         { en: "Banquet Menu",       km: "មុខម្ហូប" },
    "nav-back-ceremony":{ en: "Ceremony",           km: "ពិធីមង្គលការ" },
    "nav-venue":        { en: "Venue & Parking",    km: "ទីកន្លែង និងចំណត" },

    // ── Shared: Footer ──
    "footer":           { en: "Vitou & Carmen · 27 June 2026 · Made with", km: "វិទូ និង ការមិន · ២៧ មិថុនា ២០២៦ · ធ្វើដោយ" },

    // ── Shared: Countdown labels ──
    "cd-days":          { en: "Days",   km: "ថ្ងៃ" },
    "cd-hours":         { en: "Hours",  km: "ម៉ោង" },
    "cd-mins":          { en: "Mins",   km: "នាទី" },
    "cd-secs":          { en: "Secs",   km: "វិនាទី" },

    // ══════════════════════════════════════════
    // ── index.html ──
    // ══════════════════════════════════════════

    // Hero
    "hero-eyebrow":     { en: "Wedding Day",                km: "ថ្ងៃមង្គលការ" },
    "hero-title":       { en: "Vitou & Carmen",             km: "វិទូ និង ការមិន" },
    "hero-date":        { en: "Saturday, 27 June 2026",     km: "ថ្ងៃសៅរ៍ ២៧ មិថុនា ២០២៦" },
    "hero-subtitle":    { en: "A simple guide to the ceremony, the afternoon break, and the evening banquet.", km: "មគ្គុទ្ទេសក៍សម្រាប់ពិធីមង្គលការ ពេលសម្រាក និងពិធីជប់លៀង។" },

    // Order of Events
    "events-title":     { en: "The Order of Events",        km: "កម្មវិធីតាមលំដាប់" },
    "events-desc":      { en: "Everything you need for the day in one place.", km: "ព័ត៌មានទាំងអស់សម្រាប់ថ្ងៃពិធី។" },

    "event1-title":     { en: "The I Do's",                 km: "ពិធីស្បថ" },
    "event1-venue":     { en: "St George's Hurstville Anglican Church", km: "វិហារ St George's Hurstville Anglican" },
    "event1-note":      { en: "Please arrive by 10:15 AM to be seated.", km: "សូមអញ្ជើញមកដល់មុនម៉ោង ១០:១៥ ព្រឹក។" },

    "event2-title":     { en: "Family Photos",              km: "រូបថតគ្រួសារ" },
    "event2-desc":      { en: "Immediate family and friends will be asked to stay for photos at the church.", km: "គ្រួសារ និងមិត្តភក្តិជិតស្និទ្ធ សូមនៅថតរូបនៅវិហារ។" },

    "event3-title":     { en: "Intermission",               km: "ពេលសម្រាក" },
    "event3-desc":      { en: "We invite you to rest, refresh, or explore Hurstville during the afternoon break.", km: "សូមអញ្ជើញសម្រាក ឬដើរកម្សាន្តនៅ Hurstville។" },

    "event4-title":     { en: "The Banquet",                km: "ពិធីជប់លៀង" },
    "event4-venue":     { en: "Taste of Shunde (Forest Road, Hurstville)", km: "Taste of Shunde (Forest Road, Hurstville)" },
    "event4-note":      { en: "Join us for a feast to celebrate!", km: "សូមអញ្ជើញមកចូលរួមពិធីជប់លៀង!" },

    // Wedding Party
    "party-title":      { en: "The Wedding Party",          km: "ក្រុមអ្នករៀបចំពិធី" },
    "party-desc":       { en: "The people helping us celebrate and keep the day running smoothly.", km: "អ្នកដែលជួយយើងក្នុងថ្ងៃពិសេសនេះ។" },
    "party-bridesmaids":{ en: "Bridesmaids:",               km: "នារីកិត្តិយស:" },
    "party-groomsmen":  { en: "Groomsmen:",                 km: "បុរសកិត្តិយស:" },
    "party-officiant":  { en: "Officiant:",                 km: "អ្នកប្រារព្ធពិធី:" },
    "party-preacher":   { en: "Preacher:",                  km: "អ្នកអធិប្បាយ:" },

    // Venues
    "venues-title":     { en: "Venues, Maps & Parking",     km: "ទីកន្លែង ផែនទី និងចំណតរថយន្ត" },
    "venues-desc":      { en: "Tap a map link for directions, then plan a little extra time for parking and walking in.", km: "ចុចតំណផែនទីដើម្បីមើលផ្លូវ។ សូមគិតពេលវេលាបន្ថែមសម្រាប់ចត និងដើរចូល។" },

    "venue-ceremony-label": { en: "Ceremony",               km: "ពិធីមង្គលការ" },
    "venue-ceremony-name":  { en: "St George's Hurstville Anglican Church", km: "វិហារ St George's Hurstville Anglican" },
    "venue-ceremony-desc":  { en: "Arrive by 10:15 AM so everyone can be seated before the ceremony begins.", km: "សូមមកដល់មុនម៉ោង ១០:១៥ ដើម្បីអង្គុយមុនពិធីចាប់ផ្ដើម។" },
    "venue-ceremony-map":   { en: "Open in Google Maps",    km: "បើកក្នុង Google Maps" },
    "venue-ceremony-park":  { en: "Parking: Allow time to find street parking nearby and walk in calmly.", km: "ចំណត៖ សូមគិតពេលវេលាស្វែងរកកន្លែងចត និងដើរចូល។" },
    "venue-ceremony-time":  { en: "Best arrival window: 10:00 AM - 10:15 AM.", km: "ពេលមកដល់ល្អបំផុត៖ ១០:០០ - ១០:១៥ ព្រឹក។" },

    "venue-reception-label":{ en: "Reception",              km: "ពិធីជប់លៀង" },
    "venue-reception-name": { en: "Taste of Shunde",        km: "Taste of Shunde" },
    "venue-reception-desc": { en: "Forest Road, Hurstville. We'll gather here for the banquet at 5:30 PM.", km: "Forest Road, Hurstville។ យើងនឹងជួបគ្នានៅទីនេះម៉ោង ៥:៣០ ល្ងាច។" },
    "venue-reception-map":  { en: "Open in Google Maps",    km: "បើកក្នុង Google Maps" },
    "venue-reception-park": { en: "Parking: Check for nearby street parking or public parking before the dinner rush.", km: "ចំណត៖ ស្វែងរកកន្លែងចតមុនពេលល្ងាច។" },
    "venue-reception-time": { en: "Best arrival window: 5:15 PM - 5:30 PM.", km: "ពេលមកដល់ល្អបំផុត៖ ៥:១៥ - ៥:៣០ ល្ងាច។" },

    // Photos
    "photos-title":     { en: "Photo Highlights",           km: "រូបថតពិសេស" },
    "photos-desc":      { en: "Three moments from the day we wanted to share with everyone.", km: "បីរូបភាពពីថ្ងៃពិសេសរបស់យើង។" },
    "photo1-caption":   { en: "Golden hour by the water.",   km: "ពេលល្ងាចនៅមាត់ទឹក។" },
    "photo2-caption":   { en: "Walking together through the city.", km: "ដើរជាមួយគ្នាក្នុងទីក្រុង។" },
    "photo3-caption":   { en: "A quiet moment in the park.", km: "ពេលវេលាស្ងប់ស្ងាត់ក្នុងសួន។" },

    // ══════════════════════════════════════════
    // ── songs.html ──
    // ══════════════════════════════════════════

    "songs-eyebrow":    { en: "Ceremony Music",             km: "តន្ត្រីពិធី" },
    "songs-title":      { en: "Songs",                      km: "បទចម្រៀង" },
    "songs-date":       { en: "Worship & Celebration",      km: "ការថ្វាយបង្គំ និងការអបអរ" },
    "songs-subtitle":   { en: "The songs chosen for our ceremony — hymns of praise, love, and thanksgiving.", km: "បទចម្រៀងដែលយើងបានជ្រើសរើសសម្រាប់ពិធី — ទំនុកសរសើរ ស្នេហា និងអំណរគុណ។" },

    "songs-section-title": { en: "Ceremony Songs",          km: "បទចម្រៀងពិធី" },
    "songs-section-desc":  { en: "The music that will accompany our wedding ceremony.", km: "តន្ត្រីដែលនឹងច្រៀងក្នុងពិធីមង្គលការ។" },

    "song1-title":      { en: "Processional Song",          km: "បទចម្រៀងចូលពិធី" },
    "song2-title":      { en: "Congregational Song",        km: "បទចម្រៀងសមាជិក" },
    "song3-title":      { en: "Worship Song",               km: "បទថ្វាយបង្គំ" },
    "song4-title":      { en: "Recessional Song",           km: "បទចម្រៀងចេញពិធី" },
    "song-tba":         { en: "To be announced",            km: "នឹងប្រកាសនៅពេលក្រោយ" },

    "songs-note-title": { en: "A Note on the Music",        km: "ចំណាំអំពីតន្ត្រី" },
    "songs-note-desc":  { en: "Carmen and I chose these songs because they reflect the heart of our relationship and our faith in Jesus. We hope you'll sing along with us!", km: "ការមិន និងខ្ញុំបានជ្រើសរើសបទទាំងនេះព្រោះវាឆ្លុះបញ្ចាំងពីទំនាក់ទំនង និងជំនឿរបស់យើងលើព្រះយេស៊ូ។ សង្ឃឹមថាអ្នកទាំងអស់គ្នានឹងច្រៀងជាមួយយើង!" },

    // ══════════════════════════════════════════
    // ── bible-readings.html ──
    // ══════════════════════════════════════════

    "bible-eyebrow":    { en: "Scripture",                   km: "ព្រះគម្ពីរ" },
    "bible-title":      { en: "Bible Readings",              km: "អត្ថបទព្រះគម្ពីរ" },
    "bible-date":       { en: "God's Word for Our Day",      km: "ព្រះបន្ទូលសម្រាប់ថ្ងៃរបស់យើង" },
    "bible-subtitle":   { en: "The passages of Scripture chosen to be read during our ceremony.", km: "អត្ថបទព្រះគម្ពីរដែលបានជ្រើសរើសអានក្នុងពិធី។" },

    "bible-section-title": { en: "Scripture Readings",       km: "អត្ថបទព្រះគម្ពីរ" },
    "bible-section-desc":  { en: "The passages that will be shared during the ceremony.", km: "អត្ថបទដែលនឹងអានក្នុងពិធី។" },

    "reading1-label":   { en: "Bible Reading",                km: "អត្ថបទព្រះគម្ពីរ" },
    "reading2-label":   { en: "Second Reading",              km: "អត្ថបទទី ២" },
    "reading3-label":   { en: "Third Reading",               km: "អត្ថបទទី ៣" },
    "reading-tba":      { en: "To be announced",             km: "នឹងប្រកាសនៅពេលក្រោយ" },
    "reading-placeholder": { en: "The scripture passage will be shared here closer to the wedding day.", km: "អត្ថបទព្រះគម្ពីរនឹងបង្ហាញនៅទីនេះនៅពេលជិតដល់ថ្ងៃមង្គលការ។" },

    "bible-why-title":  { en: "Why These Passages",          km: "ហេតុអ្វីបានជ្រើសរើសអត្ថបទទាំងនេះ" },
    "bible-why-desc":   { en: "These readings were chosen because they speak to the promises we are making and the love that brought us together. We hope they encourage you as much as they encourage us.", km: "អត្ថបទទាំងនេះត្រូវបានជ្រើសរើសព្រោះវានិយាយពីសេចក្ដីសន្យា និងស្នេហាដែលផ្សារភ្ជាប់យើង។ សង្ឃឹមថាវានឹងលើកទឹកចិត្តអ្នកដូចដែលវាលើកទឹកចិត្តយើង។" },

    // ══════════════════════════════════════════
    // ── seating.html ──
    // ══════════════════════════════════════════

    "seating-eyebrow":  { en: "Reception Seating",           km: "កន្លែងអង្គុយ" },
    "seating-title":    { en: "Taste of Shunde Banquet",     km: "ពិធីជប់លៀង Taste of Shunde" },
    "seating-date":     { en: "Find Your Seat",              km: "ស្វែងរកកន្លែងអង្គុយ" },
    "seating-subtitle": { en: "Search by first or last name to see your table.", km: "ស្វែងរកតាមឈ្មោះដើម្បីមើលតុរបស់អ្នក។" },

    "seating-section-title": { en: "Guest Search",           km: "ស្វែងរកភ្ញៀវ" },
    "seating-section-desc":  { en: "Type your first or last name below to find your table.", km: "សូមវាយឈ្មោះរបស់អ្នកខាងក្រោមដើម្បីស្វែងរកតុ។" },
    "seating-search-label":  { en: "Search guest name",      km: "ស្វែងរកឈ្មោះភ្ញៀវ" },
    "seating-search-placeholder": { en: "Enter your name...", km: "វាយឈ្មោះរបស់អ្នក..." },
    "seating-search-hint":   { en: "Use at least two letters for the best result.", km: "សូមវាយយ៉ាងតិច ២ អក្សរ។" },
    "seating-empty":         { en: "Start typing to reveal your table assignment.", km: "សូមចាប់ផ្ដើមវាយដើម្បីមើលតុរបស់អ្នក។" },
    "seating-no-result":     { en: "No guest found. Please try searching a different name.", km: "រកមិនឃើញភ្ញៀវ។ សូមសាកល្បងឈ្មោះផ្សេង។" },
    "seating-guests-label":  { en: "Guests at this table:",  km: "ភ្ញៀវនៅតុនេះ:" },

    // ══════════════════════════════════════════
    // ── banquet-menu.html ──
    // ══════════════════════════════════════════

    "menu-eyebrow":     { en: "Banquet Menu",                km: "មុខម្ហូប" },
    "menu-title":       { en: "Taste of Shunde",             km: "Taste of Shunde" },
    "menu-date":        { en: "Wedding Banquet",             km: "ពិធីជប់លៀងមង្គលការ" },
    "menu-subtitle":    { en: "A preview of the dishes we will be serving at the reception.", km: "មុខម្ហូបដែលនឹងបម្រើក្នុងពិធីជប់លៀង។" },
    "menu-section-title": { en: "Banquet Menu",              km: "មុខម្ហូប" },

    // ══════════════════════════════════════════
    // ── reception/index.html (landing) ──
    // ══════════════════════════════════════════

    "reception-eyebrow":  { en: "Evening Reception",           km: "ពិធីជប់លៀងពេលល្ងាច" },
    "reception-title":    { en: "The Banquet",                 km: "ពិធីជប់លៀង" },
    "reception-date":     { en: "Saturday, 27 June 2026 · 5:30 PM", km: "ថ្ងៃសៅរ៍ ២៧ មិថុនា ២០២៦ · ៥:៣០ ល្ងាច" },
    "reception-subtitle": { en: "Everything you need for the evening celebration — venue details, seating, and menu.", km: "ព័ត៌មានទាំងអស់សម្រាប់ពិធីជប់លៀងពេលល្ងាច — ទីកន្លែង កន្លែងអង្គុយ និងមុខម្ហូប។" },
    "venue-reception-intro": { en: "Plan your journey to the banquet venue and arrive stress-free.", km: "រៀបចំដំណើរទៅទីកន្លែងជប់លៀង។" },
};


// ─── Language Engine ───

function getLanguage() {
    return localStorage.getItem('lang') || 'en';
}

function setLanguage(lang) {
    localStorage.setItem('lang', lang);
    applyLanguage(lang);
}

function applyLanguage(lang) {
    // Set lang attribute on <html>
    document.documentElement.lang = lang === 'km' ? 'km' : 'en';

    // Translate all [data-i18n] elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const entry = translations[key];
        if (!entry) return;

        const text = entry[lang] || entry['en'];

        // Check if element uses innerHTML (has data-i18n-html attribute)
        if (el.hasAttribute('data-i18n-html')) {
            el.innerHTML = text;
        } else {
            el.textContent = text;
        }
    });

    // Translate placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        const entry = translations[key];
        if (!entry) return;
        el.placeholder = entry[lang] || entry['en'];
    });

    // Update toggle button
    const btn = document.getElementById('lang-toggle');
    if (btn) {
        if (lang === 'km') {
            btn.innerHTML = '🇬🇧 <span>English</span>';
            btn.setAttribute('aria-label', 'Switch to English');
        } else {
            btn.innerHTML = '🇰🇭 <span>ខ្មែរ</span>';
            btn.setAttribute('aria-label', 'Switch to Khmer');
        }
    }
}

function toggleLanguage() {
    const current = getLanguage();
    setLanguage(current === 'en' ? 'km' : 'en');
}


// ─── Create Toggle Button ───

function createToggleButton() {
    const btn = document.createElement('button');
    btn.id = 'lang-toggle';
    btn.className = 'lang-toggle';
    btn.type = 'button';
    btn.addEventListener('click', toggleLanguage);
    document.body.appendChild(btn);
}


// ─── Init ───

document.addEventListener('DOMContentLoaded', () => {
    createToggleButton();
    applyLanguage(getLanguage());
});
