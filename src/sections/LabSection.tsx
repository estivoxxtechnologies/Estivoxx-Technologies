import React, { useState, useEffect, useRef } from 'react';
import { LAB_MODULES } from '../data/siteData';
import { LabModule } from '../types';
import { Sparkles, Activity } from 'lucide-react';

export const LabSection: React.FC = () => {
  const [activeModule, setActiveModule] = useState<LabModule>(
    LAB_MODULES[0]
  );

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const workbenchRef = useRef<HTMLDivElement>(null);

  /*
   * ================================================================
   * INTERACTIVE PARTICLE SIMULATION
   * ================================================================
   *
   * Mouse tracking is attached to the entire workbench rather than
   * the canvas because the UI cards sit above the canvas.
   *
   * This means particle refraction works even when the cursor is
   * hovering over Research Modules or Telemetry.
   */
  useEffect(() => {
    const canvas = canvasRef.current;
    const workbench = workbenchRef.current;

    if (!canvas || !workbench) return;

    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    let animationFrameId: number;

    let width = workbench.clientWidth;
    let height = workbench.clientHeight;

    canvas.width = width;
    canvas.height = height;

    const handleResize = () => {
      width = workbench.clientWidth;
      height = workbench.clientHeight;

      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);

    /*
     * Particle configuration
     */
    const particleCount = 55;

    const particles = Array.from(
      { length: particleCount },
      () => ({
        x: Math.random() * width,
        y: Math.random() * height,

        vx: (Math.random() - 0.5) * 0.65,
        vy: (Math.random() - 0.5) * 0.65,

        radius: Math.random() * 1.8 + 0.8,
      })
    );

    /*
     * Mouse position relative to the workbench.
     */
    let mouseX = -1000;
    let mouseY = -1000;

    let mouseActive = false;

    /*
     * Track mouse anywhere inside the simulation workbench.
     */
    const handleMouseMove = (event: MouseEvent) => {
      const rect = workbench.getBoundingClientRect();

      mouseX = event.clientX - rect.left;
      mouseY = event.clientY - rect.top;

      mouseActive = true;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;

      mouseActive = false;
    };

    workbench.addEventListener(
      'mousemove',
      handleMouseMove
    );

    workbench.addEventListener(
      'mouseleave',
      handleMouseLeave
    );

    /*
     * Render loop
     */
    const render = () => {
      ctx.clearRect(
        0,
        0,
        width,
        height
      );

      /*
       * ============================================================
       * UPDATE PARTICLES
       * ============================================================
       */
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        /*
         * Boundary bounce
         */
        if (
          particle.x <= 0 ||
          particle.x >= width
        ) {
          particle.vx *= -1;
        }

        if (
          particle.y <= 0 ||
          particle.y >= height
        ) {
          particle.vy *= -1;
        }

        /*
         * ==========================================================
         * MOUSE REFRACTION
         * ==========================================================
         */
        if (mouseActive) {
          const dx = particle.x - mouseX;
          const dy = particle.y - mouseY;

          const distance = Math.sqrt(
            dx * dx + dy * dy
          );

          const interactionRadius = 130;

          if (
            distance < interactionRadius &&
            distance > 0
          ) {
            /*
             * Stronger force closer to cursor.
             */
            const force =
              (1 - distance / interactionRadius) * 2.4;

            particle.x +=
              (dx / distance) * force;

            particle.y +=
              (dy / distance) * force;
          }
        }
      });

      /*
       * ============================================================
       * CONNECTIONS
       * ============================================================
       */
      for (
        let i = 0;
        i < particles.length;
        i++
      ) {
        for (
          let j = i + 1;
          j < particles.length;
          j++
        ) {
          const dx =
            particles[i].x -
            particles[j].x;

          const dy =
            particles[i].y -
            particles[j].y;

          const distance = Math.sqrt(
            dx * dx + dy * dy
          );

          if (distance < 115) {
            ctx.beginPath();

            ctx.moveTo(
              particles[i].x,
              particles[i].y
            );

            ctx.lineTo(
              particles[j].x,
              particles[j].y
            );

            const opacity =
              0.18 *
              (1 - distance / 115);

            ctx.strokeStyle = `rgba(139, 108, 255, ${opacity})`;

            ctx.lineWidth = 0.8;

            ctx.stroke();
          }
        }
      }

      /*
       * ============================================================
       * PARTICLES
       * ============================================================
       */
      particles.forEach((particle) => {
        ctx.beginPath();

        ctx.arc(
          particle.x,
          particle.y,
          particle.radius,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = '#8B6CFF';

        ctx.shadowColor = '#5B3FE4';

        ctx.shadowBlur = 7;

        ctx.fill();

        ctx.shadowBlur = 0;
      });

      /*
       * ============================================================
       * CURSOR INTERACTION RING
       * ============================================================
       */
      if (mouseActive) {
        const interactionRadius = 130;

        const gradient =
          ctx.createRadialGradient(
            mouseX,
            mouseY,
            0,
            mouseX,
            mouseY,
            interactionRadius
          );

        gradient.addColorStop(
          0,
          'rgba(139, 108, 255, 0.10)'
        );

        gradient.addColorStop(
          0.5,
          'rgba(139, 108, 255, 0.035)'
        );

        gradient.addColorStop(
          1,
          'rgba(139, 108, 255, 0)'
        );

        ctx.beginPath();

        ctx.arc(
          mouseX,
          mouseY,
          interactionRadius,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = gradient;

        ctx.fill();

        /*
         * Cursor ring
         */
        ctx.beginPath();

        ctx.arc(
          mouseX,
          mouseY,
          35,
          0,
          Math.PI * 2
        );

        ctx.strokeStyle =
          'rgba(167, 139, 250, 0.12)';

        ctx.lineWidth = 1;

        ctx.stroke();
      }

      animationFrameId =
        requestAnimationFrame(render);
    };

    render();

    /*
     * Cleanup
     */
    return () => {
      window.removeEventListener(
        'resize',
        handleResize
      );

      workbench.removeEventListener(
        'mousemove',
        handleMouseMove
      );

      workbench.removeEventListener(
        'mouseleave',
        handleMouseLeave
      );

      cancelAnimationFrame(
        animationFrameId
      );
    };
  }, []);

  return (
    <section
      id="lab"
      className="py-24 bg-[#050509] relative overflow-hidden border-t border-[#A78BFA]/15"
    >
      {/* ==========================================================
          BACKGROUND GLOW
      ========================================================== */}

      <div className="absolute top-1/4 right-1/4 w-[600px] h-[400px] ambient-glow-purple pointer-events-none" />

      <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-[#5B3FE4]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ========================================================
            HEADER
        ======================================================== */}

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">

          <div className="max-w-3xl">

            <div className="text-xs font-mono text-[#A78BFA] tracking-widest uppercase flex items-center gap-2 mb-3">

              <Sparkles className="w-3.5 h-3.5 text-[#8B6CFF]" />

              <span>
                RESEARCH &amp; FRONTIER EXPERIMENTS
              </span>

            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F3FF] font-heading">
              THE ESTIVOXX LAB
            </h2>

            <p className="mt-4 text-base text-[#A8A3B8] max-w-2xl leading-7">
              Where we benchmark edge protocols,
              stress-test neural agent coordination,
              and formulate high-throughput distributed
              infrastructure.
            </p>

          </div>

          <div className="shrink-0 flex items-center gap-3 text-xs font-mono text-[#A78BFA] bg-[#0D0B1F] px-4 py-2.5 rounded-xl border border-[#A78BFA]/20">

            <Activity className="w-4 h-4 text-[#8B6CFF] animate-pulse" />

            <span>
              INTERACTIVE RESEARCH ENVIRONMENT
            </span>

          </div>

        </div>

        {/* ========================================================
            SIMULATION WORKBENCH
        ======================================================== */}

        <div
          ref={workbenchRef}
          className="
            relative
            overflow-hidden
            rounded-2xl
            border
            border-[#A78BFA]/25
            bg-[#0D0B1F]
            min-h-[650px]
            sm:min-h-[680px]
            shadow-2xl
            shadow-[#5B3FE4]/10
          "
        >

          {/* ======================================================
              PARTICLE CANVAS
          ====================================================== */}

          <canvas
            ref={canvasRef}
            className="
              absolute
              inset-0
              w-full
              h-full
              block
              z-0
              pointer-events-none
            "
          />

          {/* Canvas gradient */}
          <div
            className="
              absolute
              inset-0
              z-[1]
              pointer-events-none
              bg-gradient-to-br
              from-[#09071A]/50
              via-transparent
              to-[#5B3FE4]/10
            "
          />

          {/* ======================================================
              CANVAS TOP BAR
          ====================================================== */}

          <div className="absolute top-0 left-0 right-0 z-30">

            <div className="px-5 sm:px-7 py-4 border-b border-[#A78BFA]/10 bg-[#09071A]/35 backdrop-blur-md">

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <span className="relative flex h-2 w-2">

                    <span className="absolute inline-flex h-full w-full rounded-full bg-[#8B6CFF] opacity-60 animate-ping" />

                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8B6CFF]" />

                  </span>

                  <span className="text-xs font-mono text-[#F5F3FF] tracking-wide">
                    SIMULATION CANVAS
                  </span>

                </div>

                <span className="text-[10px] sm:text-xs font-mono text-[#A78BFA] tracking-wide">
                  REACTIVE VECTOR PARTICLES
                </span>

              </div>

            </div>

          </div>

          {/* ======================================================
              CONTENT
          ====================================================== */}

          <div className="relative z-20 px-5 sm:px-8 pt-24 pb-20">

            <div className="max-w-5xl mx-auto">

              {/* ==================================================
                  RESEARCH MODULES HEADER
              ================================================== */}

              <div className="flex items-end justify-between gap-4 mb-4">

                <div>

                  <div className="text-[10px] font-mono text-[#A78BFA] uppercase tracking-[0.2em] mb-1">
                    Research Modules
                  </div>

                  <p className="text-xs text-[#A8A3B8]">
                    Select an active research environment
                  </p>

                </div>

                <div className="hidden sm:block text-[10px] font-mono text-[#A8A3B8]">
                  {LAB_MODULES.length
                    .toString()
                    .padStart(2, '0')}{' '}
                  MODULES
                </div>

              </div>

              {/* ==================================================
                  MODULE GRID
              ================================================== */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

                {LAB_MODULES.map((mod) => {

                  const isSelected =
                    activeModule.id === mod.id;

                  return (
                    <button
                      key={mod.id}
                      type="button"
                      onClick={() =>
                        setActiveModule(mod)
                      }
                      className={`
                        group
                        relative
                        w-full
                        min-h-[92px]
                        p-4
                        rounded-xl
                        border
                        text-left
                        backdrop-blur-xl
                        transition-all
                        duration-300
                        cursor-pointer
                        ${
                          isSelected
                            ? `
                              bg-[#0D0B1F]/95
                              border-[#8B6CFF]
                              shadow-lg
                              shadow-[#5B3FE4]/25
                              -translate-y-0.5
                            `
                            : `
                              bg-[#09071A]/75
                              border-[#A78BFA]/15
                              hover:border-[#8B6CFF]/45
                              hover:bg-[#0D0B1F]/90
                              hover:-translate-y-0.5
                            `
                        }
                      `}
                    >

                      {/* Selected indicator */}
                      {isSelected && (
                        <span className="absolute left-0 top-4 bottom-4 w-[2px] rounded-full bg-[#8B6CFF]" />
                      )}

                      <div className="flex items-center justify-between mb-3">

                        <span className="text-[10px] font-mono text-[#A78BFA] tracking-wider">
                          {mod.code}
                        </span>

                        <span className="text-[9px] font-mono px-2 py-1 rounded-md bg-[#5B3FE4]/25 text-[#F5F3FF] border border-[#8B6CFF]/25">
                          {mod.status}
                        </span>

                      </div>

                      <span className="text-sm font-bold text-white font-heading block pr-4">
                        {mod.name}
                      </span>

                    </button>
                  );
                })}

              </div>

              {/* ==================================================
                  CENTER LAB INDICATOR
              ================================================== */}

              <div className="flex items-center gap-4 my-7">

                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#A78BFA]/15" />

                <div className="text-center shrink-0">

                  <div className="text-[9px] font-mono tracking-[0.3em] text-[#A78BFA]/45 uppercase">
                    Live Research Environment
                  </div>

                  <div className="mt-1 text-xl sm:text-2xl font-bold font-mono text-white/[0.07] tracking-widest">
                    ESTIVOXX
                  </div>

                </div>

                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#A78BFA]/15" />

              </div>

              {/* ==================================================
                  MODULE TELEMETRY
              ================================================== */}

              <div className="rounded-xl bg-[#09071A]/85 backdrop-blur-xl border border-[#A78BFA]/20 overflow-hidden">

                {/* Telemetry header */}

                <div className="px-5 py-3 border-b border-[#A78BFA]/10 flex items-center justify-between">

                  <div className="flex items-center gap-2">

                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B6CFF] animate-pulse" />

                    <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-[#A78BFA]">
                      Module Telemetry
                    </span>

                  </div>

                  <span className="text-[10px] font-mono text-[#A8A3B8]">
                    {activeModule.code}
                  </span>

                </div>

                {/* Telemetry body */}

                <div className="p-5">

                  <p className="text-xs text-[#A8A3B8] leading-6 max-w-4xl">
                    {activeModule.description}
                  </p>

                  {/* Metrics */}

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 mt-5 border-t border-[#A78BFA]/10">

                    {activeModule.metrics.map(
                      (metric, index) => (
                        <div
                          key={index}
                          className={`
                            pt-4
                            ${
                              index > 0
                                ? 'sm:border-l sm:border-[#A78BFA]/10 sm:pl-5'
                                : ''
                            }
                            ${
                              index >= 2
                                ? 'border-t border-[#A78BFA]/10 sm:border-t-0 mt-3 pt-4 sm:mt-0'
                                : ''
                            }
                          `}
                        >

                          <span className="text-[9px] font-mono text-[#A8A3B8] uppercase tracking-wider block mb-1">

                            {metric.label}

                          </span>

                          <span className="text-lg font-bold font-mono text-white tabular-nums">

                            {metric.value}

                          </span>

                        </div>
                      )
                    )}

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* ======================================================
              BOTTOM STATUS BAR
          ====================================================== */}

          <div className="absolute bottom-0 left-0 right-0 z-30">

            {/* <div className="px-5 sm:px-7 py-3 border-t border-[#A78BFA]/15 bg-[#09071A]/65 backdrop-blur-md"> */}
{/* 
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-[10px] font-mono">

                <span className="text-[#A8A3B8]">
                  <span className="text-[#A78BFA]">
                    MOVE
                  </span>{' '}
                  cursor across simulation to induce
                  particle refraction
                </span>

                <div className="flex items-center gap-4">

                  <span className="text-[#A8A3B8]">
                    INTERACTION:{' '}
                    <span className="text-[#A78BFA]">
                      ACTIVE
                    </span>
                  </span>

                  <span className="text-[#A78BFA]">
                    55 ACTIVE NODES
                  </span>

                </div>

              </div> */}

            {/* </div> */}

          </div>

        </div>

      </div>
    </section>
  );
};