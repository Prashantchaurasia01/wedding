/**
 * Interactive Gold Foil Scratch Card
 * Allows guests to scratch with mouse or finger to reveal the auspicious wedding date
 */
class GoldScratchCard {
  constructor(canvasId, options = {}) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext("2d");
    this.isDrawing = false;
    this.isRevealed = false;
    this.scratchRadius = options.radius || 24;
    this.threshold = options.threshold || 45; // 45% cleared triggers auto-reveal
    this.onReveal = options.onReveal || null;

    this.init();
  }

  init() {
    this.resizeCanvas();
    this.drawFoil();
    this.bindEvents();

    window.addEventListener("resize", () => {
      if (!this.isRevealed) {
        this.resizeCanvas();
        this.drawFoil();
      }
    });
  }

  resizeCanvas() {
    const rect = this.canvas.parentElement.getBoundingClientRect();
    this.canvas.width = rect.width;
    this.canvas.height = rect.height;
  }

  drawFoil() {
    const { width, height } = this.canvas;
    const ctx = this.ctx;

    // Reset composite operation
    ctx.globalCompositeOperation = "source-over";

    // Luxury Champagne Gold gradient
    const grad = ctx.createLinearGradient(0, 0, width, height);
    grad.addColorStop(0, "#C59B27");
    grad.addColorStop(0.25, "#F3E5AB");
    grad.addColorStop(0.5, "#D4AF37");
    grad.addColorStop(0.75, "#AA771C");
    grad.addColorStop(1, "#E5C158");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    // Subtle ornate gold foil stippling / texture
    ctx.fillStyle = "rgba(255, 255, 255, 0.18)";
    for (let i = 0; i < 400; i++) {
      const rx = Math.random() * width;
      const ry = Math.random() * height;
      const rr = Math.random() * 2 + 0.5;
      ctx.beginPath();
      ctx.arc(rx, ry, rr, 0, Math.PI * 2);
      ctx.fill();
    }

    // Elegant gold border inside the canvas
    ctx.strokeStyle = "rgba(110, 80, 15, 0.45)";
    ctx.lineWidth = 4;
    ctx.strokeRect(8, 8, width - 16, height - 16);

    // Dotted inner frame
    ctx.strokeStyle = "rgba(255, 255, 255, 0.6)";
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);
    ctx.strokeRect(14, 14, width - 28, height - 28);
    ctx.setLineDash([]);

    // Calligraphy / Text overlay on foil
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    const isSmall = width < 380;

    ctx.font = isSmall
      ? "italic 600 12px 'Cormorant Garamond', Georgia, serif"
      : "italic 600 14px 'Cormorant Garamond', Georgia, serif";
    ctx.fillStyle = "#4A3308";
    ctx.fillText("✦ SCRATCH HERE TO REVEAL ✦", width / 2, height / 2 - 20);

    ctx.font = isSmall
      ? "bold 15px 'Cinzel', serif"
      : "bold 18px 'Cinzel', serif";
    ctx.fillStyle = "#2D1E04";
    ctx.fillText("REVEAL AUSPICIOUS DATE", width / 2, height / 2 + 6);

    ctx.font = isSmall
      ? "10.5px 'Outfit', sans-serif"
      : "11.5px 'Outfit', sans-serif";
    ctx.fillStyle = "#5E4310";
    ctx.fillText("Scratch to reveal the Nikah & Walima date", width / 2, height / 2 + 30);
  }

  bindEvents() {
    const getPos = (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      return {
        x: clientX - rect.left,
        y: clientY - rect.top
      };
    };

    const startScratch = (e) => {
      if (this.isRevealed) return;
      this.isDrawing = true;
      this.scratchAt(getPos(e));
    };

    const moveScratch = (e) => {
      if (!this.isDrawing || this.isRevealed) return;
      if (e.cancelable && e.type === "touchmove") e.preventDefault();
      this.scratchAt(getPos(e));
    };

    const endScratch = () => {
      if (!this.isDrawing) return;
      this.isDrawing = false;
      this.checkPercentage();
    };

    this.canvas.addEventListener("mousedown", startScratch);
    window.addEventListener("mousemove", moveScratch);
    window.addEventListener("mouseup", endScratch);

    this.canvas.addEventListener("touchstart", startScratch, { passive: false });
    window.addEventListener("touchmove", moveScratch, { passive: false });
    window.addEventListener("touchend", endScratch);
  }

  scratchAt(pos) {
    const ctx = this.ctx;
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, this.scratchRadius, 0, Math.PI * 2);
    ctx.fill();
  }

  checkPercentage() {
    if (this.isRevealed) return;
    const { width, height } = this.canvas;
    const imgData = this.ctx.getImageData(0, 0, width, height);
    const pixels = imgData.data;
    let transparent = 0;
    const total = pixels.length / 4;

    for (let i = 3; i < pixels.length; i += 16) {
      // sample every 4th pixel for speed
      if (pixels[i] === 0) {
        transparent++;
      }
    }

    const percent = (transparent / (total / 4)) * 100;
    if (percent > this.threshold) {
      this.reveal();
    }
  }

  reveal() {
    if (this.isRevealed) return;
    this.isRevealed = true;

    // Smooth fade out of remaining foil
    this.canvas.style.transition = "opacity 0.6s ease-out";
    this.canvas.style.opacity = "0";
    setTimeout(() => {
      this.canvas.style.display = "none";
      if (this.onReveal) this.onReveal();
    }, 600);
  }
}

window.GoldScratchCard = GoldScratchCard;
