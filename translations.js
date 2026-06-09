// ─── Translations ───
// Each key maps to { en: "English text", km: "Khmer text" }
// Keys match data-i18n attributes in the HTML.
// Replace [KM] placeholders with real Khmer translations.

const translations = {

    // ── Shared: Nav ──
    "nav-order": { en: "Order of Service", km: "កម្មវិធីពិធី" },
    "nav-songs": { en: "Songs", km: "បទចម្រៀង" },
    "nav-bible": { en: "Bible Readings", km: "អត្ថបទព្រះគម្ពីរ" },
    "nav-helpers": { en: "Helpers", km: "អ្នកជួយ" },
    "nav-seating": { en: "Reception Seating", km: "កន្លែងអង្គុយ" },
    "nav-menu": { en: "Banquet Menu", km: "មុខម្ហូប" },
    "nav-back-ceremony": { en: "Ceremony", km: "ពិធីមង្គលការ" },
    "nav-venue": { en: "Venue & Parking", km: "ទីកន្លែង និងចំណត" },

    // ── Shared: Footer ──
    "footer": { en: "Vitou & Carmen · 27 June 2026 · Made with", km: "វិទូ និង ការមិន · ២៧ មិថុនា ២០២៦ · ធ្វើដោយ" },

    // ── Shared: Countdown labels ──
    "cd-days": { en: "Days", km: "ថ្ងៃ" },
    "cd-hours": { en: "Hours", km: "ម៉ោង" },
    "cd-mins": { en: "Mins", km: "នាទី" },
    "cd-secs": { en: "Secs", km: "វិនាទី" },

    // ══════════════════════════════════════════
    // ── index.html ──
    // ══════════════════════════════════════════

    // Hero
    "hero-eyebrow": { en: "Wedding Day", km: "ថ្ងៃមង្គលការ" },
    "hero-title": { en: "Vitou & Carmen", km: "វិទូ និង ការមិន" },
    "hero-date": { en: "Saturday, 27 June 2026", km: "ថ្ងៃសៅរ៍ ២៧ មិថុនា ២០២៦" },
    "hero-subtitle": { en: "A simple guide to the ceremony, the afternoon break, and the evening banquet.", km: "មគ្គុទ្ទេសក៍សម្រាប់ពិធីមង្គលការ ពេលសម្រាក និងពិធីជប់លៀង។" },

    // Order of Events
    "events-title": { en: "The Order of Events", km: "កម្មវិធីតាមលំដាប់" },
    "events-desc": { en: "Everything you need for the day in one place.", km: "ព័ត៌មានទាំងអស់សម្រាប់ថ្ងៃពិធី។" },

    "event1-title": { en: "The I Do's", km: "ពិធីស្បថ" },
    "event1-venue": { en: "St George's Hurstville Anglican Church", km: "វិហារ St George's Hurstville Anglican" },
    "event1-note": { en: "Please arrive by 10:15 AM to be seated.", km: "សូមអញ្ជើញមកដល់មុនម៉ោង ១០:១៥ ព្រឹក។" },

    "event2-title": { en: "Family Photos", km: "រូបថតគ្រួសារ" },
    "event2-desc": { en: "Immediate family and friends will be asked to stay for photos at the church.", km: "គ្រួសារ និងមិត្តភក្តិជិតស្និទ្ធ សូមនៅថតរូបនៅវិហារ។" },
    "photo-coordinators": { en: "Coordinators:", km: "អ្នកសម្របសម្រួល:" },
    "photo-group-1": { en: "Everyone", km: "ទាំងអស់គ្នា" },
    "photo-group-2": { en: "Vitou's Immediate Family", km: "គ្រួសារខាងវិទូ" },
    "photo-group-3": { en: "Vitou and Carmen's Immediate Family", km: "គ្រួសារខាងវិទូ និងការមិន" },
    "photo-group-4": { en: "Carmen's Immediate Family", km: "គ្រួសារខាងការមិន" },
    "photo-group-5": { en: "Vitou's Extended Family", km: "សាច់ញាតិខាងវិទូ" },
    "photo-group-6": { en: "Carmen's Extended Family", km: "សាច់ញាតិខាងការមិន" },
    "photo-group-7": { en: "Carmen's Family Friends + Family", km: "មិត្តភក្តិគ្រួសារខាងការមិន" },
    "photo-group-8": { en: "Carmen's Badminton Friends", km: "មិត្តភក្តិវាយសីខាងការមិន" },
    "photo-group-9": { en: "Vitou's Uni Friends", km: "មិត្តភក្តិសាកលវិទ្យាល័យខាងវិទូ" },
    "photo-group-10": { en: "Carmen's Uni Friends", km: "មិត្តភក្តិសាកលវិទ្យាល័យខាងការមិន" },
    "photo-group-11": { en: "St George's Hurstville Anglican", km: "សមាជិក St George's Hurstville Anglican" },
    "photo-group-12": { en: "Other Dear Friends", km: "មិត្តភក្តិជាទីស្រឡាញ់ដទៃទៀត" },

    "event3-title": { en: "Intermission", km: "ពេលសម្រាក" },
    "event3-desc": { en: "We invite you to rest, refresh, or explore Hurstville during the afternoon break.", km: "សូមអញ្ជើញសម្រាក ឬដើរកម្សាន្តនៅ Hurstville។" },

    "event4-title": { en: "The Banquet", km: "ពិធីជប់លៀង" },
    "event4-venue": { en: "Taste of Shunde (Forest Road, Hurstville)", km: "Taste of Shunde (Forest Road, Hurstville)" },
    "event4-note": { en: "Join us for a feast to celebrate!", km: "សូមអញ្ជើញមកចូលរួមពិធីជប់លៀង!" },

    // Wedding Party
    "party-title": { en: "The Wedding Party", km: "ក្រុមអ្នករៀបចំពិធី" },
    "party-desc": { en: "The people helping us celebrate and keep the day running smoothly.", km: "អ្នកដែលជួយយើងក្នុងថ្ងៃពិសេសនេះ។" },
    "party-family-bride": { en: "Family of the Bride", km: "គ្រួសារខាងកូនក្រមុំ" },
    "party-family-groom": { en: "Family of the Groom", km: "គ្រួសារខាងកូនកំលោះ" },
    "party-bridal": { en: "Bridal Party", km: "ក្រុមអ្នករៀបចំពិធី" },
    "party-grandma": { en: "Grandma:", km: "លោកយាយ:" },
    "party-father": { en: "Father:", km: "ឪពុក:" },
    "party-mother": { en: "Mother:", km: "ម្ដាយ:" },
    "party-brothers": { en: "Brothers:", km: "បងប្អូនប្រុស:" },
    "party-bridesmaids": { en: "Bridesmaids:", km: "នារីកិត្តិយស:" },
    "party-groomsmen": { en: "Groomsmen:", km: "បុរសកិត្តិយស:" },
    "party-officiant": { en: "Officiant:", km: "អ្នកប្រារព្ធពិធី:" },
    "party-preacher": { en: "Preacher:", km: "អ្នកអធិប្បាយ:" },

    // Venues
    "venues-title": { en: "Venues, Maps & Parking", km: "ទីកន្លែង ផែនទី និងចំណតរថយន្ត" },
    "venues-desc": { en: "Tap a map link for directions, then plan a little extra time for parking and walking in.", km: "ចុចតំណផែនទីដើម្បីមើលផ្លូវ។ សូមគិតពេលវេលាបន្ថែមសម្រាប់ចត និងដើរចូល។" },

    "venue-ceremony-label": { en: "Ceremony", km: "ពិធីមង្គលការ" },
    "venue-ceremony-name": { en: "St George's Hurstville Anglican Church", km: "វិហារ St George's Hurstville Anglican" },
    "venue-ceremony-desc": { en: "Arrive by 10:15 AM so everyone can be seated before the ceremony begins.", km: "សូមមកដល់មុនម៉ោង ១០:១៥ ដើម្បីអង្គុយមុនពិធីចាប់ផ្ដើម។" },
    "venue-ceremony-map": { en: "Open in Google Maps", km: "បើកក្នុង Google Maps" },
    "venue-ceremony-park": { en: "Parking: Allow time to find street parking nearby and walk in calmly.", km: "ចំណត៖ សូមគិតពេលវេលាស្វែងរកកន្លែងចត និងដើរចូល។" },
    "venue-ceremony-time": { en: "Best arrival window: 10:00 AM - 10:15 AM.", km: "ពេលមកដល់ល្អបំផុត៖ ១០:០០ - ១០:១៥ ព្រឹក។" },

    "venue-reception-label": { en: "Reception", km: "ពិធីជប់លៀង" },
    "venue-reception-name": { en: "Taste of Shunde", km: "Taste of Shunde" },
    "venue-reception-desc": { en: "Forest Road, Hurstville. We'll gather here for the banquet at 5:30 PM.", km: "Forest Road, Hurstville។ យើងនឹងជួបគ្នានៅទីនេះម៉ោង ៥:៣០ ល្ងាច។" },
    "venue-reception-map": { en: "Open in Google Maps", km: "បើកក្នុង Google Maps" },
    "venue-reception-park": { en: "Parking: Check for nearby street parking or public parking before the dinner rush.", km: "ចំណត៖ ស្វែងរកកន្លែងចតមុនពេលល្ងាច។" },
    "venue-reception-time": { en: "Best arrival window: 5:15 PM - 5:30 PM.", km: "ពេលមកដល់ល្អបំផុត៖ ៥:១៥ - ៥:៣០ ល្ងាច។" },

    // Photos
    "photos-title": { en: "Photo Highlights", km: "រូបថតពិសេស" },
    "photos-desc": { en: "Three moments from the day we wanted to share with everyone.", km: "បីរូបភាពពីថ្ងៃពិសេសរបស់យើង។" },
    "photo1-caption": { en: "Golden hour by the water.", km: "ពេលល្ងាចនៅមាត់ទឹក។" },
    "photo2-caption": { en: "Walking together through the city.", km: "ដើរជាមួយគ្នាក្នុងទីក្រុង។" },
    "photo3-caption": { en: "A quiet moment in the park.", km: "ពេលវេលាស្ងប់ស្ងាត់ក្នុងសួន។" },

    // ══════════════════════════════════════════
    // ── songs.html ──
    // ══════════════════════════════════════════

    "songs-eyebrow": { en: "Ceremony Music", km: "តន្ត្រីពិធី" },
    "songs-title": { en: "Songs", km: "បទចម្រៀង" },
    "songs-date": { en: "Worship & Celebration", km: "ការថ្វាយបង្គំ និងការអបអរ" },
    "songs-subtitle": { en: "The songs chosen for our ceremony — hymns of praise, love, and thanksgiving.", km: "បទចម្រៀងដែលយើងបានជ្រើសរើសសម្រាប់ពិធី — ទំនុកសរសើរ ស្នេហា និងអំណរគុណ។" },

    "songs-section-title": { en: "Ceremony Songs", km: "បទចម្រៀងពិធី" },
    "songs-section-desc": { en: "The music that will accompany our wedding ceremony.", km: "តន្ត្រីដែលនឹងច្រៀងក្នុងពិធីមង្គលការ។" },

    "song1-title": { en: "Processional Song", km: "បទចម្រៀងចូលពិធី" },
    "song1-name": { en: "Amazing Grace", km: "ព្រះគុណអស្ចារ្យ" },
    "song1-lyrics": { 
        en: "Amazing grace (how sweet the sound)\nthat saved a wretch like me!\nI once was lost, but now am found,\nwas blind, but now I see.\n\n 'Twas grace that taught my heart to fear,\nand grace my fears relieved;\nhow precious did that grace appear\nthe hour I first believed!\n\nThrough many dangers, toils and snares\nI have already come:\n'tis grace has brought me safe thus far,\nand grace will lead me home.\n\nWhen we’ve been there ten thousand years,\nBright shining as the sun,\nWe’ve no less days to sing God’s praise\nThan when we first begun,\nThan when we first begun.",
        km: "<i>Verses 1-3 align with the traditional Khmer Hymnal 97. Verse 4 is a direct translation of the appended \"ten thousand years\" verse, which is not traditionally part of the standard Khmer hymnal text.</i>\n\nVerse 1\nព្រះគុណអស្ចារ្យជាសព្ទពីរោះ\nដែលប្រោសមនុស្សយ៉ាងដូចខ្ញុំ\nពីដើមបាត់បង់តែទ្រង់សង្គ្រោះ\nក៏ខ្វាក់តែទ្រង់អប់រំ។\n\nVerse 2\nព្រះគុណបង្រៀនឱ្យកោតខ្លាចព្រះ\nក៏បានកម្ចាត់ភ័យទៅ\nព្រះគុណដែលទ្រង់ផ្តល់មកបានឈ្នះ\nឱ្យចិត្តខ្ញុំចូលស៊ប់នៅ។\n\nVerse 3\nព្រះគុណនាំខ្ញុំឱ្យរួចអន្ទាក់\nនិងការល្បួងលួងជាច្រើន\nមានតែព្រះគុណដែលនាំនោះជាក់\nខាងមុខនឹងប្រោសតន្ថើន។\n\nVerse 4\nនៅពេលយើងនៅទីនោះមួយម៉ឺនឆ្នាំ\nភ្លឺចែងចាំងដូចព្រះអាទិត្យ\nយើងមានថ្ងៃច្រៀងសរសើរព្រះអង្គ\nមិនតិចជាងពេលផ្ដើមពិត។"
    },
    "song2-title": { en: "Congregational Song", km: "បទចម្រៀងសមាជិក" },
    "song2-name": { en: "By Faith", km: "ដោយសេចក្តីជំនឿ" },
    "song2-lyrics": {
        en: "By faith, we see the hand of God\nIn the light of creation’s grand design;\nIn the lives of those who prove His faithfulness,\nWho walk by faith and not by sight.\n\nBy faith, our fathers roamed the earth\nWith the power of His promise in their hearts\nOf a holy city built by God’s own hand –\nA place where peace and justice reign.\n\nWe will stand as children of the promise,\nWe will fix our eyes on Him, our soul’s reward.\nTill the race is finished and the work is done,\nWe’ll walk by faith and not by sight.\n\nBy faith, the prophets saw a day\nWhen the longed-for Messiah would appear\nWith the power to break the chains of sin and death,\nAnd rise triumphant from the grave.\n\nBy faith, the church was called to go\nIn the power of the Spirit to the lost\nTo deliver captives and to preach good news,\nIn every corner of the earth.\nWe will stand as children of the promise,\nWe will fix our eyes on Him, our soul’s reward.\nTill the race is finished and the work is done,\nWe’ll walk by faith and not by sight.\n\nBy faith, this mountain shall be moved\nAnd the power of the gospel shall prevail,\nFor we know in Christ all things are possible\nFor all who call upon His name,\nFor all who call upon His name!\n\nWe will stand as children of the promise,\nWe will fix our eyes on Him, our soul’s reward.\nTill the race is finished and the work is done,\nWe’ll walk by faith and not by sight.\n\nWe will stand as children of the promise,\nWe will fix our eyes on Him, our soul’s reward.\nTill the race is finished and the work is done,\nWe’ll walk by faith and not by sight,\nWe’ll walk by faith and not by sight.\n\n©2009 Getty Music Publishing, Thankyou Music. CCLI #5469291",
        km: "<i>The following is a translated adaptation aligning with contemporary Khmer evangelical and Anglican terminology.</i>\n\nVerse 1\nដោយសេចក្ដីជំនឿ យើងឃើញព្រះហស្តព្រះអង្គ\nតាមរយៈពន្លឺនៃគម្រោងការបង្កើត\nក្នុងជីវិតអ្នកដែលបង្ហាញពីក្ដីស្មោះត្រង់ទ្រង់\nដែលដើរដោយជំនឿ មិនមែនដោយការមើលឃើញ។\n\nVerse 2\nដោយជំនឿ បុព្វបុរសយើងដើរលើផែនដី\nដោយអំណាចនៃសេចក្ដីសន្យាក្នុងចិត្ត\nអំពីទីក្រុងបរិសុទ្ធដែលព្រះសង់ផ្ទាល់ព្រះហស្ត\nជាកន្លែងសន្តិភាព និងយុត្តិធម៌សោយរាជ្យ។\n\nChorus\nយើងនឹងឈរជាកូននៃសេចក្ដីសន្យា\nយើងនឹងសម្លឹងទៅទ្រង់ ដែលជារង្វាន់នៃព្រលឹងយើង\nរហូតដល់ការប្រណាំងចប់ ហើយកិច្ចការបានសម្រេច\nយើងនឹងដើរដោយជំនឿ មិនមែនដោយការមើលឃើញ។\n\nVerse 3\nដោយជំនឿ ពួកហោរាបានឃើញថ្ងៃមួយ\nដែលព្រះមេស្ស៊ីដែលរង់ចាំនឹងលេចមក\nដោយអំណាចដើម្បីបំបែកច្រវាក់បាបនិងសេចក្ដីស្លាប់\nហើយរស់ឡើងវិញដោយជ័យជម្នះពីផ្នូរ។\n\nVerse 4\nដោយជំនឿ ព្រះវិហារត្រូវបានហៅឲ្យទៅ\nដោយអំណាចនៃព្រះវិញ្ញាណទៅកាន់អ្នកបាត់បង់\nដើម្បីរំដោះឈ្លើយ និងប្រកាសដំណឹងល្អ\nនៅគ្រប់ទិសទីនៃផែនដី។\n\n(Chorus)\nយើងនឹងឈរជាកូននៃសេចក្ដីសន្យា\nយើងនឹងសម្លឹងទៅទ្រង់ ដែលជារង្វាន់នៃព្រលឹងយើង\nរហូតដល់ការប្រណាំងចប់ ហើយកិច្ចការបានសម្រេច\nយើងនឹងដើរដោយជំនឿ មិនមែនដោយការមើលឃើញ។\n\nVerse 5\nដោយជំនឿ ភ្នំនេះនឹងត្រូវរើចេញ\nហើយអំណាចនៃដំណឹងល្អនឹងឈ្នះ\nដ្បិតយើងដឹងថាក្នុងព្រះគ្រីស្ទ អ្វីៗអាចធ្វើបាន\nសម្រាប់អ្នកដែលអំពាវនាវព្រះនាមទ្រង់\nសម្រាប់អ្នកដែលអំពាវនាវព្រះនាមទ្រង់!\n\n(Chorus x2)\nយើងនឹងឈរជាកូននៃសេចក្ដីសន្យា\nយើងនឹងសម្លឹងទៅទ្រង់ ដែលជារង្វាន់នៃព្រលឹងយើង\nរហូតដល់ការប្រណាំងចប់ ហើយកិច្ចការបានសម្រេច\nយើងនឹងដើរដោយជំនឿ មិនមែនដោយការមើលឃើញ។\n\nយើងនឹងឈរជាកូននៃសេចក្ដីសន្យា\nយើងនឹងសម្លឹងទៅទ្រង់ ដែលជារង្វាន់នៃព្រលឹងយើង\nរហូតដល់ការប្រណាំងចប់ ហើយកិច្ចការបានសម្រេច\nយើងនឹងដើរដោយជំនឿ មិនមែនដោយការមើលឃើញ\nយើងនឹងដើរដោយជំនឿ មិនមែនដោយការមើលឃើញ។"
    },
    "song3-title": { en: "Worship Song", km: "បទថ្វាយបង្គំ" },
    "song3-name": { en: "Yet Not I But Through Christ In Me", km: "មិនមែនខ្ញុំ តែព្រះគ្រីស្ទគង់ក្នុងខ្ញុំ" },
    "song3-lyrics": {
        en: "What gift of grace is Jesus my redeemer\nThere is no more for heaven now to give\nHe is my joy, my righteousness, and freedom\nMy steadfast love, my deep and boundless peace\n\nTo this I hold, my hope is only Jesus\nFor my life is wholly bound to his\nOh how strange and divine, I can sing: all is mine!\nYet not I, but through Christ in me\n\nThe night is dark but I am not forsaken\nFor by my side, the Saviour He will stay\nI labour on in weakness and rejoicing\nFor in my need, His power is displayed\n\nTo this I hold, my Shepherd will defend me\nThrough the deepest valley He will lead\nOh the night has been won, and I shall overcome!\nYet not I, but through Christ in me\n\nNo fate I dread, I know I am forgiven\nThe future sure, the price it has been paid\nFor Jesus bled and suffered for my pardon\nAnd He was raised to overthrow the grave\n\nTo this I hold, my sin has been defeated\nJesus now and ever is my plea\nOh the chains are released, I can sing: I am free!\nYet not I, but through Christ in me\n\nWith every breath I long to follow Jesus\nFor He has said that He will bring me home\nAnd day by day I know He will renew me\nUntil I stand with joy before the throne\n\nTo this I hold, my hope is only Jesus\nAll the glory evermore to Him\nWhen the race is complete, still my lips shall repeat:\nYet not I, but through Christ in me!\n\nTo this I hold, my hope is only Jesus\nAll the glory evermore to Him\nWhen the race is complete, still my lips shall repeat:\nYet not I, but through Christ in me!\n\nYet not I, but through Christ in me!\nYet not I, but through Christ in me!\n\n\n© 2018 CityAlight Music CCLI #7121852",
        km: "Verse 1\nតើព្រះយេស៊ូវជាព្រះប្រោសលោះមានព្រះគុណអ្វីខ្លះ\nស្ថានសួគ៌គ្មានអ្វីត្រូវប្រទានទៀតទេឥឡូវនេះ\nទ្រង់ជាអំណរ សេចក្ដីសុចរិត និងសេរីភាពខ្ញុំ\nជាក្ដីស្រឡាញ់ខ្ជាប់ខ្ជួន សន្តិភាពជ្រាលជ្រៅគ្មានព្រំដែន។\n\nចំពោះសេចក្ដីនេះខ្ញុំប្រកាន់ខ្ជាប់ ក្ដីសង្ឃឹមខ្ញុំគឺព្រះយេស៊ូវ\nដ្បិតជីវិតខ្ញុំជាប់ចំណងទាំងស្រុងនឹងទ្រង់\nអូ ចម្លែកនិងអស្ចារ្យណាស់ ខ្ញុំអាចច្រៀងថា៖ គ្រប់យ៉ាងជារបស់ខ្ញុំ!\nតែមិនមែនខ្ញុំទេ គឺព្រះគ្រីស្ទដែលគង់ក្នុងខ្ញុំ។\n\nVerse 2\nយប់ងងឹត តែខ្ញុំមិនត្រូវគេបោះបង់ឡើយ\nដ្បិតព្រះអង្គសង្គ្រោះ ទ្រង់គង់នៅក្បែរខ្ញុំ\nខ្ញុំបន្តធ្វើការក្នុងភាពខ្សោយ និងអំណរ\nព្រោះក្នុងគ្រាខ្វះខាត ឫទ្ធានុភាពទ្រង់បានសម្ដែង។\n\nចំពោះសេចក្ដីនេះខ្ញុំប្រកាន់ខ្ជាប់ អ្នកគង្វាលខ្ញុំនឹងការពារ\nទោះកាត់ជ្រលងភ្នំជ្រៅ ទ្រង់នឹងដឹកនាំ\nអូ យប់ត្រូវបានផ្ចាញ់ ហើយខ្ញុំនឹងឈ្នះ!\nតែមិនមែនខ្ញុំទេ គឺព្រះគ្រីស្ទដែលគង់ក្នុងខ្ញុំ។\n\nVerse 3\nខ្ញុំមិនខ្លាចវាសនា ខ្ញុំដឹងថាខ្ញុំត្រូវបានអត់ទោស\nអនាគតពិតប្រាកដ តម្លៃត្រូវបានបង់រួចហើយ\nដ្បិតព្រះយេស៊ូវបង្ហូរឈាម និងរងទុក្ខដើម្បីផ្ដល់ការលើកលែង\nហើយទ្រង់រស់ឡើងវិញ ដើម្បីផ្ដួលរំលំផ្នូរ។\n\nចំពោះសេចក្ដីនេះខ្ញុំប្រកាន់ខ្ជាប់ បាបខ្ញុំត្រូវបានបំផ្លាញ\nព្រះយេស៊ូវជាទីពឹងរបស់ខ្ញុំ ឥឡូវនិងរហូតតទៅ\nអូ ច្រវាក់ត្រូវបានស្រាយ ខ្ញុំអាចច្រៀងថា៖ ខ្ញុំមានសេរីភាព!\nតែមិនមែនខ្ញុំទេ គឺព្រះគ្រីស្ទដែលគង់ក្នុងខ្ញុំ។\n\nVerse 4\nរាល់ដង្ហើម ខ្ញុំប្រាថ្នាតាមព្រះយេស៊ូវ\nព្រោះទ្រង់មានបន្ទូលថា ទ្រង់នឹងនាំខ្ញុំទៅផ្ទះ\nហើយពីមួយថ្ងៃទៅមួយថ្ងៃ ខ្ញុំដឹងថាទ្រង់នឹងកែប្រែខ្ញុំថ្មី\nរហូតដល់ខ្ញុំឈរដោយអំណរនៅចំពោះបល្ល័ង្ក។\n\nចំពោះសេចក្ដីនេះខ្ញុំប្រកាន់ខ្ជាប់ ក្ដីសង្ឃឹមខ្ញុំគឺព្រះយេស៊ូវ\nសិរីល្អទាំងអស់ជារបស់ទ្រង់ជារៀងរហូត\nពេលការប្រណាំងចប់ បបូរមាត់ខ្ញុំនៅតែពោលថា៖\nតែមិនមែនខ្ញុំទេ គឺព្រះគ្រីស្ទដែលគង់ក្នុងខ្ញុំ!\n\nចំពោះសេចក្ដីនេះខ្ញុំប្រកាន់ខ្ជាប់ ក្ដីសង្ឃឹមខ្ញុំគឺព្រះយេស៊ូវ\nសិរីល្អទាំងអស់ជារបស់ទ្រង់ជារៀងរហូត\nពេលការប្រណាំងចប់ បបូរមាត់ខ្ញុំនៅតែពោលថា៖\nតែមិនមែនខ្ញុំទេ គឺព្រះគ្រីស្ទដែលគង់ក្នុងខ្ញុំ!\n\nតែមិនមែនខ្ញុំទេ គឺព្រះគ្រីស្ទដែលគង់ក្នុងខ្ញុំ!\nតែមិនមែនខ្ញុំទេ គឺព្រះគ្រីស្ទដែលគង់ក្នុងខ្ញុំ!"
    },
    "song4-title": { en: "Recessional Song", km: "បទចម្រៀងចេញពិធី" },
    "song4-name": { en: "Amazing Grace (My Chains Are Gone)", km: "Amazing Grace (My Chains Are Gone)" },
    "song4-lyrics": {
        en: "Amazing grace, how sweet the sound\nThat saved a wretch like me\nI once was lost, but now I'm found\nWas blind, but now I see\n\n'Twas grace that taught my heart to fear\nAnd grace my fears relieved\nHow precious did that grace appear\nThe hour I first believed\n\nMy chains are gone, I've been set free\nMy God, my Savior has ransomed me\nAnd like a flood, His mercy reigns\nUnending love, amazing grace\n\nThe Lord has promised good to me\nHis word my hope secures\nHe will my shield and portion be\nAs long as life endures\n\nMy chains are gone, I've been set free\nMy God, my Savior has ransomed me\nAnd like a flood, His mercy reigns\nUnending love, amazing grace\n\nThe earth shall soon dissolve like snow\nThe sun forbear to shine\nBut God, Who called me here below\nWill be forever mine\nWill be forever mine\nYou are forever mine",
        km: "<i>[Khmer lyrics to be added]</i>"
    },
    "song-tba": { en: "To be announced", km: "នឹងប្រកាសនៅពេលក្រោយ" },

    "songs-note-title": { en: "A Note on the Music", km: "ចំណាំអំពីតន្ត្រី" },
    "songs-note-desc": { en: "Carmen and I chose these songs because they reflect the heart of our relationship and our faith in Jesus. We hope you'll sing along with us!", km: "ការមិន និងខ្ញុំបានជ្រើសរើសបទទាំងនេះព្រោះវាឆ្លុះបញ្ចាំងពីទំនាក់ទំនង និងជំនឿរបស់យើងលើព្រះយេស៊ូ។ សង្ឃឹមថាអ្នកទាំងអស់គ្នានឹងច្រៀងជាមួយយើង!" },

    // ══════════════════════════════════════════
    // ── bible-readings.html ──
    // ══════════════════════════════════════════

    "bible-eyebrow": { en: "Scripture", km: "ព្រះគម្ពីរ" },
    "bible-title": { en: "Bible Readings", km: "អត្ថបទព្រះគម្ពីរ" },
    "bible-date": { en: "God's Word for Our Day", km: "ព្រះបន្ទូលសម្រាប់ថ្ងៃរបស់យើង" },
    "bible-subtitle": { en: "The passages of Scripture chosen to be read during our ceremony.", km: "អត្ថបទព្រះគម្ពីរដែលបានជ្រើសរើសអានក្នុងពិធី។" },

    "bible-section-title": { en: "Scripture Readings", km: "អត្ថបទព្រះគម្ពីរ" },
    "bible-section-desc": { en: "The passages that will be shared during the ceremony.", km: "អត្ថបទដែលនឹងអានក្នុងពិធី។" },

    "reading1-label": { en: "Bible Reading", km: "អត្ថបទព្រះគម្ពីរ" },
    "reading2-label": { en: "Second Reading", km: "អត្ថបទទី ២" },
    "reading3-label": { en: "Third Reading", km: "អត្ថបទទី ៣" },
    "reading-tba": { en: "To be announced", km: "នឹងប្រកាសនៅពេលក្រោយ" },
    "reading-placeholder": { en: "The scripture passage will be shared here closer to the wedding day.", km: "អត្ថបទព្រះគម្ពីរនឹងបង្ហាញនៅទីនេះនៅពេលជិតដល់ថ្ងៃមង្គលការ។" },

    "reading1-title": { en: "Matthew 11:25-30 (NIV)", km: "ម៉ាថាយ ១១:២៥-៣០" },
    "reading1-heading": { en: "The Father Revealed in the Son", km: "ព្រះបិតា និងព្រះបុត្រា" },
    "reading1-text": {
        en: "<sup>25</sup>At that time Jesus said, \"I praise you, Father, Lord of heaven and earth, because you have hidden these things from the wise and learned, and revealed them to little children. <sup>26</sup>Yes, Father, for this is what you were pleased to do.<br><br><sup>27</sup>\"All things have been committed to me by my Father. No one knows the Son except the Father, and no one knows the Father except the Son and those whom the Son chooses to reveal him.<br><br><sup>28</sup>\"Come to me, all you who are weary and burdened, and I will give you rest. <sup>29</sup>Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls. <sup>30</sup>For my yoke is easy and my burden is light.\"",
        km: "<sup>25</sup>នៅពេលនោះ ព្រះយេស៊ូមានព្រះបន្ទូលឡើងថា៖ «បពិត្រព្រះបិតាជាអម្ចាស់នៃស្ថានបរមសុខ* និងជាអម្ចាស់នៃផែនដី ទូលបង្គំសូមសរសើរតម្កើងព្រះអង្គ ព្រោះព្រះអង្គបានសម្តែងការទាំងនេះឲ្យមនុស្សតូចតាចយល់ តែព្រះអង្គបានលាក់មិនឲ្យអ្នកប្រាជ្ញ និងអ្នកចេះដឹងយល់ទេ។ <sup>26</sup>មែនហើយ! ព្រះអង្គសព្វព្រះហឫទ័យសម្រេចដូច្នេះ។<br><br><sup>27</sup>ព្រះបិតារបស់ខ្ញុំបានប្រគល់អ្វីៗទាំងអស់មកខ្ញុំ គ្មានអ្នកណាស្គាល់ព្រះបុត្រា ក្រៅពីព្រះបិតា ហើយក៏គ្មាននរណាស្គាល់ព្រះបិតាក្រៅពីព្រះបុត្រា និងអ្នកដែលព្រះបុត្រាសព្វព្រះហឫទ័យសម្តែងឲ្យស្គាល់នោះដែរ»។<br><br><strong>វិន័យរបស់ព្រះយេស៊ូ</strong><br><sup>28</sup>«អស់អ្នកដែលនឿយហត់ និងមានបន្ទុកធ្ងន់អើយ! ចូរមករកខ្ញុំ ខ្ញុំនឹងឲ្យអ្នករាល់គ្នាបានសម្រាក។ <sup>29</sup>ចូរយកនឹមរបស់ខ្ញុំដាក់លើអ្នករាល់គ្នា ហើយរៀនពីខ្ញុំទៅ អ្នករាល់គ្នាមុខជាបានស្ងប់ចិត្តមិនខាន ដ្បិតខ្ញុំស្លូត និងមានចិត្តសុភាព។ <sup>30</sup>នឹមរបស់ខ្ញុំស្រួល ហើយបន្ទុកដែលខ្ញុំដាក់លើអ្នករាល់គ្នាក៏ស្រាលដែរ»។"
    },

    "bible-why-title": { en: "Why These Passages", km: "ហេតុអ្វីបានជ្រើសរើសអត្ថបទទាំងនេះ" },
    "bible-why-desc": { en: "These readings were chosen because they speak to the promises we are making and the love that brought us together. We hope they encourage you as much as they encourage us.", km: "អត្ថបទទាំងនេះត្រូវបានជ្រើសរើសព្រោះវានិយាយពីសេចក្ដីសន្យា និងស្នេហាដែលផ្សារភ្ជាប់យើង។ សង្ឃឹមថាវានឹងលើកទឹកចិត្តអ្នកដូចដែលវាលើកទឹកចិត្តយើង។" },

    // ══════════════════════════════════════════
    // ── seating.html ──
    // ══════════════════════════════════════════

    "seating-eyebrow": { en: "Reception Seating", km: "កន្លែងអង្គុយ" },
    "seating-title": { en: "Taste of Shunde Banquet", km: "ពិធីជប់លៀង Taste of Shunde" },
    "seating-date": { en: "Find Your Seat", km: "ស្វែងរកកន្លែងអង្គុយ" },
    "seating-subtitle": { en: "Search by first or last name to see your table.", km: "ស្វែងរកតាមឈ្មោះដើម្បីមើលតុរបស់អ្នក។" },

    "seating-section-title": { en: "Guest Search", km: "ស្វែងរកភ្ញៀវ" },
    "seating-section-desc": { en: "Type your first or last name below to find your table.", km: "សូមវាយឈ្មោះរបស់អ្នកខាងក្រោមដើម្បីស្វែងរកតុ។" },
    "seating-search-label": { en: "Search guest name", km: "ស្វែងរកឈ្មោះភ្ញៀវ" },
    "seating-search-placeholder": { en: "Enter your name...", km: "វាយឈ្មោះរបស់អ្នក..." },
    "seating-search-hint": { en: "Use at least two letters for the best result.", km: "សូមវាយយ៉ាងតិច ២ អក្សរ។" },
    "seating-empty": { en: "Start typing to reveal your table assignment.", km: "សូមចាប់ផ្ដើមវាយដើម្បីមើលតុរបស់អ្នក។" },
    "seating-no-result": { en: "No guest found. Please try searching a different name.", km: "រកមិនឃើញភ្ញៀវ។ សូមសាកល្បងឈ្មោះផ្សេង។" },
    "seating-guests-label": { en: "Guests at this table:", km: "ភ្ញៀវនៅតុនេះ:" },

    // ══════════════════════════════════════════
    // ── banquet-menu.html ──
    // ══════════════════════════════════════════

    "menu-eyebrow": { en: "Banquet Menu", km: "មុខម្ហូប" },
    "menu-title": { en: "Taste of Shunde", km: "Taste of Shunde" },
    "menu-date": { en: "Wedding Banquet", km: "ពិធីជប់លៀងមង្គលការ" },
    "menu-subtitle": { en: "A preview of the dishes we will be serving at the reception.", km: "មុខម្ហូបដែលនឹងបម្រើក្នុងពិធីជប់លៀង។" },
    "menu-section-title": { en: "Banquet Menu", km: "មុខម្ហូប" },

    // ══════════════════════════════════════════
    // ── reception/index.html (landing) ──
    // ══════════════════════════════════════════

    "reception-eyebrow": { en: "Evening Reception", km: "ពិធីជប់លៀងពេលល្ងាច" },
    "reception-title": { en: "The Banquet", km: "ពិធីជប់លៀង" },
    "reception-date": { en: "Saturday, 27 June 2026 · 5:30 PM", km: "ថ្ងៃសៅរ៍ ២៧ មិថុនា ២០២៦ · ៥:៣០ ល្ងាច" },
    "reception-subtitle": { en: "Everything you need for the evening celebration — venue details, seating, and menu.", km: "ព័ត៌មានទាំងអស់សម្រាប់ពិធីជប់លៀងពេលល្ងាច — ទីកន្លែង កន្លែងអង្គុយ និងមុខម្ហូប។" },
    "venue-reception-intro": { en: "Plan your journey to the banquet venue and arrive stress-free.", km: "រៀបចំដំណើរទៅទីកន្លែងជប់លៀង។" },

    // helpers.html
    "helpers-eyebrow": { en: "With Gratitude", km: "ដោយការដឹងគុណ" },
    "helpers-title": { en: "Our Helpers", km: "អ្នកជួយយើង" },
    "helpers-date": { en: "Saturday, 27 June 2026", km: "ថ្ងៃសៅរ៍ ២៧ មិថុនា ២០២៦" },
    "helpers-subtitle": { en: "We couldn't do this without you!", km: "យើងមិនអាចធ្វើវាដោយគ្មានអ្នកទេ!" },
    "helpers-section-title": { en: "Thank You To All Our Helpers", km: "សូមអរគុណដល់អ្នកជួយយើងទាំងអស់គ្នា" },
    "helpers-section-desc": { en: "Without your help, we wouldn't be able to make this all work!", km: "បើគ្មានអ្នកទេ យើងមិនអាចរៀបចំកម្មវិធីនេះបានទេ!" },
    "helpers-coordinators": { en: "Coordinators:", km: "អ្នកសម្របសម្រួល:" },
    "helpers-preacher": { en: "Preacher:", km: "អ្នកអធិប្បាយ:" },
    "helpers-officiant": { en: "Officiant:", km: "អ្នកដឹកនាំកម្មវិធី:" },
    "helpers-music": { en: "Music:", km: "តន្ត្រី:" },
    "helpers-welcoming": { en: "Welcoming:", km: "អ្នកទទួលភ្ញៀវ:" },
    "helpers-avit": { en: "AV/IT team:", km: "ក្រុមសម្លេង និងរូបភាព:" },
    "helpers-prayer": { en: "Prayer:", km: "អ្នកអធិស្ឋាន:" },
    "helpers-setup": { en: "Set up & Pack up:", km: "អ្នករៀបចំ និងប្រមូលអីវ៉ាន់:" }
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
