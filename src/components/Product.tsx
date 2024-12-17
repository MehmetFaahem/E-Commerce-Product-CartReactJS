import { useState } from "react";
import { CartItem, ColorType, SizeType } from "../types";
import { COLOR_MAP, SIZES } from "../constants";
import { ColorSelector } from "./ColorSelector";
import { SizeSelector } from "./SizeSelector";
import { QuantitySelector } from "./QuantitySelector";
import { CartModal } from "./CartModal";

export const Product = () => {
  const [selectedColor, setSelectedColor] = useState<ColorType>("violet");
  const [selectedSize, setSelectedSize] = useState<SizeType>("S");
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleColorChange = (color: ColorType) => {
    setSelectedColor(color);
  };

  const handleSizeChange = (size: SizeType) => {
    setSelectedSize(size);
  };

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  const handleAddToCart = (e: React.FormEvent) => {
    e.preventDefault();
    const price = SIZES.find((s) => s.id === selectedSize)!.price * quantity;
    const newItem: CartItem = {
      color: selectedColor,
      size: selectedSize,
      quantity,
      price,
      image: COLOR_MAP[selectedColor],
    };
    setCartItems((prev) => [...prev, newItem]);
    setQuantity(1);
  };

  const handleCheckout = () => {
    console.log("Proceeding to checkout with items:", cartItems);
    setIsModalOpen(false);
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="relative min-h-screen bg-white px-4 sm:px-6 lg:px-8 max-md:pb-20">
      <div className="mx-auto max-w-7xl py-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Product Image */}
          <div className="w-full lg:w-1/2">
            <div className="aspect-square relative overflow-hidden rounded-md bg-gray-100">
              <img
                src={COLOR_MAP[selectedColor]}
                alt="Classy Modern Smart Watch Product Image"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-700">
              Classy Modern Smart watch
            </h1>

            {/* Rating Stars */}
            <div className="flex flex-wrap gap-2 items-center">
              <div className="flex gap-1.5 items-start">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#ffd200"
                    viewBox="0 0 256 256"
                  >
                    <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-slate-400">(2 Reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-2 mt-4">
              <span className="text-xl text-slate-400 line-through">
                $99.00
              </span>
              <span className="text-2xl font-bold text-indigo-500">$79.00</span>
            </div>

            {/* Description */}
            <p className="mt-4 text-lg text-slate-400">
              I must explain to you how all this mistaken idea of denouncing
              pleasure praising pain was born and I will give you a complete
              account of the system, and expound the actual teaching.
            </p>

            {/* Product Details */}
            <div className="flex flex-col md:flex-row gap-6 mt-5">
              <div className="flex flex-col">
                <span className="text-sm text-slate-400">Type</span>
                <span className="text-base font-bold text-slate-700">
                  Watch
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-slate-400">Model Number</span>
                <span className="text-base font-bold text-slate-700">
                  Forerunner 290XT
                </span>
              </div>
            </div>

            {/* Add to Cart Form */}
            <form onSubmit={handleAddToCart} className="space-y-6">
              <ColorSelector
                selectedColor={selectedColor}
                onChange={handleColorChange}
              />
              <SizeSelector
                selectedSize={selectedSize}
                onChange={handleSizeChange}
              />
              <div className="flex flex-col sm:flex-row gap-4">
                <QuantitySelector
                  quantity={quantity}
                  onQuantityChange={handleQuantityChange}
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 bg-indigo-500 text-white font-semibold rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add to Cart
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Floating Checkout Button */}
      {cartItems.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 shadow-3xl flex justify-center p-4 bg-transparent">
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-auto flex items-center justify-center gap-2 px-6 py-3 bg-orange-400 text-black rounded-3xl font-bold"
          >
            <span>Checkout</span>
            <span className="bg-white text-black px-2 py-1 rounded-lg text-sm">
              {totalItems}
            </span>
          </button>
        </div>
      )}

      <CartModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCheckout={handleCheckout}
        cartItems={cartItems}
      />
    </div>
  );
};
