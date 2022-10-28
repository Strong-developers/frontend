import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

export function createNextButton(size: number, color: string) {
  return <BsArrowRight size={size} color={color} />;
}

export function createPrevButton(size: number, color: string) {
  return <BsArrowLeft size={size} color={color} />;
}
