import { ColorInfo, SizeInfo } from "../types";
import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";
import image4 from "../assets/4.png";

export const COLOR_MAP: Record<string, string> = {
  violet: image1,
  teal: image2,
  blue: image3,
  black: image4,
};

export const COLORS: ColorInfo[] = [
  { id: "violet", bgClass: "bg-violet-500", borderColor: "#8b5cf6" },
  { id: "teal", bgClass: "bg-teal-400", borderColor: "#2dd4bf" },
  { id: "blue", bgClass: "bg-blue-500", borderColor: "#3b82f6" },
  { id: "black", bgClass: "bg-zinc-700", borderColor: "#3f3f46" },
];

export const SIZES: SizeInfo[] = [
  { id: "S", price: 69 },
  { id: "M", price: 79 },
  { id: "L", price: 89 },
  { id: "XL", price: 99 },
];
