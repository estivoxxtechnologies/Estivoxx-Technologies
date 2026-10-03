import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface DigitalCore3DProps {
  className?: string;
  isFullBleed?: boolean;
}

export const DigitalCore3D: React.FC<DigitalCore3DProps> = ({
  className = '',
  isFullBleed = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [webglSupported, setWebglSupported] = useState<boolean>(true);

  useEffect(() => {
    // Check WebGL availability
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
      setWebglSupported(false);
      return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobileDevice = window.innerWidth < 768;

    const container = containerRef.current;
    const targetCanvas = canvasRef.current;
    if (!container || !targetCanvas) return;

    let animationFrameId: number;
    let renderer: THREE.WebGLRenderer | null = null;

    try {
      renderer = new THREE.WebGLRenderer({
        canvas: targetCanvas,
        alpha: true,
        antialias: !isMobileDevice,
        powerPreference: 'high-performance',
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(container.clientWidth, container.clientHeight);
    } catch {
      setWebglSupported(false);
      return;
    }

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    // Camera positioned for expansive full-bleed immersion
    camera.position.z = isFullBleed ? (isMobileDevice ? 9.5 : 7.8) : 7;
    camera.position.y = isFullBleed ? 0.2 : 0;

    // Ambient and point lights in Estuscia purple palette
    const ambientLight = new THREE.AmbientLight(0x5b3fe4, 1.4);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x8b6cff, 3, 30);
    pointLight1.position.set(5, 6, 6);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x6c4aff, 2.5, 30);
    pointLight2.position.set(-6, -5, 4);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0xa78bfa, 2, 20);
    pointLight3.position.set(0, 0, 8);
    scene.add(pointLight3);

    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // 1. Inner Glowing Icosahedron Core
    const coreGeo = new THREE.IcosahedronGeometry(isFullBleed ? 1.55 : 1.4, 1);
    const coreMat = new THREE.MeshPhongMaterial({
      color: 0x5b3fe4,
      emissive: 0x6c4aff,
      emissiveIntensity: 0.7,
      wireframe: true,
      transparent: true,
      opacity: 0.85,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreGroup.add(coreMesh);

    // 2. Inner Solid Geometric Crystal
    const innerCrystalGeo = new THREE.OctahedronGeometry(isFullBleed ? 0.8 : 0.7, 0);
    const innerCrystalMat = new THREE.MeshStandardMaterial({
      color: 0x8b6cff,
      metalness: 0.85,
      roughness: 0.15,
      wireframe: false,
      transparent: true,
      opacity: 0.8,
    });
    const innerCrystal = new THREE.Mesh(innerCrystalGeo, innerCrystalMat);
    coreGroup.add(innerCrystal);

    // 3. Concentric Orbital Rings (Gimbal System)
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x8b6cff,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const ringGeo1 = new THREE.TorusGeometry(isFullBleed ? 2.5 : 2.3, 0.015, 8, 80);
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    coreGroup.add(ring1);

    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xa78bfa,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });
    const ringGeo2 = new THREE.TorusGeometry(isFullBleed ? 3.0 : 2.7, 0.012, 8, 80);
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 6;
    coreGroup.add(ring2);

    const ringMat3 = new THREE.MeshBasicMaterial({
      color: 0x6c4aff,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const ringGeo3 = new THREE.TorusGeometry(isFullBleed ? 3.6 : 3.1, 0.01, 8, 80);
    const ring3 = new THREE.Mesh(ringGeo3, ringMat3);
    ring3.rotation.z = Math.PI / 5;
    coreGroup.add(ring3);

    // Outer horizon ring
    const ringMat4 = new THREE.MeshBasicMaterial({
      color: 0x5b3fe4,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const ringGeo4 = new THREE.TorusGeometry(isFullBleed ? 4.4 : 3.8, 0.008, 6, 96);
    const ring4 = new THREE.Mesh(ringGeo4, ringMat4);
    ring4.rotation.x = Math.PI / 2.2;
    coreGroup.add(ring4);

    // 4. Orbiting Data Nodes
    const nodeCount = 8;
    const nodes: THREE.Mesh[] = [];
    const nodeGeo = new THREE.SphereGeometry(0.12, 12, 12);
    const nodeMat = new THREE.MeshBasicMaterial({ color: 0xf5f3ff });

    for (let i = 0; i < nodeCount; i++) {
      const node = new THREE.Mesh(nodeGeo, nodeMat);
      coreGroup.add(node);
      nodes.push(node);
    }

    // 5. Expansive Particle Constellation spanning across the hero canvas
    const particleCount = isMobileDevice ? 160 : (isFullBleed ? 450 : 280);
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      const radius = isFullBleed 
        ? 2.2 + Math.random() * 5.5 
        : 2.2 + Math.random() * 2.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      particlePositions[i] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i + 2] = radius * Math.cos(phi);
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0x8b6cff,
      size: isFullBleed ? 0.05 : 0.045,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });
    const particlePoints = new THREE.Points(particleGeo, particleMat);
    coreGroup.add(particlePoints);

    // Mouse Tracking across entire window/section for Interactive 3D Rotation
    let targetRotationX = 0;
    let targetRotationY = 0;
    let currentRotationX = 0;
    let currentRotationY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      // Normalize mouse coordinates across window (-1 to 1)
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;

      targetRotationY = x * 0.65;
      targetRotationX = -y * 0.5;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Observer
    const resizeObserver = new ResizeObserver(() => {
      if (!container || !renderer) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    });
    resizeObserver.observe(container);

    // Context Lost / Restored safety
    const handleContextLost = (e: Event) => {
      e.preventDefault();
      cancelAnimationFrame(animationFrameId);
    };

    targetCanvas.addEventListener('webglcontextlost', handleContextLost, false);

    // Animation Loop
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();
      const speedFactor = prefersReducedMotion ? 0.08 : 1;

      // Base auto-rotation
      coreMesh.rotation.y = elapsedTime * 0.22 * speedFactor;
      coreMesh.rotation.x = elapsedTime * 0.12 * speedFactor;

      innerCrystal.rotation.y = -elapsedTime * 0.35 * speedFactor;
      innerCrystal.rotation.z = elapsedTime * 0.18 * speedFactor;

      ring1.rotation.z = elapsedTime * 0.25 * speedFactor;
      ring2.rotation.x = elapsedTime * 0.2 * speedFactor;
      ring3.rotation.y = -elapsedTime * 0.18 * speedFactor;
      ring4.rotation.z = -elapsedTime * 0.12 * speedFactor;

      particlePoints.rotation.y = elapsedTime * 0.06 * speedFactor;

      // Position orbiting nodes
      nodes.forEach((node, index) => {
        const offset = (index * (Math.PI * 2)) / nodeCount;
        const angle = elapsedTime * 0.4 * speedFactor + offset;
        const radius = index % 2 === 0 ? (isFullBleed ? 2.5 : 2.3) : (isFullBleed ? 3.2 : 2.7);
        const tilt = index % 3 === 0 ? Math.PI / 4 : -Math.PI / 5;

        node.position.x = Math.cos(angle) * radius;
        node.position.y = Math.sin(angle) * Math.cos(tilt) * radius;
        node.position.z = Math.sin(angle) * Math.sin(tilt) * radius;
      });

      // Smooth mouse rotation lerping
      currentRotationX += (targetRotationX - currentRotationX) * 0.06;
      currentRotationY += (targetRotationY - currentRotationY) * 0.06;

      coreGroup.rotation.x = currentRotationX;
      coreGroup.rotation.y = currentRotationY;

      if (renderer) {
        renderer.render(scene, camera);
      }
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      targetCanvas.removeEventListener('webglcontextlost', handleContextLost);

      coreGeo.dispose();
      coreMat.dispose();
      innerCrystalGeo.dispose();
      innerCrystalMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      ringGeo3.dispose();
      ringMat3.dispose();
      ringGeo4.dispose();
      ringMat4.dispose();
      nodeGeo.dispose();
      nodeMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();

      if (renderer) {
        renderer.dispose();
      }
    };
  }, [isFullBleed]);

  if (!webglSupported) {
    return (
      <div className={`relative flex items-center justify-center ${className}`}>
        <div className="relative w-80 h-80 rounded-full border border-[#8B6CFF]/30 flex items-center justify-center p-8 bg-[#0D0B1F]/60 backdrop-blur-md">
          <div className="absolute inset-0 rounded-full border border-dashed border-[#5B3FE4]/40 animate-spin" style={{ animationDuration: '30s' }} />
          <div className="w-48 h-48 rounded-full border border-[#A78BFA]/30 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#5B3FE4] to-[#8B6CFF] opacity-75 blur-sm animate-pulse" />
          </div>
          <div className="absolute text-center">
            <span className="text-xs font-mono tracking-wider text-[#A78BFA] uppercase">Digital Core</span>
            <p className="text-xs text-[#A8A3B8] mt-1">Interconnected Engine</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className={`relative select-none ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full block cursor-grab active:cursor-grabbing"
        aria-label="Interactive 3D Technology Core visualization representing Estivoxx software architecture"
      />
    </div>
  );
};
