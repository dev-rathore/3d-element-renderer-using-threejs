import { extend, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Group, Mesh, Object3DEventMap } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// import { CustomObject } from "../components";
// import { Tank } from "./tank";
import { useGLTF } from "@react-three/drei";

extend({ OrbitControls });

const ThreejsBasics: React.FC = () => {
  const cubeRef = useRef<Mesh>(null);
  const groupRef = useRef<Group<Object3DEventMap>>(null);
  const { camera, gl } = useThree();
  const monsterTruck = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/zombie-car/model.gltf');

  //@ts-ignore
  useFrame((state, delta) => {
    if (cubeRef.current && groupRef.current) {
      // const angle = state.clock.getElapsedTime();
      // state.camera.position.x = Math.sin(angle) * 8;
      // state.camera.position.z = Math.cos(angle) * 8;
      // state.camera.lookAt(0, 0, 0);
      cubeRef.current.rotation.y += delta;
      // groupRef.current.rotation.y += delta;
    }
  });

  return (
    <>
    {/* @ts-ignore */}
    <orbitControls args={[camera, gl.domElement]} />
    <directionalLight position={[1, 2, 3]} intensity={2} />
    <ambientLight intensity={1.5} />
    {/* <Tank /> */}
    <mesh>
      <primitive object={monsterTruck.scene} />
    </mesh>
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
      {/* <CustomObject /> */}
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

export default ThreejsBasics;
