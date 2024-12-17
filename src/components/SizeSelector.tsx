import { SizeType } from "../types";
import { SIZES } from "../constants";

interface SizeSelectorProps {
  selectedSize: SizeType;
  onChange: (size: SizeType) => void;
}

export const SizeSelector = ({ selectedSize, onChange }: SizeSelectorProps) => {
  return (
    <fieldset className="mt-5">
      <legend className="text-lg font-bold text-slate-700">Wrist Size</legend>
      <div className="flex flex-wrap gap-3 mt-3">
        {SIZES.map((size) => (
          <div key={size.id}>
            <input
              type="radio"
              id={`size-${size.id.toLowerCase()}`}
              name="wristSize"
              className="sr-only"
              checked={selectedSize === size.id}
              onChange={() => onChange(size.id)}
            />
            <label
              htmlFor={`size-${size.id.toLowerCase()}`}
              className={`overflow-hidden gap-2.5 self-stretch px-5 py-2 my-auto rounded border border-solid cursor-pointer ${
                selectedSize === size.id
                  ? "border-indigo-500 "
                  : "border-zinc-200 text-slate-400"
              }`}
            >
              <span
                className={`text-sm font-medium ${
                  selectedSize === size.id ? " text-indigo-500" : "text-black"
                }`}
              >
                {size.id}
              </span>{" "}
              <span className="text-xs text-slate-400">${size.price}</span>
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  );
};
