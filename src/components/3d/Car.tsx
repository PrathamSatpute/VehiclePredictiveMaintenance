import React from 'react';
import { useGLTF } from '@react-three/drei';

export function Car() {
  // Load the GLTF model from the local path in the public folder
  const { scene } = useGLTF('/models/scene.gltf');

  return (
    <primitive
      object={scene}
      scale={1.5}
      position={[0, -1, 0]}
      rotation={[0, Math.PI / 4, 0]}
    />
  );
}
