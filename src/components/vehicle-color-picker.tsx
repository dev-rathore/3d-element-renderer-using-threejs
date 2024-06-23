import { useState } from "react";
import { Color } from "../contexts/vehicles-context.provider";
import { ColorPicker, IColor, useColor } from "react-color-palette";

interface VehicleColorPickerProps {
  colors: Color[];
  name: string;
  setColors: React.Dispatch<React.SetStateAction<Color[]>>;
};

interface SingleColorPickerProps {
  color: Color;
  colors: Color[];
  setColors: React.Dispatch<React.SetStateAction<Color[]>>;
};

const SingleColorPicker: React.FC<SingleColorPickerProps> = ({
  color,
  colors,
  setColors,
}) => {
  const [isVehicleColorPickerOpen, setIsVehicleColorPickerOpen] = useState(false);
  const [currentColor, setCurrentColor] = useColor(color.color);

  const handleVehicleColorPickerOpen = () => {
    setIsVehicleColorPickerOpen(!isVehicleColorPickerOpen);
  };

  const handleColorChange = (value: IColor) => {
    const newColors = colors.map((c) => {
      if (color.materialName === c.materialName) {
        return {
          id: color.id,
          materialName: color.materialName,
          color: value.hex,
        }
      }
      return c; 
    });

    setColors([...newColors])
    setCurrentColor(value);
  }

  return (
    <div
      onClick={handleVehicleColorPickerOpen}
      className="w-14 h-14 relative"
      style={{ backgroundColor: `${currentColor.hex}` }}
    >
      {isVehicleColorPickerOpen && <div className="absolute z-10 top-16 left-1/2">
        <ColorPicker
          color={currentColor}
          onChange={handleColorChange}
        />
      </div>}
    </div>
  )
}

const VehicleColorPicker: React.FC<VehicleColorPickerProps> = ({
  colors,
  name,
  setColors,
}) => {
  return (
    <div className="w-full">
      <h1 className="text-xl font-semibold text-slate-700 mb-2">{name} Colors: </h1>
      <div className="flex flex-wrap gap-4">
        {colors.map((color, i) => (
          <SingleColorPicker
            color={color}
            key={i}
            colors={colors}
            setColors={setColors}
          />
        ))}
      </div>
    </div>
  );
};

export default VehicleColorPicker;
