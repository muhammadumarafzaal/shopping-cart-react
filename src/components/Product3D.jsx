import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Sphere, Torus, Cone, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

/**
 * 3D Product Component - Renders different geometric shapes based on product type
 */
export const Product3D = ({ product, isHovered }) => {
  const meshRef = useRef();
  const baseRotation = useRef(Math.random() * Math.PI * 2);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Idle rotation
      meshRef.current.rotation.y += delta * 0.3;
      
      // Hover effect - float animation
      if (isHovered) {
        meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1 + 0.1;
      } else {
        meshRef.current.position.y = THREE.MathUtils.lerp(
          meshRef.current.position.y,
          0,
          delta * 5
        );
      }
    }
  });

  // Color based on product category
  const getColor = () => {
    switch (product.category) {
      case 'luxury': return '#c9a961';
      case 'tech': return '#6b8cce';
      case 'fashion': return '#ce6b9a';
      case 'home': return '#7fce6b';
      default: return '#888888';
    }
  };

  // Shape based on product type
  const renderShape = () => {
    const color = getColor();
    const metalness = 0.7;
    const roughness = 0.2;

    switch (product.shape || 'box') {
      case 'sphere':
        return (
          <Sphere args={[1, 32, 32]}>
            <meshStandardMaterial
              color={color}
              metalness={metalness}
              roughness={roughness}
              envMapIntensity={1}
            />
          </Sphere>
        );
      
      case 'torus':
        return (
          <Torus args={[0.8, 0.4, 16, 32]}>
            <meshStandardMaterial
              color={color}
              metalness={metalness}
              roughness={roughness}
              envMapIntensity={1}
            />
          </Torus>
        );
      
      case 'cone':
        return (
          <Cone args={[0.8, 1.6, 32]}>
            <meshStandardMaterial
              color={color}
              metalness={metalness}
              roughness={roughness}
              envMapIntensity={1}
            />
          </Cone>
        );
      
      case 'rounded':
        return (
          <RoundedBox args={[1.2, 1.2, 1.2]} radius={0.1} smoothness={4}>
            <meshStandardMaterial
              color={color}
              metalness={metalness}
              roughness={roughness}
              envMapIntensity={1}
            />
          </RoundedBox>
        );
      
      default: // box
        return (
          <Box args={[1.2, 1.2, 1.2]}>
            <meshStandardMaterial
              color={color}
              metalness={metalness}
              roughness={roughness}
              envMapIntensity={1}
            />
          </Box>
        );
    }
  };

  return (
    <group ref={meshRef} rotation={[0, baseRotation.current, 0]}>
      {renderShape()}
      
      {/* Wireframe overlay for premium look */}
      <Box args={[1.25, 1.25, 1.25]}>
        <meshBasicMaterial
          color="#ffffff"
          wireframe
          transparent
          opacity={isHovered ? 0.15 : 0.05}
        />
      </Box>
    </group>
  );
};
