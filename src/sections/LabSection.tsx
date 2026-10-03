import React, { useState, useEffect, useRef } from 'react';
import { LAB_MODULES } from '../data/siteData';
import { LabModule } from '../types';
import { Terminal, Cpu, Sparkles, Activity, ShieldCheck, Database, Cloud } from 'lucide-react';

export const LabSection: React.FC = () => {
  const [activeModule, setActiveModule] = useState<LabModule>(LAB_MODULES[0]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Interactive Particle Canvas in Lab Section
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 450);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle nodes
    const particleCount = 45;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      radius: Math.random() * 2 + 1,
    }));

    let mouseX = -100;
    let mouseY = -100;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    canvas.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(139, 108, 255, ${0.15 * (1 - dist / 110)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Update and draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse avoidance/repulsion
        const mdx = p.x - mouseX;
        const mdy = p.y - mouseY;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 80) {
          p.x += (mdx / mdist) * 1.5;
          p.y += (mdy / mdist) * 1.5;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#8B6CFF';
        ctx.shadowColor = '#5B3FE4';
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section id="lab" className="py-24 bg-[#050509] relative overflow-hidden border-t border-[#A78BFA]/15">
      {/* Background Lab Glow */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[400px] ambient-glow-purple pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-mono text-[#A78BFA] tracking-widest uppercase flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#8B6CFF]" />
              <span>RESEARCH &amp; FRONTIER EXPERIMENTS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F3FF] font-heading">
              THE ESTIVOXX LAB
            </h2>

            <p className="text-base text-[#A8A3B8]">
              Where we benchmark edge protocols, stress-test neural agent coordination, and formulate high-throughput distributed infrastructure.
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono text-[#A78BFA] bg-[#0D0B1F] px-4 py-2 rounded-xl border border-[#A78BFA]/20">
            <Activity className="w-4 h-4 text-[#8B6CFF] animate-pulse" />
            <span>INTERACTIVE RESEARCH ENVIRONMENT</span>
          </div>
        </div>

        {/* Lab Workbench Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Interactive Canvas Visualizer (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-[#0D0B1F] border border-[#A78BFA]/25 relative overflow-hidden min-h-[360px] sm:min-h-[420px] flex flex-col justify-between p-6">
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block cursor-crosshair z-0" />

            {/* Visualizer Top Overlay */}
            <div className="relative z-10 flex items-center justify-between text-xs font-mono text-[#A8A3B8]">
              <span className="flex items-center gap-1.5 text-[#F5F3FF]">
                <span className="w-2 h-2 rounded-full bg-[#8B6CFF] animate-ping" />
                SIMULATION CANVAS
              </span>
              <span className="text-[#A78BFA]">REACTIVE VECTOR PARTICLES</span>
            </div>

            {/* Visualizer Bottom Overlay */}
            <div className="relative z-10 pt-4 border-t border-[#A78BFA]/15 flex items-center justify-between text-xs font-mono">
              <span className="text-[#A8A3B8]">Hover over canvas to induce particle refraction</span>
              <span className="text-[#A78BFA]">45 Active Nodes</span>
            </div>
          </div>

          {/* Module Switcher & Telemetry (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div className="space-y-2.5">
              <span className="text-xs font-mono text-[#A78BFA] uppercase tracking-wider block">
                Research Modules
              </span>
              {LAB_MODULES.map((mod) => {
                const isSelected = activeModule.id === mod.id;
                return (
                  <button
                    key={mod.id}
                    onClick={() => setActiveModule(mod)}
                    className={`w-full p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'bg-[#0D0B1F] border-[#8B6CFF] shadow-lg shadow-[#5B3FE4]/20'
                        : 'bg-[#09071A] border-[#A78BFA]/18 hover:border-[#8B6CFF]/50 text-[#A8A3B8]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] font-mono text-[#A78BFA]">{mod.code}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#5B3FE4]/30 text-white border border-[#8B6CFF]/30">
                        {mod.status}
                      </span>
                    </div>
                    <span className="text-sm font-bold text-white font-heading block">
                      {mod.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Selected Module Telemetry */}
            <div className="p-5 rounded-xl bg-[#0D0B1F] border border-[#A78BFA]/20 space-y-3">
              <p className="text-xs text-[#A8A3B8] leading-relaxed">
                {activeModule.description}
              </p>

              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#A78BFA]/15">
                {activeModule.metrics.map((m, idx) => (
                  <div key={idx}>
                    <span className="text-[11px] font-mono text-[#A8A3B8] block">{m.label}</span>
                    <span className="text-base font-bold font-mono text-white tabular-nums">{m.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
