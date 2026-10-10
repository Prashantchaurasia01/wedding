/**
 * MAIN WEDDING APPLICATION CONTROLLER
 * Royal Islamic Edition — Nikah & Walima Celebrations
 * Enhanced with 3D Parallax Tilt, 3D Hanging Lanterns, and 3D Doors Animation
 */
document.addEventListener("DOMContentLoaded", () => {
  initEntranceDoors();
  initCountdown();
  initScratchCard();
  initEventsSchedule();
  initWishesWall();
  initRSVPForm();
  initIslamicNoorParticles();
  initGalleryLightbox();
  initShareModal();
  initCustomizerModal();
  initNavigationScroll();
  init3DCardParallax();
});

/* =========================================================================
   1. 3D ROYAL ISLAMIC ENTRANCE DOORS & ANIMATED VIDEO INVITATION
   ========================================================================= */
function initEntranceDoors() {
  const doorsOverlay = document.getElementById("doors-overlay");
  const doorLatch = document.getElementById("door-latch-trigger");
  const doorLeft = document.getElementById("door-panel-left");
  const doorRight = document.getElementById("door-panel-right");
  const skipEntranceBtn = document.getElementById("skip-entrance-btn");
  const videoTheater = document.getElementById("entrance-video-theater");

  let opened = false;

  const openDoors = () => {
    if (opened) return;
    opened = true;

    // Play golden latch unlock SFX
    if (window.royalAudio) {
      window.royalAudio.playDoorUnlockSFX();
    }

    // Door latch unlocks & fades
    if (doorLatch) {
      doorLatch.classList.add("unlocked");
      doorLatch.style.pointerEvents = "none";
      setTimeout(() => {
        doorLatch.style.display = "none";
      }, 350);
    }

    if (skipEntranceBtn) {
      skipEntranceBtn.style.display = "none";
    }

    // Swing doors open in 3D perspective
    setTimeout(() => {
      if (doorLeft) doorLeft.classList.add("open-left");
      if (doorRight) doorRight.classList.add("open-right");
      triggerFlowerRainShower(); // Cascade of white jasmine & gold petals
    }, 350);

    // Reveal 3D Royal Envelope Theater
    setTimeout(() => {
      if (videoTheater) {
        videoTheater.style.display = "flex";
        void videoTheater.offsetWidth;
        videoTheater.classList.add("video-active");
      }
    }, 700);
  };

  if (doorLatch) {
    doorLatch.addEventListener("click", openDoors);
  }
  if (skipEntranceBtn) {
    skipEntranceBtn.addEventListener("click", () => {
      exitDoorsAndShowDetails();
    });
  }

  // Initialize 3D Envelope Interactions
  init3DInvitationEnvelope();
}

function exitDoorsAndShowDetails() {
  const doorsOverlay = document.getElementById("doors-overlay");
  const videoTheater = document.getElementById("entrance-video-theater");

  if (videoTheater) {
    videoTheater.classList.remove("video-active");
    setTimeout(() => {
      videoTheater.style.display = "none";
    }, 800);
  }

  triggerFlowerRainShower(); // Celebratory shower on entering details!

  if (doorsOverlay) {
    doorsOverlay.classList.add("fade-out");
    setTimeout(() => {
      doorsOverlay.style.display = "none";
      document.body.classList.remove("doors-active");
      init3DCardParallax();

      // Start background ambient music when user enters the details page
      if (window.royalAudio && !window.royalAudio.isPlaying) {
        window.royalAudio.play();
      }

      const homeEl = document.getElementById("home");
      if (homeEl) {
        homeEl.scrollIntoView({ behavior: "smooth" });
      }
    }, 800);
  }
}

function init3DInvitationEnvelope() {
  const envelopeDisplay = document.getElementById("royal-envelope-display");
  const cardStandalone = document.getElementById("royal-card-standalone");
  const replayBtn = document.getElementById("envelope-replay-btn");
  const skipBtn = document.getElementById("envelope-skip-btn");
  const cardEnterPrompt = document.getElementById("card-enter-prompt");
  const bottomHint = document.getElementById("envelope-bottom-hint");

  let isEnvelopeOpened = false;

  const openEnvelope = () => {
    if (isEnvelopeOpened) return;
    isEnvelopeOpened = true;

    // Play royal envelope unsealing and golden chime swell
    if (window.royalAudio) {
      window.royalAudio.playEnvelopeOpenSFX();
    }

    // Trigger golden petal & jasmine rain
    triggerFlowerRainShower();

    if (envelopeDisplay) {
      envelopeDisplay.classList.add("is-opened");
    }

    if (cardStandalone) {
      setTimeout(() => {
        cardStandalone.classList.add("is-active");
      }, 250);
    }

    if (bottomHint) {
      bottomHint.classList.add("is-hidden");
    }

    if (replayBtn) {
      replayBtn.style.display = "inline-flex";
    }
  };

  const closeEnvelope = () => {
    if (!isEnvelopeOpened) return;
    isEnvelopeOpened = false;

    if (cardStandalone) {
      cardStandalone.classList.remove("is-active");
    }

    if (envelopeDisplay) {
      setTimeout(() => {
        envelopeDisplay.classList.remove("is-opened");
      }, 250);
    }

    if (bottomHint) {
      bottomHint.classList.remove("is-hidden");
    }

    if (replayBtn) {
      replayBtn.style.display = "none";
    }
  };

  // Click, touch, or tap on royal envelope to open
  if (envelopeDisplay) {
    const handleEnvelopeClick = (e) => {
      if (e) {
        e.stopPropagation();
      }
      openEnvelope();
    };
    envelopeDisplay.addEventListener("click", handleEnvelopeClick);
    envelopeDisplay.addEventListener("touchend", handleEnvelopeClick);
    envelopeDisplay.addEventListener("pointerup", handleEnvelopeClick);
  }

  // Theater background click fallback (if user clicks near envelope on mobile or desktop)
  const videoTheater = document.getElementById("entrance-video-theater");
  if (videoTheater) {
    videoTheater.addEventListener("click", (e) => {
      if (!isEnvelopeOpened && !e.target.closest("#envelope-replay-btn")) {
        openEnvelope();
      }
    });
  }

  // Click on standalone card or continue button to enter wedding celebration
  if (cardStandalone) {
    cardStandalone.addEventListener("click", () => {
      exitDoorsAndShowDetails();
    });
  }

  if (cardEnterPrompt) {
    cardEnterPrompt.addEventListener("click", (e) => {
      e.stopPropagation();
      exitDoorsAndShowDetails();
    });
  }

  // Replay button
  if (replayBtn) {
    replayBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      closeEnvelope();
      setTimeout(openEnvelope, 700);
    });
  }

  window.openInvitationEnvelope = openEnvelope;
  window.closeInvitationEnvelope = closeEnvelope;
}

/* =========================================================================
   2. 3D CARD PARALLAX TILT ENGINE
   ========================================================================= */
function init3DCardParallax() {
  const targetCards = document.querySelectorAll(
    ".person-card, .event-card, .venue-card, .scratch-card-container, .hero-ornament-border, .wish-card, .card-3d"
  );

  targetCards.forEach((card) => {
    // Add specular shine layer if not already added
    if (!card.querySelector(".card-shine-3d")) {
      const shine = document.createElement("div");
      shine.className = "card-shine-3d";
      card.appendChild(shine);
    }

    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // 3D tilt angles
      const rotateX = ((y - centerY) / centerY) * -8; // Max 8 deg tilt
      const rotateY = ((x - centerX) / centerX) * 8;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(8px)`;
      card.style.setProperty("--shine-x", `${((x / rect.width) * 100).toFixed(1)}%`);
      card.style.setProperty("--shine-y", `${((y / rect.height) * 100).toFixed(1)}%`);
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
      card.style.transition = "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
      setTimeout(() => {
        card.style.transition = "";
      }, 600);
    });
  });
}

/* =========================================================================
   3. LIVE ROYAL COUNTDOWN TIMER
   ========================================================================= */
function initCountdown() {
  const targetDateStr = WEDDING_CONFIG.mainDate.fullString;
  const targetTime = new Date(targetDateStr).getTime();

  const daysEl = document.getElementById("timer-days");
  const hoursEl = document.getElementById("timer-hours");
  const minutesEl = document.getElementById("timer-minutes");
  const secondsEl = document.getElementById("timer-seconds");

  function update() {
    const now = new Date().getTime();
    const diff = targetTime - now;

    if (diff <= 0) {
      if (daysEl) daysEl.textContent = "00";
      if (hoursEl) hoursEl.textContent = "00";
      if (minutesEl) minutesEl.textContent = "00";
      if (secondsEl) secondsEl.textContent = "00";
      const statusEl = document.getElementById("countdown-status");
      if (statusEl) statusEl.textContent = "✨ Today is the blessed Nikah & Walima day! Mubarak! ✨";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    if (daysEl) daysEl.textContent = String(days).padStart(2, "0");
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, "0");
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, "0");
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, "0");
  }

  update();
  setInterval(update, 1000);
}

/* =========================================================================
   4. INTERACTIVE SCRATCH CARD
   ========================================================================= */
function initScratchCard() {
  const scratchInstance = new GoldScratchCard("scratch-canvas", {
    radius: 28,
    threshold: 40,
    onReveal: () => {
      onScratchCardRevealed();
    }
  });

  const instantBtn = document.getElementById("scratch-instant-btn");
  if (instantBtn) {
    instantBtn.addEventListener("click", () => {
      scratchInstance.reveal();
    });
  }
}

function onScratchCardRevealed() {
  const secretContent = document.getElementById("scratch-revealed-badge");
  if (secretContent) {
    secretContent.classList.add("revealed-pulse");
  }
  triggerGoldenBurst();
  showToast("✨ Auspicious Nikah & Walima Date Revealed!");
}

/* =========================================================================
   5. CEREMONIES & EVENT SCHEDULE + CALENDAR GENERATION
   ========================================================================= */
function initEventsSchedule() {
  const container = document.getElementById("events-timeline-grid");
  if (!container) return;

  container.innerHTML = "";

  WEDDING_CONFIG.events.forEach((evt, idx) => {
    const card = document.createElement("div");
    card.className = "event-card card-3d";
    card.setAttribute("data-event-id", evt.id);

    // Google Calendar Link
    const gCalUrl = generateGoogleCalendarUrl(evt);

    card.innerHTML = `
      <div class="event-card-inner">
        <div class="event-header">
          <span class="event-number">Ceremony 0${idx + 1}</span>
          <span class="event-icon">${evt.icon}</span>
        </div>
        <h3 class="event-title">${evt.title}</h3>
        <p class="event-tagline">${evt.tagline}</p>
        
        <div class="event-meta-list">
          <div class="event-meta-item">
            <svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"/></svg>
            <span><strong>${evt.date}</strong></span>
          </div>
          <div class="event-meta-item">
            <svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            <span>${evt.time}</span>
          </div>
          <div class="event-meta-item">
            <svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>${evt.venue}</span>
          </div>
        </div>

        <div class="event-actions">
          <a href="${gCalUrl}" target="_blank" rel="noopener noreferrer" class="btn-calendar btn-gcal">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/></svg>
            Add to Google Calendar
          </a>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

function generateGoogleCalendarUrl(evt) {
  const base = "https://calendar.google.com/calendar/render?action=TEMPLATE";
  const text = encodeURIComponent(evt.calendarTitle);
  const details = encodeURIComponent(`${evt.calendarDesc}\n\nVenue: ${evt.venue}\nDress Code: ${evt.dressCode}`);
  const location = encodeURIComponent(evt.venue);
  const dates = `${evt.startDate}/${evt.endDate}`;
  return `${base}&text=${text}&dates=${dates}&details=${details}&location=${location}`;
}

window.downloadICalEvent = function (eventId) {
  const evt = WEDDING_CONFIG.events.find((e) => e.id === eventId);
  if (!evt) return;

  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Omar and Tuba Royal Islamic Wedding//EN",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    `SUMMARY:${evt.calendarTitle}`,
    `DESCRIPTION:${evt.calendarDesc}\\nDress Code: ${evt.dressCode}`,
    `LOCATION:${evt.venue}`,
    `DTSTART:${evt.startDate}`,
    `DTEND:${evt.endDate}`,
    "STATUS:CONFIRMED",
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute("download", `${evt.id}.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast("📅 Calendar invitation (.ics) downloaded!");
};

/* =========================================================================
   6. WISHES WALL (GUESTBOOK) & REALTIME INTERACTIONS
   ========================================================================= */
function initWishesWall() {
  const wallContainer = document.getElementById("wishes-wall-grid");
  const postWishForm = document.getElementById("post-wish-form");
  if (!wallContainer) return;

  // Load from localStorage or initialize with config
  let storedWishes = JSON.parse(localStorage.getItem("wedding_wishes_wall_islamic"));
  if (!storedWishes || !storedWishes.length) {
    storedWishes = WEDDING_CONFIG.initialWishes;
    localStorage.setItem("wedding_wishes_wall_islamic", JSON.stringify(storedWishes));
  }

  renderWishes(storedWishes);

  if (postWishForm) {
    postWishForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const nameInput = document.getElementById("wish-author-name");
      const relationInput = document.getElementById("wish-author-relation");
      const messageInput = document.getElementById("wish-message");

      const name = nameInput.value.trim();
      const relation = relationInput.value.trim() || "Well-wisher";
      const message = messageInput.value.trim();

      if (!name || !message) return;

      const newWish = {
        id: Date.now(),
        name: name,
        relation: relation,
        date: "Just now",
        message: message,
        reactions: { heart: 1, toast: 1, flowers: 1 }
      };

      storedWishes.unshift(newWish);
      localStorage.setItem("wedding_wishes_wall_islamic", JSON.stringify(storedWishes));
      renderWishes(storedWishes);

      nameInput.value = "";
      relationInput.value = "";
      messageInput.value = "";

      triggerFlowerRainShower();
      showToast("✨ Heartfelt Dua posted to the wall!");
      init3DCardParallax();
    });
  }
}

function renderWishes(wishes) {
  const wallContainer = document.getElementById("wishes-wall-grid");
  if (!wallContainer) return;

  wallContainer.innerHTML = "";

  wishes.forEach((w) => {
    const card = document.createElement("div");
    card.className = "wish-card";
    card.setAttribute("data-wish-id", w.id);

    card.innerHTML = `
      <div class="wish-card-inner">
        <div class="wish-header">
          <div class="wish-author-avatar">${w.name.charAt(0).toUpperCase()}</div>
          <div class="wish-author-meta">
            <h4 class="wish-author-name">${w.name}</h4>
            <span class="wish-author-relation">${w.relation} • ${w.date}</span>
          </div>
        </div>
        <p class="wish-text">“${w.message}”</p>
        <div class="wish-reactions">
          <button class="reaction-btn" onclick="reactToWish(${w.id}, 'heart', this)">
            <span>💖</span> <span class="rx-count">${w.reactions.heart}</span>
          </button>
          <button class="reaction-btn" onclick="reactToWish(${w.id}, 'toast', this)">
            <span>🌙</span> <span class="rx-count">${w.reactions.toast}</span>
          </button>
          <button class="reaction-btn" onclick="reactToWish(${w.id}, 'flowers', this)">
            <span>🌹</span> <span class="rx-count">${w.reactions.flowers}</span>
          </button>
        </div>
      </div>
    `;

    wallContainer.appendChild(card);
  });
}

window.reactToWish = function (wishId, rxType, btn) {
  let stored = JSON.parse(localStorage.getItem("wedding_wishes_wall_islamic")) || [];
  const wish = stored.find((item) => item.id === wishId);
  if (wish) {
    wish.reactions[rxType] = (wish.reactions[rxType] || 0) + 1;
    localStorage.setItem("wedding_wishes_wall_islamic", JSON.stringify(stored));
    const countSpan = btn.querySelector(".rx-count");
    if (countSpan) countSpan.textContent = wish.reactions[rxType];
    btn.classList.add("reacted-bump");
    setTimeout(() => btn.classList.remove("reacted-bump"), 300);
  }
};

/* =========================================================================
   7. RSVP FORM HANDLER
   ========================================================================= */
function initRSVPForm() {
  const rsvpForm = document.getElementById("wedding-rsvp-form");
  const modal = document.getElementById("rsvp-confirmation-modal");
  const closeModalBtn = document.getElementById("close-rsvp-modal-btn");

  if (rsvpForm) {
    rsvpForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("rsvp-guest-name").value;
      const phone = document.getElementById("rsvp-guest-phone").value;
      const attendance = document.querySelector('input[name="rsvp-attendance"]:checked')?.value || "Accept";
      const guestCount = document.getElementById("rsvp-guest-count").value;
      const diet = document.getElementById("rsvp-dietary").value;
      const notes = document.getElementById("rsvp-notes").value;

      const rsvpEntry = {
        id: Date.now(),
        name,
        phone,
        attendance,
        guestCount,
        diet,
        notes,
        submittedAt: new Date().toISOString()
      };

      const allRsvps = JSON.parse(localStorage.getItem("wedding_rsvp_submissions")) || [];
      allRsvps.push(rsvpEntry);
      localStorage.setItem("wedding_rsvp_submissions", JSON.stringify(allRsvps));

      const modalGuestName = document.getElementById("modal-confirmed-guest-name");
      if (modalGuestName) modalGuestName.textContent = name;

      if (modal) {
        modal.classList.add("active");
      }

      rsvpForm.reset();
      triggerFlowerRainShower();
    });
  }

  if (closeModalBtn && modal) {
    closeModalBtn.addEventListener("click", () => {
      modal.classList.remove("active");
    });
  }
}

/* =========================================================================
   8. 3D NOOR MOTES & DAMASCUS ROSE PETALS ENGINE
   ========================================================================= */
let particlesActive = true;
function initIslamicNoorParticles() {
  const canvas = document.getElementById("petals-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const maxParticles = 42;

  for (let i = 0; i < maxParticles; i++) {
    particles.push(createParticle(width, height, true));
  }

  function createParticle(w, h, randomY = false) {
    const type = Math.random();
    // 0 = Noor golden mote, 1 = Islamic 8-point gold star, 2 = White Motia (Jasmine) flower, 3 = Soft blush rose petal
    const pType = type < 0.35 ? "noor" : type < 0.55 ? "star" : type < 0.8 ? "motia" : "petal";

    return {
      x: Math.random() * w,
      y: randomY ? Math.random() * h : -25,
      size: pType === "noor" ? Math.random() * 3 + 2 : pType === "star" ? Math.random() * 5 + 3.5 : pType === "motia" ? Math.random() * 7 + 6 : Math.random() * 10 + 7,
      speedX: (Math.random() - 0.5) * 1.1,
      speedY: pType === "noor" ? Math.random() * 0.8 + 0.35 : Math.random() * 1.1 + 0.6,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 2.0,
      opacity: Math.random() * 0.55 + 0.4,
      pulseSpeed: Math.random() * 0.03 + 0.015,
      pulsePhase: Math.random() * Math.PI * 2,
      type: pType,
      color: pType === "noor" ? "#FFF2B2" : pType === "star" ? "#D4AF37" : pType === "motia" ? "#FFFFFF" : Math.random() > 0.5 ? "#E8A7B3" : "#D48B99"
    };
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    if (particlesActive) {
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.rotation += p.rotSpeed;
        p.pulsePhase += p.pulseSpeed;

        if (p.y > height + 25 || p.x < -30 || p.x > width + 30) {
          Object.assign(p, createParticle(width, height, false));
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);

        const currentAlpha = p.opacity * (0.8 + 0.2 * Math.sin(p.pulsePhase));
        ctx.globalAlpha = Math.max(0.1, Math.min(1, currentAlpha));

        if (p.type === "noor") {
          // Radiant 3D Noor Mote
          const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, p.size * 2);
          grad.addColorStop(0, "#FFFFFF");
          grad.addColorStop(0.35, "#F9E498");
          grad.addColorStop(1, "rgba(212, 175, 55, 0)");
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(0, 0, p.size * 2, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.type === "star") {
          // Islamic 8-Point Geometric Star
          drawEightPointStar(ctx, 0, 0, p.size, p.color);
        } else if (p.type === "motia") {
          // Traditional White Jasmine (Motia) Blossom
          drawMotiaBlossom(ctx, 0, 0, p.size);
        } else {
          // Authentic Curved Rose Petal (Gulab ki Patti) - Natural Botanical Shape
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size * 0.72, p.size * 1.25, 0.22, 0, Math.PI * 2);
          ctx.fill();

          // Subtle organic petal vein highlight
          ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(0, -p.size * 0.9);
          ctx.quadraticCurveTo(p.size * 0.15, 0, 0, p.size * 0.9);
          ctx.stroke();
        }

        ctx.restore();
      });
    }

    requestAnimationFrame(render);
  }

  function drawMotiaBlossom(ctx, cx, cy, radius) {
    const petals = 5;
    const step = (Math.PI * 2) / petals;
    ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
    for (let i = 0; i < petals; i++) {
      const angle = i * step;
      const px = cx + Math.cos(angle) * (radius * 0.55);
      const py = cy + Math.sin(angle) * (radius * 0.55);
      ctx.beginPath();
      ctx.arc(px, py, radius * 0.45, 0, Math.PI * 2);
      ctx.fill();
    }
    // Golden Motia pistil center
    ctx.fillStyle = "#E5C158";
    ctx.beginPath();
    ctx.arc(cx, cy, radius * 0.22, 0, Math.PI * 2);
    ctx.fill();
  }

  function drawEightPointStar(ctx, cx, cy, radius, color) {
    ctx.fillStyle = color;
    const numPoints = 8;
    const step = Math.PI / numPoints;
    ctx.beginPath();
    for (let i = 0; i < 2 * numPoints; i++) {
      const r = i % 2 === 0 ? radius : radius * 0.52;
      const angle = i * step;
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fill();
  }

  render();

  const particleToggleBtn = document.getElementById("petals-toggle-btn");
  if (particleToggleBtn) {
    particleToggleBtn.addEventListener("click", () => {
      particlesActive = !particlesActive;
      particleToggleBtn.classList.toggle("active", particlesActive);
      showToast(particlesActive ? "✨ Noor particles & petals enabled" : "✨ Noor particles paused");
    });
  }
}

/* =========================================================================
   AUTHENTIC FLOWER RAIN SHOWER (PHOOLON KI BARSAAT)
   Cascade of Jasmine (Motia) blossoms, Rose petals, and Golden Noor petals
   ========================================================================= */
function triggerFlowerRainShower() {
  const container = document.getElementById("flower-rain-container") || document.body;
  const petalCount = 85;

  for (let i = 0; i < petalCount; i++) {
    const item = document.createElement("div");
    item.className = "falling-flower-item";

    const left = Math.random() * 100; // 0 to 100vw
    const delay = Math.random() * 2400; // Staggered over 2.4s
    const duration = 2.6 + Math.random() * 2.4; // 2.6s to 5.0s fall
    const drift = (Math.random() - 0.5) * 180; // horizontal drift

    item.style.left = `${left}%`;
    item.style.animationDelay = `${delay}ms`;
    item.style.animationDuration = `${duration}s`;
    item.style.setProperty("--drift-x", `${drift}px`);

    const randType = Math.random();
    if (randType < 0.35) {
      // White Jasmine (Motia) Blossom (SVG with 5 delicate white petals & golden star center)
      const size = 24 + Math.random() * 14;
      item.innerHTML = `
        <svg class="flower-motia-svg" width="${size}" height="${size}" viewBox="0 0 40 40">
          <g fill="#FFFFFF" stroke="#F1E7D0" stroke-width="0.8">
            <circle cx="20" cy="11" r="7"/>
            <circle cx="28" cy="17" r="7"/>
            <circle cx="25" cy="27" r="7"/>
            <circle cx="15" cy="27" r="7"/>
            <circle cx="12" cy="17" r="7"/>
          </g>
          <circle cx="20" cy="20" r="4.2" fill="#E5C158" stroke="#D4AF37" stroke-width="0.5"/>
        </svg>
      `;
    } else if (randType < 0.65) {
      // Fresh Blush Pink Rose Petal
      const petal = document.createElement("div");
      petal.className = "flower-rose-petal blush";
      const w = 18 + Math.random() * 12;
      const h = 24 + Math.random() * 14;
      petal.style.setProperty("--petal-w", `${w}px`);
      petal.style.setProperty("--petal-h", `${h}px`);
      item.appendChild(petal);
    } else if (randType < 0.85) {
      // Traditional Velvet Red Rose Petal
      const petal = document.createElement("div");
      petal.className = "flower-rose-petal velvet";
      const w = 18 + Math.random() * 12;
      const h = 24 + Math.random() * 14;
      petal.style.setProperty("--petal-w", `${w}px`);
      petal.style.setProperty("--petal-h", `${h}px`);
      item.appendChild(petal);
    } else {
      // Shimmering Golden Petal
      const petal = document.createElement("div");
      petal.className = "flower-rose-petal gold";
      const w = 16 + Math.random() * 10;
      const h = 20 + Math.random() * 12;
      petal.style.setProperty("--petal-w", `${w}px`);
      petal.style.setProperty("--petal-h", `${h}px`);
      item.appendChild(petal);
    }

    container.appendChild(item);

    // Clean up DOM after fall
    setTimeout(() => {
      item.remove();
    }, delay + duration * 1000 + 500);
  }
}

// Backward-compatible alias
window.triggerGoldenBurst = triggerFlowerRainShower;
window.triggerFlowerRainShower = triggerFlowerRainShower;

/* =========================================================================
   9. PHOTO GALLERY LIGHTBOX
   ========================================================================= */
function initGalleryLightbox() {
  const galleryItems = document.querySelectorAll(".gallery-card-clickable");
  const modal = document.getElementById("gallery-lightbox-modal");
  const lightboxImg = document.getElementById("lightbox-image");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const closeBtn = document.getElementById("close-lightbox-btn");

  if (!modal) return;

  galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
      const img = item.querySelector("img");
      const caption = item.getAttribute("data-caption") || "";
      if (img && lightboxImg) {
        lightboxImg.src = img.src;
        if (lightboxCaption) lightboxCaption.textContent = caption;
        modal.classList.add("active");
      }
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("active");
    });
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });
}

/* =========================================================================
   10. SHARE VIA WHATSAPP & QR CODE MODAL
   ========================================================================= */
function initShareModal() {
  const shareBtn = document.getElementById("share-invite-btn");
  const modal = document.getElementById("share-invite-modal");
  const closeBtn = document.getElementById("close-share-modal-btn");
  const copyLinkBtn = document.getElementById("copy-share-link-btn");
  const waBtn = document.getElementById("whatsapp-share-btn");

  const currentUrl = window.location.href;

  if (shareBtn && modal) {
    shareBtn.addEventListener("click", () => {
      modal.classList.add("active");
    });
  }

  if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("active");
    });
  }

  if (copyLinkBtn) {
    copyLinkBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(currentUrl).then(() => {
        showToast("📋 Invitation link copied to clipboard!");
      });
    });
  }

  if (waBtn) {
    waBtn.addEventListener("click", () => {
      const text = encodeURIComponent(
        `✨ Royal Islamic Wedding Invitation ✨\n\nبِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\n\nYou are cordially invited to celebrate the Nikah & Walima of ${WEDDING_CONFIG.couple.bride.shortName} & ${WEDDING_CONFIG.couple.groom.shortName} at ${WEDDING_CONFIG.venue.name}, ${WEDDING_CONFIG.venue.city} on ${WEDDING_CONFIG.mainDate.month} ${WEDDING_CONFIG.mainDate.date}, ${WEDDING_CONFIG.mainDate.year}.\n\nView details & RSVP here: ${currentUrl}`
      );
      window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
    });
  }
}

/* =========================================================================
   11. LIVE CUSTOMIZER MODAL (EASY LIVE EDITING)
   ========================================================================= */
function initCustomizerModal() {
  const trigger = document.getElementById("open-customizer-btn");
  const modal = document.getElementById("customizer-modal");
  const closeBtn = document.getElementById("close-customizer-btn");
  const saveBtn = document.getElementById("save-customizer-btn");

  if (!trigger || !modal) return;

  trigger.addEventListener("click", () => {
    document.getElementById("cust-groom-name").value = WEDDING_CONFIG.couple.groom.name;
    document.getElementById("cust-bride-name").value = WEDDING_CONFIG.couple.bride.name;
    document.getElementById("cust-venue-name").value = WEDDING_CONFIG.venue.name;
    document.getElementById("cust-venue-city").value = WEDDING_CONFIG.venue.city;
    modal.classList.add("active");
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => modal.classList.remove("active"));
  }

  if (saveBtn) {
    saveBtn.addEventListener("click", () => {
      const gName = document.getElementById("cust-groom-name").value.trim();
      const bName = document.getElementById("cust-bride-name").value.trim();
      const vName = document.getElementById("cust-venue-name").value.trim();
      const vCity = document.getElementById("cust-venue-city").value.trim();

      if (gName) WEDDING_CONFIG.couple.groom.name = gName;
      if (bName) WEDDING_CONFIG.couple.bride.name = bName;
      if (vName) WEDDING_CONFIG.venue.name = vName;
      if (vCity) WEDDING_CONFIG.venue.city = vCity;

      document.querySelectorAll(".groom-name-display").forEach((el) => (el.textContent = gName));
      document.querySelectorAll(".bride-name-display").forEach((el) => (el.textContent = bName));
      document.querySelectorAll(".venue-name-display").forEach((el) => (el.textContent = vName));
      document.querySelectorAll(".venue-city-display").forEach((el) => (el.textContent = vCity));

      modal.classList.remove("active");
      showToast("✨ Invitation details updated live!");
    });
  }
}

/* =========================================================================
   12. NAVIGATION & TOAST UTILITIES
   ========================================================================= */
function initNavigationScroll() {
  const musicBtn = document.getElementById("music-toggle-btn");
  if (musicBtn) {
    musicBtn.addEventListener("click", () => {
      if (window.royalAudio) {
        window.royalAudio.toggle();
      }
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

function showToast(message) {
  let toast = document.getElementById("royal-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "royal-toast";
    toast.className = "royal-toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}
