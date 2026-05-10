import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

export default function Scene3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const mouseRef = useRef({ x: 0, y: 0 });
  const targetRotation = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0a);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 18);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const purpleLight = new THREE.PointLight(0x8b5cf6, 0.8, 30);
    purpleLight.position.set(-5, 3, 5);
    scene.add(purpleLight);

    const blueLight = new THREE.PointLight(0x3b82f6, 0.5, 30);
    blueLight.position.set(5, -3, 5);
    scene.add(blueLight);

    // Group for text
    const textGroup = new THREE.Group();
    scene.add(textGroup);

    // Material for text
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x1a1a1a,
      metalness: 0.8,
      roughness: 0.2,
      clearcoat: 0.5,
      clearcoatRoughness: 0.1,
    });

    // Purple glow material for front face
    const glowMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x8b5cf6,
      metalness: 0.6,
      roughness: 0.3,
      emissive: 0x8b5cf6,
      emissiveIntensity: 0.1,
    });

    // Load font and create text
    const loader = new FontLoader();
    loader.load(
      'https://threejs.org/examples/fonts/helvetiker_bold.typeface.json',
      (font) => {
        const textGeometry = new TextGeometry('MALIK', {
          font: font,
          size: 3.5,
          depth: 1.2,
          curveSegments: 12,
          bevelEnabled: true,
          bevelThickness: 0.1,
          bevelSize: 0.05,
          bevelOffset: 0,
          bevelSegments: 5,
        });

        textGeometry.computeBoundingBox();
        const centerOffset =
          -(textGeometry.boundingBox!.max.x - textGeometry.boundingBox!.min.x) / 2;
        textGeometry.translate(centerOffset, 0, 0);

        const textMesh = new THREE.Mesh(textGeometry, [material, glowMaterial]);
        textGroup.add(textMesh);
        setIsLoaded(true);
      },
      undefined,
      (error) => {
        console.error('Error loading font:', error);
        // Fallback: create a simple box as placeholder
        const boxGeometry = new THREE.BoxGeometry(8, 2, 1);
        const boxMesh = new THREE.Mesh(boxGeometry, material);
        textGroup.add(boxMesh);
        setIsLoaded(true);
      }
    );

    // Mouse movement handler
    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseRef.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };

    container.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    let animationId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Idle rotation
      textGroup.rotation.y += 0.002;

      // Mouse parallax
      targetRotation.current.x = mouseRef.current.y * 0.3;
      targetRotation.current.y = mouseRef.current.x * 0.5;

      textGroup.rotation.x +=
        (targetRotation.current.x - textGroup.rotation.x) * 0.05;
      textGroup.rotation.y +=
        (targetRotation.current.y - textGroup.rotation.y) * 0.05;

      // Subtle floating animation
      textGroup.position.y = Math.sin(elapsedTime * 0.5) * 0.2;

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0"
      style={{
        opacity: isLoaded ? 1 : 0,
        transition: 'opacity 1s ease-in-out',
      }}
    />
  );
}
