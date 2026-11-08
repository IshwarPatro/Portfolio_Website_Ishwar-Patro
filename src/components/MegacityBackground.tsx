"use client";

import React, { useEffect, useRef, useState } from "react";

export default function MegacityBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [altitudeStr, setAltitudeStr] = useState("ALT: 840m // SKY STRATUM");
  const [canyonDepthPct, setCanyonDepthPct] = useState(5);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resizeCanvas() {
      if (!canvas || !ctx) return;
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas, { passive: true });

    let scrollProgress = 0;
    let targetScrollProgress = 0;
    let mouseX = 0, mouseY = 0;
    let targetMouseX = 0, targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / width - 0.5) * 2;
      targetMouseY = (e.clientY / height - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      targetScrollProgress = Math.max(0, Math.min(1, window.scrollY / (maxScroll || 1)));

      const pct = Math.round(targetScrollProgress * 100);
      setCanyonDepthPct(Math.max(5, pct));

      const altMeters = Math.round(840 - targetScrollProgress * 760);
      const sector =
        targetScrollProgress < 0.28
          ? "SKY STRATUM"
          : targetScrollProgress < 0.68
          ? "MID-CANYON"
          : "NEON UNDERCITY";
      setAltitudeStr(`ALT: ${altMeters}m // ${sector}`);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cable car state
    const gondolas = [
      { spanIdx: 0, t: 0.15, speed: 0.00035, dir: 1, color: "#f59e0b" },
      { spanIdx: 1, t: 0.7, speed: 0.00045, dir: -1, color: "#ff5038" },
      { spanIdx: 2, t: 0.4, speed: 0.0003, dir: 1, color: "#38bdf8" },
    ];

    // Atmospheric embers
    const embers = Array.from({ length: 50 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: 1 + Math.random() * 2,
      speedY: 0.7 + Math.random() * 1.3,
      speedX: (Math.random() - 0.5) * 0.4,
      alpha: 0.2 + Math.random() * 0.45,
      hue: Math.random() > 0.6 ? 12 : 200,
    }));

    // Steam puffs
    const steamPuffs = Array.from({ length: 18 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: 18 + Math.random() * 40,
      speedY: -0.3 - Math.random() * 0.35,
      alpha: 0.06 + Math.random() * 0.1,
      grow: 0.04 + Math.random() * 0.07,
    }));

    // Mechanical Sky Whale
    function drawSkyWhale(cx: number, cy: number, scale: number, time: number, scrollY: number) {
      if (!ctx) return;
      ctx.save();
      ctx.translate(cx, cy - scrollY * 0.35);
      ctx.scale(scale, scale);

      const tailAngle = Math.sin(time * 1.6) * 0.18;
      const finAngle = Math.sin(time * 1.4) * 0.22;
      const bodyHover = Math.sin(time * 0.8) * 12;
      ctx.translate(0, bodyHover);

      // Radial Glow
      const glowGrad = ctx.createRadialGradient(0, 0, 40, 0, 0, 320);
      glowGrad.addColorStop(0, "rgba(56, 189, 248, 0.18)");
      glowGrad.addColorStop(0.5, "rgba(15, 23, 42, 0.35)");
      glowGrad.addColorStop(1, "rgba(7, 10, 18, 0)");
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(0, 0, 320, 0, Math.PI * 2);
      ctx.fill();

      // Back Flipper
      ctx.save();
      ctx.translate(60, 20);
      ctx.rotate(-finAngle * 0.8);
      ctx.fillStyle = "#1c283d";
      ctx.beginPath();
      ctx.ellipse(40, 30, 95, 26, Math.PI / 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Whale Body
      ctx.save();
      const bodyGrad = ctx.createLinearGradient(-260, -80, 260, 100);
      bodyGrad.addColorStop(0, "#0f172a");
      bodyGrad.addColorStop(0.3, "#1e293b");
      bodyGrad.addColorStop(0.7, "#24344d");
      bodyGrad.addColorStop(1, "#0b1320");
      ctx.fillStyle = bodyGrad;
      ctx.strokeStyle = "#38bdf8";
      ctx.lineWidth = 1.2;

      ctx.beginPath();
      ctx.moveTo(-240, 10);
      ctx.bezierCurveTo(-140, -90, 80, -95, 200, -20);
      ctx.bezierCurveTo(250, 10, 240, 50, 180, 70);
      ctx.bezierCurveTo(70, 110, -100, 100, -200, 40);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Belly Grooves
      ctx.strokeStyle = "rgba(56, 189, 248, 0.5)";
      ctx.lineWidth = 1.8;
      for (let i = -140; i < 160; i += 32) {
        ctx.beginPath();
        ctx.moveTo(i, 20 + Math.sin(i * 0.02) * 15);
        ctx.quadraticCurveTo(i + 15, 60, i + 35, 75);
        ctx.stroke();
      }

      // Whale Eye
      ctx.fillStyle = "#ff5038";
      ctx.beginPath();
      ctx.arc(170, 0, 4.5, 0, Math.PI * 2);
      ctx.fill();

      // Fortress / City on back
      const buildingData = [
        { x: -90, y: -125, w: 28, h: 50 },
        { x: -55, y: -138, w: 30, h: 62 },
        { x: 10, y: -140, w: 26, h: 65 },
        { x: 42, y: -128, w: 24, h: 52 },
        { x: 72, y: -115, w: 22, h: 40 },
      ];
      buildingData.forEach((b) => {
        ctx.fillStyle = "#111827";
        ctx.fillRect(b.x, b.y, b.w, b.h);
        ctx.strokeStyle = "#334155";
        ctx.strokeRect(b.x, b.y, b.w, b.h);

        ctx.fillStyle = "#fef08a";
        for (let wy = b.y + 6; wy < b.y + b.h - 6; wy += 8) {
          for (let wx = b.x + 5; wx < b.x + b.w - 5; wx += 7) {
            if ((wx + wy) % 3 === 0) ctx.fillRect(wx, wy, 3, 4);
          }
        }
      });

      // Spire Antenna
      ctx.strokeStyle = "#ff5038";
      ctx.beginPath();
      ctx.moveTo(-8, -140);
      ctx.lineTo(-8, -185);
      ctx.stroke();
      ctx.fillStyle = Math.sin(time * 4) > 0 ? "#ff5038" : "#7f1d1d";
      ctx.beginPath();
      ctx.arc(-8, -185, 3.5, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();

      // Front Flipper
      ctx.save();
      ctx.translate(50, 30);
      ctx.rotate(finAngle);
      const finGrad = ctx.createLinearGradient(0, 0, 80, 90);
      finGrad.addColorStop(0, "#1e293b");
      finGrad.addColorStop(1, "#0f172a");
      ctx.fillStyle = finGrad;
      ctx.strokeStyle = "#38bdf8";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.ellipse(50, 45, 110, 32, Math.PI / 3.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.restore();

      // Caudal Tail
      ctx.save();
      ctx.translate(-225, 15);
      ctx.rotate(tailAngle);
      ctx.fillStyle = "#111827";
      ctx.beginPath();
      ctx.moveTo(0, -18);
      ctx.lineTo(-70, -8);
      ctx.lineTo(-70, 18);
      ctx.lineTo(0, 18);
      ctx.closePath();
      ctx.fill();

      ctx.translate(-70, 0);
      ctx.rotate(tailAngle * 0.7);
      const flukeGrad = ctx.createLinearGradient(-60, -70, 20, 70);
      flukeGrad.addColorStop(0, "#38bdf8");
      flukeGrad.addColorStop(0.5, "#1e293b");
      flukeGrad.addColorStop(1, "#090d16");
      ctx.fillStyle = flukeGrad;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(-20, -45, -55, -85, -80, -90);
      ctx.bezierCurveTo(-65, -50, -35, -20, -15, 0);
      ctx.bezierCurveTo(-35, 20, -65, 50, -80, 90);
      ctx.bezierCurveTo(-55, 85, -20, 45, 0, 0);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      ctx.restore();
    }

    // Steampunk Sky Turtle
    function drawSteampunkTurtle(cx: number, cy: number, scale: number, time: number, scrollY: number) {
      if (!ctx) return;
      ctx.save();
      ctx.translate(cx, cy - (scrollY - 0.45) * 800);
      ctx.scale(scale, scale);

      const flapAngle = Math.sin(time * 1.3) * 0.28;
      const headTilt = Math.sin(time * 0.9) * 0.08;

      // Head
      ctx.save();
      ctx.translate(145, 15);
      ctx.rotate(headTilt);
      ctx.fillStyle = "#475569";
      ctx.beginPath();
      ctx.ellipse(-20, 0, 36, 18, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#334155";
      ctx.beginPath();
      ctx.ellipse(15, -4, 28, 19, -0.15, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#f59e0b";
      ctx.beginPath();
      ctx.arc(24, -9, 4.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Carapace
      const shellGrad = ctx.createRadialGradient(0, -20, 30, 0, 0, 160);
      shellGrad.addColorStop(0, "#78350f");
      shellGrad.addColorStop(0.5, "#451a03");
      shellGrad.addColorStop(1, "#1e293b");
      ctx.fillStyle = shellGrad;
      ctx.strokeStyle = "#d97706";
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.ellipse(0, 0, 145, 82, 0, Math.PI, 0);
      ctx.lineTo(145, 20);
      ctx.quadraticCurveTo(0, 40, -145, 20);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Smokestacks
      const chimneyCoords = [-65, -35, 10, 48];
      chimneyCoords.forEach((chX, idx) => {
        const chH = 32 + (idx % 2) * 16;
        ctx.fillStyle = "#334155";
        ctx.fillRect(chX, -82 - chH, 12, chH);
        ctx.strokeRect(chX, -82 - chH, 12, chH);

        const puffOffset = (time * 1.5 + idx * 1.2) % 3;
        ctx.fillStyle = `rgba(255, 255, 255, ${0.3 - puffOffset * 0.08})`;
        ctx.beginPath();
        ctx.arc(chX + 6, -82 - chH - 12 * puffOffset, 8 + puffOffset * 8, 0, Math.PI * 2);
        ctx.fill();
      });

      // Front Flipper
      ctx.save();
      ctx.translate(65, 30);
      ctx.rotate(flapAngle);
      ctx.fillStyle = "#475569";
      ctx.beginPath();
      ctx.ellipse(45, 40, 90, 28, Math.PI / 3.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      ctx.restore();
    }

    let animationTime = 0;

    function renderScene() {
      if (!ctx) return;
      animationTime += 0.016;

      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;
      scrollProgress += (targetScrollProgress - scrollProgress) * 0.06;

      ctx.clearRect(0, 0, width, height);

      // Layer 0: Sky Strata Gradient
      const skyGrad = ctx.createLinearGradient(0, 0, 0, height);
      if (scrollProgress < 0.35) {
        skyGrad.addColorStop(0, "#101827");
        skyGrad.addColorStop(0.6, "#152438");
        skyGrad.addColorStop(1, "#080c14");
      } else if (scrollProgress < 0.7) {
        skyGrad.addColorStop(0, "#181525");
        skyGrad.addColorStop(0.5, "#341624");
        skyGrad.addColorStop(1, "#0a0812");
      } else {
        skyGrad.addColorStop(0, "#260917");
        skyGrad.addColorStop(0.6, "#3c0817");
        skyGrad.addColorStop(1, "#040307");
      }
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, width, height);

      const isMobile = width < 768;

      // Layer 1: Sky Leviathans (scaled down and pushed back on mobile)
      const whaleScale = isMobile ? Math.min(width / 1600, 0.55) : Math.min(width / 1300, 0.95);
      const whaleY = isMobile ? height * 0.22 : height * 0.36;
      drawSkyWhale(width * 0.54 + mouseX * 20, whaleY + mouseY * 12, whaleScale, animationTime, scrollProgress * height);

      if (scrollProgress > 0.15 && scrollProgress < 0.85) {
        const turtleScale = isMobile ? Math.min(width / 1500, 0.5) : Math.min(width / 1200, 0.82);
        drawSteampunkTurtle(width * 0.48 + mouseX * 25, height * 0.52 + mouseY * 15, turtleScale, animationTime, scrollProgress);
      }

      // Layer 2: Distant Skyscraper Silhouettes
      const distOffset = scrollProgress * 200;
      ctx.fillStyle = "#090f1c";
      const colCount = isMobile ? 5 : 8;
      for (let i = 0; i < colCount; i++) {
        const bx = width * 0.1 + i * (width * 0.12);
        const bw = width * 0.08;
        const bh = height * 0.95;
        const by = height * 0.25 - distOffset * 0.4;
        ctx.fillRect(bx, by, bw, bh);

        ctx.fillStyle = i % 2 === 0 ? "rgba(254, 240, 138, 0.25)" : "rgba(56, 189, 248, 0.25)";
        for (let wy = by + 25; wy < by + bh - 25; wy += 32) {
          ctx.fillRect(bx + 6, wy, bw - 12, 3);
        }
        ctx.fillStyle = "#090f1c";
      }

      // Layer 3: Flanking Canyon Walls (Narrower on mobile so they frame without covering)
      const wallPanY = scrollProgress * 700;
      const leftWallWidth = isMobile ? Math.max(width * 0.14, 60) : Math.max(width * 0.28, 240);
      const leftGrad = ctx.createLinearGradient(0, 0, leftWallWidth, 0);
      leftGrad.addColorStop(0, "#03060a");
      leftGrad.addColorStop(0.7, "#080d17");
      leftGrad.addColorStop(1, "#121b2b");
      ctx.fillStyle = leftGrad;
      ctx.fillRect(0, 0, leftWallWidth, height);

      // Left Wall Platforms & ACs
      for (let y = -200; y < height + 400; y += 140) {
        const curY = y - (wallPanY % 140);
        ctx.fillStyle = "#1e293b";
        ctx.fillRect(leftWallWidth - (isMobile ? 30 : 60), curY, isMobile ? 30 : 60, 6);
        ctx.strokeStyle = "#475569";
        ctx.lineWidth = 1.5;
        ctx.strokeRect(leftWallWidth - (isMobile ? 30 : 60), curY - 20, isMobile ? 30 : 60, 20);
      }

      const rightWallWidth = isMobile ? Math.max(width * 0.14, 60) : Math.max(width * 0.26, 220);
      const rightWallX = width - rightWallWidth;
      const rightGrad = ctx.createLinearGradient(rightWallX, 0, width, 0);
      rightGrad.addColorStop(0, "#121b2b");
      rightGrad.addColorStop(0.3, "#080d17");
      rightGrad.addColorStop(1, "#03060a");
      ctx.fillStyle = rightGrad;
      ctx.fillRect(rightWallX, 0, rightWallWidth, height);

      // Layer 4: Cable Car Gondolas & Suspended Cables
      const cableSpans = [
        { y1: height * 0.2, y2: height * 0.26, sag: 24 },
        { y1: height * 0.5, y2: height * 0.56, sag: 32 },
        { y1: height * 0.78, y2: height * 0.84, sag: 38 },
      ];

      cableSpans.forEach((span, idx) => {
        const spanPanY = (span.y1 - (scrollProgress * 380) % (height * 0.9) + height * 0.9) % (height * 0.9);
        ctx.strokeStyle = "#02050f";
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.moveTo(leftWallWidth - 10, spanPanY);
        ctx.quadraticCurveTo(width * 0.5, spanPanY + span.sag, rightWallX + 10, spanPanY + (span.y2 - span.y1));
        ctx.stroke();

        const gondola = gondolas[idx];
        gondola.t = (gondola.t + gondola.speed * gondola.dir + 1) % 1;
        const gx = (leftWallWidth - 10) + gondola.t * ((rightWallX + 10) - (leftWallWidth - 10));
        const gy = spanPanY + span.sag * 4 * gondola.t * (1 - gondola.t) + gondola.t * (span.y2 - span.y1);

        ctx.save();
        ctx.translate(gx, gy);
        ctx.fillStyle = gondola.color;
        ctx.fillRect(-12, 12, 24, 18);
        ctx.fillStyle = "#fef08a";
        ctx.fillRect(-8, 15, 16, 6);
        ctx.restore();
      });

      // Layer 5: Atmospheric Embers
      embers.forEach((p) => {
        p.y = (p.y + p.speedY) % height;
        p.x = (p.x + p.speedX + width) % width;
        ctx.fillStyle = `hsla(${p.hue}, 90%, 65%, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Steam Puffs
      steamPuffs.forEach((s) => {
        s.y += s.speedY;
        s.radius += s.grow;
        if (s.y < -80) {
          s.y = height + 40;
          s.radius = 18 + Math.random() * 35;
        }
        ctx.fillStyle = `rgba(255, 80, 56, ${s.alpha})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animId = requestAnimationFrame(renderScene);
    }

    animId = requestAnimationFrame(renderScene);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* 1. Procedural 2D/3D Atmospheric Canyon Canvas */}
      <canvas
        ref={canvasRef}
        id="megacity-canvas"
        className="fixed top-0 left-0 w-screen h-screen z-0 pointer-events-none block"
      />

      {/* 2. Cinematic Film Vignette Overlay */}
      <div className="film-vignette" />

      {/* 3. CRT Scanlines Overlay */}
      <div className="crt-scanlines" />

      {/* 4. Telemetry Descent Bar (Desktop Only) */}
      <aside className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-4 py-4 px-2 rounded-2xl cyber-panel border border-white/10 text-[10px] font-mono-code text-slate-400">
        <div
          className="uppercase tracking-widest text-[9px] text-cyan-400 font-semibold mb-2"
          style={{ writingMode: "vertical-rl" }}
        >
          CANYON_DESCENT
        </div>
        <div className="w-1.5 h-36 bg-slate-800 rounded-full relative overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-red-500 via-amber-400 to-cyan-400 rounded-full transition-all duration-75"
            style={{ height: `${canyonDepthPct}%` }}
          />
        </div>
        <span className="text-white font-bold">{canyonDepthPct < 10 ? `0${canyonDepthPct}` : canyonDepthPct}%</span>
        <div className="w-2 h-2 rounded-full bg-emerald-400 beacon-active" />
      </aside>
    </>
  );
}
