/**
 * WEDDING INVITATION CONFIGURATION
 * Islamic Royal Wedding — Nikah & Walima Celebrations
 * Tuba Vohra & Mohammed Omar Bora (Parivar Party Plot, Anand, Gujarat)
 */
const WEDDING_CONFIG = {
  // Couple Information (Bride & Groom)
  couple: {
    bride: {
      name: "Tuba Vohra",
      shortName: "Tuba",
      title: "The Bride",
      parents: "Daughter of Yunusbhai Vohra and Rubina vohra",
      bio: "An accomplished educator and creative soul whose joyful laughter, grace, thoughtful words, and compassion brighten every family gathering.",
      photo: "assets/images/bride.jpg",
      instagram: "@tuba.vohra"
    },
    groom: {
      name: "Mohammed Omar Bora",
      shortName: "Omar",
      title: "The Groom",
      parents: "Son of Salman Bora & Zakiya Bora",
      bio: "A technology architect and designer with a passion for classical poetry, timeless architecture, and finding peace in meaningful conversations.",
      photo: "assets/images/groom.jpg",
      instagram: "@omar.bora"
    },
    monogram: "T & O",
    hashtag: "#TubaaWedsOmar",
    heroImage: "assets/images/couple.jpg",
    heroQuote: "“And among His signs is that He created for you mates from among yourselves, that you may dwell in tranquility with them, and He has put love and mercy between your hearts.” — Surah Ar-Rum (30:21)"
  },

  // Royal Animated Video Invitation
  video: {
    goldThemeSrc: "assets/video/invitation_gold_theme.mp4",
    greenThemeSrc: "assets/video/invitation_original_green.mp4",
    currentTheme: "gold"
  },

  // Auspicious Invocation & Islamic Duas
  blessing: {
    arabicBismillah: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    arabicAyah: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",
    arabicDua: "بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
    translation: "“May Allah bless this union, bestow His infinite grace upon you, and unite you in goodness, peace, and everlasting joy.”",
    familyNote: "With the divine grace and blessings of Almighty Allah, Yunusbhai Vohra & Rubina vohra and Salman Bora & Zakiya Bora cordially invite you to grace the auspicious wedding celebrations of their beloved children."
  },

  // Main Wedding Date (Used for Countdown & Scratch Card)
  mainDate: {
    day: "Tuesday",
    date: "22",
    month: "December",
    year: "2026",
    time: "05:00 PM",
    fullString: "December 22, 2026 17:00:00",
    ceremonyTime: "Nikah (Wedding): 05:00 PM (Insha'Allah)"
  },

  // Main Venue Details (Parivar Party Plot, Anand, Gujarat)
  venue: {
    name: "Parivar Party Plot",
    city: "Anand, Gujarat",
    fullAddress: "Behind T.B. Hospital, In front of Rahima Nagar, Near Samarkha Crossing, Anand, Gujarat 388001, India",
    landmark: "Behind T.B. Hospital, In front of Rahima Nagar, Near Samarkha Crossing, Anand",
    mapEmbedUrl: "https://maps.google.com/maps?q=Parivar+Party+Plot,+Behind+T.B.+Hospital,+In+front+of+Rahima+Nagar,+Near+Samarkha+Crossing,+Anand,+Gujarat+388001&t=&z=15&ie=UTF8&iwloc=&output=embed",
    mapDirectLink: "https://share.google/XHfTAzbekFqbqVCRK",
    uberLink: "https://m.uber.com/ul/?action=setPickup&pickup=my_location&dropoff[formatted_address]=Parivar+Party+Plot+Anand+Gujarat",
    image: "assets/images/venue.jpg",
    airportDistance: "Approx 40 mins from Vadodara Airport (BDQ) / 1 hr from Ahmedabad Airport (AMD)",
    valetNote: "Spacious Party Plot Valet Parking & Grand Welcome for respected guests"
  },

  // Program Timeline (Ceremonies)
  events: [
    {
      id: "nikah-wedding",
      title: "Nikah (Wedding)",
      tagline: "The Sacred Covenant & Solemnization of Marriage",
      date: "Tuesday, Dec 22, 2026",
      time: "05:00 PM",
      venue: "Parivar Party Plot, Anand, Gujarat",
      dressCode: "Traditional / Elegant Formal Wedding Attire",
      dressColorHex: "#C59B27",
      icon: "🌙",
      calendarTitle: "Nikah (Wedding) - Tuba & Omar",
      calendarDesc: "Witness the sacred solemnization of marriage of Tuba Vohra and Mohammed Omar Bora at Parivar Party Plot, Anand, Gujarat.",
      startDate: "20261222T170000",
      endDate: "20261222T210000"
    },
    {
      id: "walima-reception",
      title: "Walima (Reception)",
      tagline: "The Sunnah Celebratory Banquet & Felicitations",
      date: "Thursday, Dec 24, 2026",
      time: "07:00 PM",
      venue: "Parivar Party Plot, Anand, Gujarat",
      dressCode: "Formal Evening Wear / Royal Elegance",
      dressColorHex: "#2D5A43",
      icon: "🥂",
      calendarTitle: "Walima (Reception) - Tuba & Omar",
      calendarDesc: "Celebrate the newlyweds Tuba Vohra and Mohammed Omar Bora with a grand celebratory royal banquet at Parivar Party Plot, Anand, Gujarat.",
      startDate: "20261224T190000",
      endDate: "20261225T000000"
    }
  ],

  // Love Story Highlights
  story: [
    {
      year: "Autumn 2022",
      title: "When Families Met",
      description: "An arranged family introduction in Anand over tea and shared values blossomed into a profound bond of mutual respect, understanding, and friendship."
    },
    {
      year: "Spring 2024",
      title: "The Blessed Baat Pakki & Engagement",
      description: "With the loving blessings of both families, Omar presented an engagement ring, and Tuba said a joyful YES!"
    },
    {
      year: "December 2026",
      title: "A Lifetime of Sakoon & Love",
      description: "Surrounded by our dearest families in Anand, we celebrate our Nikah and Walima, stepping forward into a lifetime of shared faith, peace, and devotion."
    }
  ],

  // Initial Sample Guest Wishes Wall
  initialWishes: [
    {
      id: 1,
      name: "Farhan & Zainab Patel",
      relation: "Family Friends",
      date: "Yesterday",
      message: "Mashallah, warmest congratulations to Tuba and Omar! May Allah SWT shower your new journey with everlasting Sakoon, Barakah, and endless happiness. 🌙🤍",
      reactions: { heart: 46, toast: 28, flowers: 39 }
    },
    {
      id: 2,
      name: "Uncle Tariq & Khala Nargis",
      relation: "Bride's Family",
      date: "2 days ago",
      message: "Dearest Tuba, you look radiant! Omar beta, welcome to our family. Barakallahu lakuma wa baraka alaikuma fee khayr! 🤲🌹",
      reactions: { heart: 52, toast: 22, flowers: 48 }
    },
    {
      id: 3,
      name: "Bilal & Maryam Khan",
      relation: "Groom's Family",
      date: "3 days ago",
      message: "Sending warmest felicitations and heartfelt Duas! Counting down the days until the Nikah at Parivar Party Plot on Dec 22nd. Mubarak ho! 🎉✨",
      reactions: { heart: 35, toast: 20, flowers: 26 }
    }
  ],

  // RSVP Contacts
  rsvpContacts: [
    { name: "Family Helpline", relation: "Family Contact", phone: "+91 98200 12345" },
    { name: "Event Desk", relation: "Parivar Party Plot Desk", phone: "+91 98200 54321" }
  ]
};
