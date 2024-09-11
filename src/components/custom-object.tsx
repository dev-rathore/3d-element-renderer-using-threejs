import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

const CustomObject: React.FC = () => {
  const geometryRef = useRef<THREE.BufferGeometry>(null);
  const verticesCount = 10 * 3;
  const positions = useMemo(() => {
    const positions = new Float32Array(verticesCount * 3);
    for (let i = 0; i < verticesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 3;
    }
    return positions;
  }, []);

  useEffect(() => {
    if (geometryRef.current) {
      geometryRef.current.computeVertexNormals();
    }
  }, [ positions ]);

  return (
    <mesh>
      <bufferGeometry ref={geometryRef}>
        <bufferAttribute
          attach={"attributes-position"}
          array={positions}
          itemSize={3}
          count={verticesCount}
        />
      </bufferGeometry>
      <meshStandardMaterial
        color="orange"
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

export default CustomObject;
