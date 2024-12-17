export type ColorType = "violet" | "teal" | "blue" | "black";
export type SizeType = "S" | "M" | "L" | "XL";

export interface CartItem {
  color: ColorType;
  size: SizeType;
  quantity: number;
  price: number;
  image: string;
}

export interface ColorInfo {
  id: ColorType;
  bgClass: string;
  borderColor: string;
}

export interface SizeInfo {
  id: SizeType;
  price: number;
}
