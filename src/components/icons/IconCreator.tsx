import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { IoCalendarNumberOutline } from "react-icons/io5";

export function createNextButton(size: number, color: string) {
  return <BsArrowRight size={size} color={color} />;
}

export function createPrevButton(size: number, color: string) {
  return <BsArrowLeft size={size} color={color} />;
}

export function createBackButton(size: number, color?: string) {
  return <MdArrowBackIosNew size={size} color={color} style={commonStyle} />;
}

export function createForwardButton(size: number, color?: string) {
  return <MdArrowForwardIos size={size} color={color} style={commonStyle} />;
}

export function createCalendarIcon(size: number, color?: string) {
  return (
    <IoCalendarNumberOutline size={size} color={color} style={commonStyle} />
  );
}

export function createTimeIcon(size: number, color?: string) {
  return <IoMdTime size={size} color={color} style={commonStyle} />;
}

const commonStyle = { display: "inline-block", verticalAlign: "middle" };
