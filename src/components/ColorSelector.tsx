import { ColorType } from "../types";
import { COLORS } from "../constants";

interface ColorSelectorProps {
  selectedColor: ColorType;
  onChange: (color: ColorType) => void;
}

export const ColorSelector = ({
  selectedColor,
  onChange,
}: ColorSelectorProps) => {
  return (
    <fieldset className="mt-5">
      <legend className="text-lg font-bold text-slate-700">Band Color</legend>
      <div className="flex flex-wrap gap-4 mt-3">
        {COLORS.map((color) => (
          <div
            key={color.id}
            className="flex flex-col self-stretch my-auto w-6"
          >
            <input
              type="radio"
              id={color.id}
              name="bandColor"
              className="sr-only"
              checked={selectedColor === color.id}
              onChange={() => onChange(color.id)}
            />
            <label
              htmlFor={color.id}
              className={`flex flex-col justify-center px-0.5 py-0.5 rounded-full cursor-pointer ${
                selectedColor === color.id ? `border-2 border-solid` : ""
              }`}
              style={
                selectedColor === color.id
                  ? { borderColor: color.borderColor }
                  : undefined
              }
            >
              <div
                className={`flex shrink-0 w-4 h-4 ${color.bgClass} rounded-full`}
              />
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  );
};
