/**
 * Royal Islamic Wedding Audio Manager
 * Meditative Oud, Ney & Santoor Ambient Harmony (Maqam Hijaz / Andalusian Royal Soundscape)
 */
class RoyalAudioManager {
  constructor() {
    this.isPlaying = false;
    this.audioContext = null;
    this.isSynthesizing = false;
    this.synthInterval = null;
    this.gainNode = null;
    this.droneNodes = [];

    // Optional audio element if user adds custom mp3
    this.audioElement = new Audio();
    this.audioElement.loop = true;
    this.audioElement.src = "assets/audio/music.mp3"; // Can be replaced by custom track

    this.initListeners();
  }

  initListeners() {
    this.audioElement.addEventListener("play", () => {
      this.isPlaying = true;
      this.updateUI();
    });
    this.audioElement.addEventListener("pause", () => {
      this.isPlaying = false;
      this.updateUI();
    });
    this.audioElement.addEventListener("error", () => {
      console.log("Audio file fallback: using authentic royal Islamic ambient soundscape synthesizer.");
    });
  }

  ensureContext() {
    if (!this.audioContext) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.audioContext = new AudioCtx();
      this.gainNode = this.audioContext.createGain();
      this.gainNode.gain.setValueAtTime(0.2, this.audioContext.currentTime);
      this.gainNode.connect(this.audioContext.destination);
    }
    if (this.audioContext.state === "suspended") {
      this.audioContext.resume();
    }
  }

  // Play realistic golden door latch and royal chime sound effect
  playDoorUnlockSFX() {
    try {
      this.ensureContext();
      const ctx = this.audioContext;
      const now = ctx.currentTime;

      // Golden latch click
      const clickOsc = ctx.createOscillator();
      const clickGain = ctx.createGain();
      clickOsc.type = "sine";
      clickOsc.frequency.setValueAtTime(320, now);
      clickOsc.frequency.exponentialRampToValueAtTime(140, now + 0.12);
      clickGain.gain.setValueAtTime(0.3, now);
      clickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
      clickOsc.connect(clickGain);
      clickGain.connect(ctx.destination);
      clickOsc.start(now);
      clickOsc.stop(now + 0.15);

      // Royal chime & harp swell
      const chimeNotes = [523.25, 659.25, 783.99, 1046.5, 1318.51];
      chimeNotes.forEach((freq, index) => {
        const osc = ctx.createOscillator();
        const g = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now + 0.08 + index * 0.09);
        g.gain.setValueAtTime(0.001, now + index * 0.09);
        g.gain.exponentialRampToValueAtTime(0.18 / (index + 1), now + 0.15 + index * 0.09);
        g.gain.exponentialRampToValueAtTime(0.0001, now + 2.5 + index * 0.1);
        osc.connect(g);
        g.connect(ctx.destination);
        osc.start(now + 0.08 + index * 0.09);
        osc.stop(now + 2.8 + index * 0.1);
      });
    } catch (e) {
      console.warn("SFX error:", e);
    }
  }

  // Play royal envelope unsealing and golden chime swell
  playEnvelopeOpenSFX() {
    try {
      this.ensureContext();
      const ctx = this.audioContext;
      const now = ctx.currentTime;

      // Soft wax seal pop sound
      const popOsc = ctx.createOscillator();
      const popGain = ctx.createGain();
      popOsc.type = "sine";
      popOsc.frequency.setValueAtTime(260, now);
      popOsc.frequency.exponentialRampToValueAtTime(80, now + 0.18);
      popGain.gain.setValueAtTime(0.35, now);
      popGain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
      popOsc.connect(popGain);
      popGain.connect(ctx.destination);
      popOsc.start(now);
      popOsc.stop(now + 0.2);

      // Resonant golden harp & celestial chime swell
      const royalHarp = [440, 554.37, 659.25, 880, 1108.73, 1318.51];
      royalHarp.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const g = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now + 0.12 + idx * 0.08);
        g.gain.setValueAtTime(0.001, now + 0.12 + idx * 0.08);
        g.gain.exponentialRampToValueAtTime(0.14 / (idx * 0.5 + 1), now + 0.2 + idx * 0.08);
        g.gain.exponentialRampToValueAtTime(0.0001, now + 3.2 + idx * 0.1);
        osc.connect(g);
        g.connect(ctx.destination);
        osc.start(now + 0.12 + idx * 0.08);
        osc.stop(now + 3.4 + idx * 0.1);
      });
    } catch (e) {
      console.warn("Envelope SFX error:", e);
    }
  }

  // Synthesize an authentic, meditative royal acoustic Ney & Oud ambient harmony in Maqam Hijaz
  startRoyalSynthesizer() {
    this.ensureContext();
    if (this.isSynthesizing) return;
    this.isSynthesizing = true;
    this.isPlaying = true;
    const ctx = this.audioContext;

    // Deep warm drone resonance (C3, G3, C4)
    const baseFreqs = [130.81, 196.0, 261.63, 130.81 * 2];
    this.droneNodes = baseFreqs.map((freq, i) => {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = i % 2 === 0 ? "triangle" : "sine";
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      osc.detune.setValueAtTime((i - 1.5) * 3, ctx.currentTime);

      g.gain.setValueAtTime(0.001, ctx.currentTime);
      g.gain.linearRampToValueAtTime(0.035, ctx.currentTime + 3);

      osc.connect(g);
      g.connect(this.gainNode);
      osc.start();
      return { osc, gain: g };
    });

    // Melodic Ney & Oud notes in classical Maqam Hijaz (C, Db, E, F, G, Ab, Bb, C5)
    const hijazScale = [
      261.63, // C4
      277.18, // Db4
      329.63, // E4
      349.23, // F4
      392.00, // G4
      415.30, // Ab4
      466.16, // Bb4
      523.25, // C5
      554.37  // Db5
    ];

    let noteIndex = 0;
    // Mystical contemplative sequence
    const sequence = [0, 2, 3, 4, 2, 1, 0, 4, 5, 4, 3, 2, 1, 0, 7, 6, 4, 2, 0];

    const playNextNote = () => {
      if (!this.isSynthesizing) return;
      const noteFreq = hijazScale[sequence[noteIndex % sequence.length]];
      noteIndex++;

      const osc = ctx.createOscillator();
      const noteGain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(noteFreq, ctx.currentTime);

      // Ney flute envelope with soft breath attack
      noteGain.gain.setValueAtTime(0.0001, ctx.currentTime);
      noteGain.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 0.18);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 2.5);

      osc.connect(noteGain);
      noteGain.connect(this.gainNode);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 2.6);

      const nextDelay = 1300 + Math.random() * 900;
      this.synthTimeout = setTimeout(playNextNote, nextDelay);
    };

    playNextNote();
    this.updateUI();
  }

  stopRoyalSynthesizer() {
    if (!this.isSynthesizing) return;
    this.isSynthesizing = false;
    this.isPlaying = false;
    clearTimeout(this.synthTimeout);

    if (this.droneNodes && this.droneNodes.length) {
      this.droneNodes.forEach(({ osc, gain }) => {
        try {
          if (this.audioContext) {
            gain.gain.linearRampToValueAtTime(0.0001, this.audioContext.currentTime + 1);
            setTimeout(() => osc.stop(), 1100);
          }
        } catch (e) {}
      });
      this.droneNodes = [];
    }
    this.updateUI();
  }

  play() {
    this.ensureContext();
    const playPromise = this.audioElement.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          this.isPlaying = true;
          this.updateUI();
        })
        .catch(() => {
          this.startRoyalSynthesizer();
        });
    } else {
      this.startRoyalSynthesizer();
    }
  }

  pause() {
    if (!this.audioElement.paused) {
      this.audioElement.pause();
    }
    if (this.isSynthesizing) {
      this.stopRoyalSynthesizer();
    }
    this.isPlaying = false;
    this.updateUI();
  }

  toggle() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  updateUI() {
    const musicBtn = document.getElementById("music-toggle-btn");
    const visualizer = document.getElementById("music-visualizer");
    const musicLabel = document.getElementById("music-label");

    if (musicBtn) {
      if (this.isPlaying) {
        musicBtn.classList.add("playing");
        musicBtn.setAttribute("aria-label", "Pause Music");
        if (musicLabel) musicLabel.textContent = "Music Playing";
        if (visualizer) visualizer.classList.add("active");
      } else {
        musicBtn.classList.remove("playing");
        musicBtn.setAttribute("aria-label", "Play Music");
        if (musicLabel) musicLabel.textContent = "Play Music";
        if (visualizer) visualizer.classList.remove("active");
      }
    }
  }
}

window.royalAudio = new RoyalAudioManager();
