import { CartItem } from "../types";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCheckout: () => void;
  cartItems: CartItem[];
}

export const CartModal = ({
  isOpen,
  onClose,
  onCheckout,
  cartItems,
}: CartModalProps) => {
  if (!isOpen) return null;

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div
      id="modal"
      className="flex overflow-hidden px-4 fixed right-0 top-0 h-screen w-screen z-50 flex-col justify-center items-center font-bold leading-6 bg-neutral-900 bg-opacity-60"
    >
      <div
        className="flex flex-col p-11 mx-4 max-h-[90vh] overflow-y-auto max-w-full  max-md:mx-auto w-[651px] bg-white rounded-3xl max-md:p-6 max-sm:p-4"
        role="region"
        aria-label="Cart Details"
      >
        <div className="flex gap-2.5 items-center self-start text-2xl leading-none text-slate-700">
          <h1 className="flex flex-col self-stretch my-auto">Your Cart</h1>
        </div>

        <div
          className="flex flex-wrap font-normal items-center pt-1 pr-1 pb-2 mt-4 w-full text-sm border-b border-zinc-200 text-slate-400 max-md:max-w-full"
          role="row"
          aria-label="Cart Header"
        >
          <div
            className="grow shrink self-stretch my-auto w-[266px] max-sm:w-full max-sm:mb-2 max-sm:hidden"
            role="columnheader"
          >
            Item
          </div>
          <div
            className="grow shrink self-stretch my-auto text-center w-[50px] max-sm:w-1/4"
            role="columnheader"
          >
            Color
          </div>
          <div
            className="grow shrink self-stretch my-auto text-center w-[57px] max-sm:w-1/4"
            role="columnheader"
          >
            Size
          </div>
          <div
            className="grow shrink self-stretch my-auto text-center w-[47px] max-sm:w-1/4"
            role="columnheader"
          >
            Qnt
          </div>
          <div
            className="grow shrink self-stretch my-auto text-right w-[79px] max-sm:w-1/4"
            role="columnheader"
          >
            Price
          </div>
        </div>

        <div className="cart-items-container">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-wrap items-center py-4 w-full text-sm border-b border-zinc-200"
              role="row"
            >
              <div className="flex items-center gap-4 grow shrink w-[266px] max-sm:w-full max-sm:mb-2">
                <img
                  src={item.image}
                  alt={`${item.color} watch`}
                  className="w-16 h-16 object-cover rounded"
                />
                <span className="text-sm font-normal text-gray-900">
                  Classy Modern Smart watch
                </span>
              </div>
              <div className="grow shrink text-center font-normal w-[50px] max-sm:w-1/4">
                {item.color}
              </div>
              <div className="grow shrink text-center w-[57px] max-sm:w-1/4">
                {item.size}
              </div>
              <div className="grow shrink text-center w-[47px] max-sm:w-1/4">
                {item.quantity}
              </div>
              <div className="grow shrink text-right w-[79px] max-sm:w-1/4">
                ${item.price.toFixed(2)}
              </div>
            </div>
          ))}
        </div>

        <div
          className="flex flex-wrap gap-5 justify-between items-end mt-4 w-full tracking-normal leading-9 whitespace-nowrap text-slate-700 max-md:max-w-full"
          role="row"
          aria-label="Cart Total"
        >
          <div className="text-base leading-none text-neutral-700 w-[379px] max-sm:w-full">
            Total
          </div>
          <div className="text-sm">{totalQuantity}</div>
          <div className="text-lg">${totalPrice.toFixed(2)}</div>
        </div>

        <div className="flex justify-end pt-2.5 mt-4 w-full text-sm tracking-wide leading-loose max-md:max-w-full">
          <div className="flex gap-6 max-md:gap-2 items-center flex-wrap max-sm:w-full max-sm:justify-center">
            <button
              onClick={onClose}
              className="overflow-hidden gap-2.5 px-5 py-2 rounded border border-solid border-zinc-200 text-slate-700 max-sm:w-full max-sm:mb-2"
              aria-label="Continue Shopping"
            >
              Continue Shopping
            </button>
            <button
              onClick={onCheckout}
              className="overflow-hidden gap-2.5 px-5 py-2 text-white whitespace-nowrap bg-indigo-500 rounded max-sm:w-full"
              aria-label="Proceed to Checkout"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
