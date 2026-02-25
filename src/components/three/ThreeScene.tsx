import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const Stars: React.FC = () => {
  const ref = useRef<THREE.Points>(null);
  const [sphere] = React.useState(() => 
    new Float32Array(5000).map(() => (Math.random() - 0.5) * 4)
  );

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#3b82f6"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const FloatingElements: React.FC = () => {
  const mesh1 = useRef<THREE.Mesh>(null);
  const mesh2 = useRef<THREE.Mesh>(null);
  const mesh3 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (mesh1.current) {
      mesh1.current.rotation.x = Math.cos(t / 4) / 2;
      mesh1.current.rotation.y = Math.sin(t / 4) / 2;
      mesh1.current.position.y = Math.cos(t / 1.5) / 10;
    }
    if (mesh2.current) {
      mesh2.current.rotation.x = Math.cos(t / 3) / 2;
      mesh2.current.rotation.y = Math.sin(t / 3) / 2;
      mesh2.current.position.y = Math.sin(t / 2) / 10;
    }
    if (mesh3.current) {
      mesh3.current.rotation.x = Math.cos(t / 5) / 2;
      mesh3.current.rotation.y = Math.sin(t / 5) / 2;
      mesh3.current.position.y = Math.cos(t / 3) / 10;
    }
  });

  return (
    <>
      <mesh ref={mesh1} position={[-1.5, 0, -2]} scale={0.5}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#8b5cf6" transparent opacity={0.6} />
      </mesh>
      <mesh ref={mesh2} position={[1.5, 0, -2]} scale={0.7}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#06b6d4" transparent opacity={0.5} />
      </mesh>
      <mesh ref={mesh3} position={[0, -1, -3]} scale={0.6}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#f59e0b" transparent opacity={0.4} />
      </mesh>
    </>
  );
};

const ThreeScene: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 1], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Stars />
        <FloatingElements />
      </Canvas>
    </div>
  );
};

export default ThreeScene;