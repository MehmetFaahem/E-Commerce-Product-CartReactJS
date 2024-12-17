interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
}

export const QuantitySelector = ({
  quantity,
  onQuantityChange,
}: QuantitySelectorProps) => {
  return (
    <div className="flex items-center border rounded">
      <button
        type="button"
        onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
        aria-label="Decrease quantity"
        className="px-3 py-2 border-r"
      >
        -
      </button>
      <input
        type="number"
        value={quantity}
        onChange={(e) =>
          onQuantityChange(Math.max(1, parseInt(e.target.value)))
        }
        min="1"
        aria-label="Product quantity"
        className="w-16 text-center border-t border-b focus:outline-none border-none pl-2"
      />
      <button
        type="button"
        onClick={() => onQuantityChange(quantity + 1)}
        aria-label="Increase quantity"
        className="px-3 py-2 border-l"
      >
        +
      </button>
    </div>
  );
};
