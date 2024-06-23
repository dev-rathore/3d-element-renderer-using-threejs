import { ObjectMap, extend, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { useGLTF } from "@react-three/drei";
import * as THREE from 'three';
import { useEffect } from "react";
import { Color, useVehiclesContext } from "../contexts/vehicles-context.provider";

extend({ OrbitControls });

const Vehicles: React.FC = () => {
  const { camera, gl } = useThree();
  const {
    setTruckFlatColors,
    setDeliveryTruckColors,
    setTracterPoliceColors,
    truckFlatColors,
    tracterPoliceColors,
    deliveryTruckColors,
  } = useVehiclesContext();

  const truckFlat = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/truck-flat/model.gltf');
  const tracterPolice = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/tractor-police/model.gltf');
  const deliveryTruck = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/delivery-truck/model.gltf');

  const setVehicleColors = (
    vehicle: ObjectMap,
    setColorsFunction: React.Dispatch<React.SetStateAction<Color[]>>,
  ) => {
    if (vehicle) {
      const colors = Object.values(vehicle.materials).map((material, i) => {
        return {
          id: i,
          materialName: material.name,
          color: `#${(material as THREE.MeshStandardMaterial).color.getHexString()}`,
        }
      });

      setColorsFunction(colors);
    }
  }

  const changeVehicleColors = (
    vehicle: ObjectMap,
    vehicleColors: Color[],
  ) => {
    if (vehicle) {
      vehicleColors.map((color) => {
        vehicle.materials[color.materialName].color = new THREE.Color(color.color);
      })
    }
  }

  useEffect(() => {
    setVehicleColors(truckFlat, setTruckFlatColors);
    setVehicleColors(deliveryTruck, setDeliveryTruckColors);
    setVehicleColors(tracterPolice, setTracterPoliceColors);
  }, [truckFlat, deliveryTruck, tracterPolice]);

  useFrame(() => {
    changeVehicleColors(truckFlat, truckFlatColors);
    changeVehicleColors(deliveryTruck, deliveryTruckColors);
    changeVehicleColors(tracterPolice, tracterPoliceColors);
  });

  return (
    <>
      <orbitControls args={[camera, gl.domElement]} />
      <directionalLight position={[1, 2, 3]} intensity={2} />
      <ambientLight intensity={1.5} />
      <group position-x={ -1 }>
        <mesh position-x={ -2 } position-y={-1}>
          <primitive object={truckFlat.scene} />
        </mesh>
        <mesh position-x={ 2 } position-y={-1}>
          <primitive object={tracterPolice.scene} />
        </mesh>
        <mesh position-y={-1}>
          <primitive object={deliveryTruck.scene} />
        </mesh>
        <mesh position-y={ -1 } rotation-x={[ - Math.PI * 0.5 ]} scale={10}>
          <planeGeometry />
          <meshStandardMaterial
            color="lightgreen"
          />
        </mesh>
      </group>
    </>
  );
}

export default Vehicles;
