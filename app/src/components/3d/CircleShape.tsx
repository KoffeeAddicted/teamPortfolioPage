import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import img from '../../assets/images/backgrounds/gradient.png';

const Box = (props: any) => {
  const mesh = useRef();
  useFrame((state, delta) => (mesh.current.rotation.y += delta));
  const texture = useLoader(THREE.TextureLoader, img);
  return (
    <mesh receiveShadow {...props} ref={mesh}>
      <sphereGeometry attach='geometry' args={[1.75, 48, 48]} />
      <meshBasicMaterial attach='material' toneMapped={false} map={texture} />
    </mesh>
  );
};

const CircleShape = () => {
  return (
    <div className='w-full h-full'>
      <Canvas shadows flat>
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[10, 10, 10]} />
        <Box />
      </Canvas>
    </div>
  );
};

export default CircleShape;
