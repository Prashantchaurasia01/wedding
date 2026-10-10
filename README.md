# Royal Islamic Wedding Invitation Website — Nikah & Walima (Anand, Gujarat)

A luxury, interactive digital wedding invitation website crafted with an authentic **Islamic wedding tradition**, featuring a **peaceful, lightweight, and joyful aesthetic** (Pearl Ivory, Warm Silk, Champagne Gold & Fragrant White Jasmine *Motia*), celebrating the blessed union of **Tuba Vohra & Mohammed Omar Bora** at **Parivar Party Plot, Anand, Gujarat**.

---

## 🕊️ Cultural & Visual Aesthetic
- **Atmosphere of Peace & Joy (*Aman aur Musarrat*)**: Luminous pearl ivory, soft cream, champagne gold, and delicate sage/rose accents.
- **Authentic Islamic Tradition**:
  - Sacred Bismillah in classical calligraphy (*Amiri* font).
  - Holy Quran Ayah from **Surah Ar-Rum (30:21)** on love (*Mawaddah*), mercy (*Rahmah*), and tranquility (*Sakoon*).
  - Sunnah Wedding Dua:
    *بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ*
    (*May Allah bless you, shower His blessings upon you, and bring you together in goodness.*)
- **Program Timeline**:
  1. **Nikah (Wedding)** — Tuesday, Dec 22, 2026 at 5:00 PM (Sacred solemnization of marriage, Parivar Party Plot, Anand, Gujarat).
  2. **Walima (Reception)** — Thursday, Dec 24, 2026 at 7:00 PM (Sunnah celebratory royal wedding feast banquet, Parivar Party Plot, Anand, Gujarat).

- **The Couple & Families**:
  - **Tuba Vohra** (Daughter of Yunusbhai Vohra and Rubina vohra)
  - **Mohammed Omar Bora** (Son of Salman Bora & Zakiya Bora)

---

## ✨ 3D Interactive Features Included

1. **3D Edge-to-Edge Full-Screen Opening Doors**:
   - Double cusped Mughal archway doors carved in ivory wood with gold filigree and jasmine garlands spanning the full viewport.
   - Vibrating royal golden lock that clicks open on tap.
   - Celebratory flower rain shower.

2. **Full-Screen Royal Animated Video Invitation**:
   - Cinematic full-screen video theater displaying the couple's animated invitation with sound controls.

3. **Authentic Flower Rain Shower (*Phoolon Ki Barsaat*)**:
   - Falling cascade of white Jasmine (*Motia*) blossoms, fresh blush pink rose petals, velvet red rose petals, and golden Noor petals cascading down smoothly across the full screen when the doors open.

4. **3D Hanging Fanoos Lanterns**:
   - Hanging lanterns framing the entrance and hero section with smooth physics pendulum swing.
   - Radiant glowing Noor auras illuminating the surroundings.

5. **3D Interactive Card Parallax Tilt & Dynamic Specular Shine**:
   - Every card tracks mouse/touch movement in 3D perspective space with a dynamic light sheen.

6. **Interactive "Scratch & Reveal" Auspicious Date**:
   - HTML5 Canvas champagne gold foil scratch card to reveal the Barat & Nikah date with sound & flower shower.
   - Real-time countdown timer (Days, Hours, Minutes, Seconds).

7. **Venue & Live Navigation Guide**:
   - Featured Venue: **Parivar Party Plot**, Behind T.B. Hospital, In front of Rahima Nagar, Near Samarkha Crossing, Anand, Gujarat 388001.
   - Direct Google Maps Link: https://share.google/XHfTAzbekFqbqVCRK
   - Responsive embedded interactive Google Map.
   - One-tap Google Maps directions and Uber ride links.

8. **Ceremony Calendar Integrations**:
   - Pre-filled **"Add to Google Calendar"** for each of the wedding events in Anand.
   - Instant 1-click **Apple iCal (.ics)** downloads.

10. **Halal Banquet RSVP & Live Duas Wall (Guestbook)**:
    - RSVP form with guest attendance, Royal Halal feast banquet dietary preferences, and personal Duas.
    - Live scrollable Wishes Wall with emoji reactions (💖, 🌙, 🌹) stored in `localStorage`.

11. **Andalusian/Mughal Maqam Hijaz Synthesizer & Audio Player**:
    - Built-in Web Audio API synthesizer generating peaceful Oud & Ney flute ambient harmony without requiring external audio files.
    - Automatic fallback and support for any custom `music.mp3` file dropped into `assets/audio/`.



---

## 🚀 How to Run Locally

### Option A: Local Web Server (Recommended)
Open PowerShell in this folder and run:
```powershell
python -m http.server 8080
```
Then visit: [http://localhost:8080](http://localhost:8080)

### Option B: Direct Browser Launch
Simply double-click [`index.html`](file:///c:/Users/Prashant/Desktop/Wedding/index.html) in your browser.

---

## 🛠 How to Customize

All text, dates, venues, and events are cleanly organized in [`js/config.js`](file:///c:/Users/Prashant/Desktop/Wedding/js/config.js):

- **Couple Details**: Change names, bios, parents' names, and instagram handles in `WEDDING_CONFIG.couple`.
- **Main Date**: Change `WEDDING_CONFIG.mainDate.fullString` to update the countdown target.
- **Ceremonies**: Add or modify events in `WEDDING_CONFIG.events`.
- **Venue**: Update address and Google Maps links in `WEDDING_CONFIG.venue`.
- **Music**: Drop any `music.mp3` file into `assets/audio/music.mp3` to play your chosen track!
