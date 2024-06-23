import { Canvas } from "@react-three/fiber";
import { VehicleColorPicker, Vehicles } from "../components";
import * as THREE from "three";
import { useVehiclesContext } from "../contexts/vehicles-context.provider";

const VehiclesPage: React.FC = () => {
  const {
    truckFlatColors,
    tracterPoliceColors,
    deliveryTruckColors,
    setDeliveryTruckColors,
    setTracterPoliceColors,
    setTruckFlatColors,
  } = useVehiclesContext();

  return (
    <div className="canvas-block">
      <Canvas
        dpr={1}
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          outputColorSpace: THREE.SRGBColorSpace,
        }}
        camera={{
          fov: 45,
          near: 0.5,
          far: 200,
          position: [1, 4, 8],
        }}
      >
        <Vehicles />
      </Canvas>
      <div className="w-[420px] bg-slate-50/95 backdrop-blur supports-[backdrop-filter]:bg-slate-50/60 absolute top-0 right-0 bottom-0 p-8 flex flex-col gap-8">
        <VehicleColorPicker
          name="Truck Flat"
          colors={truckFlatColors}
          setColors={setTruckFlatColors}
        />
        <VehicleColorPicker
          name="Tracter Police"
          colors={tracterPoliceColors}
          setColors={setTracterPoliceColors}
        />
        <VehicleColorPicker
          name="Delivery Truck"
          colors={deliveryTruckColors}
          setColors={setDeliveryTruckColors}
        />
      </div>
    </div>
  );
};

export default VehiclesPage;
