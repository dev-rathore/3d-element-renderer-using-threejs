import { extend, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Group, Mesh, Object3DEventMap } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

extend({ OrbitControls });

const ThreejsBasicsPage: React.FC = () => {
  const cubeRef = useRef<Mesh>(null);
  const groupRef = useRef<Group<Object3DEventMap>>(null);
  const { camera, gl } = useThree();

  useFrame((state, delta) => {
    if (cubeRef.current && groupRef.current) {
      cubeRef.current.rotation.y += delta;
      groupRef.current.rotation.y += delta;
    }
  });

  return (
    <>
    <orbitControls args={[camera, gl.domElement]} />
    <directionalLight position={[1, 2, 3]} intensity={2} />
    <ambientLight intensity={1.5} />
    <group ref={groupRef}>
      <mesh position-x={ -2 }>
        <sphereGeometry />
        <meshStandardMaterial
          color="pink"
        />
      </mesh>
      <mesh ref={cubeRef} rotation-y={ Math.PI * 0.25 } position-x={ 2 } scale={ 1.5 }>
        <boxGeometry />
        <meshStandardMaterial
          color="lightblue"
        />
      </mesh>
    </group>
      <mesh position-y={ -1 } rotation-x={[ - Math.PI * 0.5 ]} scale={10}>
        <planeGeometry />
        <meshStandardMaterial
          color="lightgreen"
        />
      </mesh>
    </>
  );
}

export default ThreejsBasicsPage;
