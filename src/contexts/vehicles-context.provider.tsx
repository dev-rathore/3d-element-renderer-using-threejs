import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';

export type Color = {
  id: number;
  materialName: string;
  color: string;
}

type VehiclesContextType = {
  truckFlatColors: Color[];
  setTruckFlatColors: React.Dispatch<React.SetStateAction<Color[]>>;
  tracterPoliceColors: Color[];
  setTracterPoliceColors: React.Dispatch<React.SetStateAction<Color[]>>;
  deliveryTruckColors: Color[];
  setDeliveryTruckColors: React.Dispatch<React.SetStateAction<Color[]>>;
};

const VehiclesContext = createContext<VehiclesContextType>(null!);

export const useVehiclesContext = (): VehiclesContextType => useContext(VehiclesContext);

export const VehiclesProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [truckFlatColors, setTruckFlatColors] = useState<Color[]>([]);
  const [deliveryTruckColors, setDeliveryTruckColors] = useState<Color[]>([]);
  const [tracterPoliceColors, setTracterPoliceColors] = useState<Color[]>([]);

  return (
    <VehiclesContext.Provider
      value={{
        truckFlatColors,
        setTruckFlatColors,
        deliveryTruckColors,
        setDeliveryTruckColors,
        tracterPoliceColors,
        setTracterPoliceColors,
      }}
    >
      {children}
    </VehiclesContext.Provider>
  );
};
