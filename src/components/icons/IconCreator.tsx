import { BsArrowRight, BsArrowLeft, BsSuitHeartFill } from "react-icons/bs";
import {
  MdArrowBackIosNew,
  MdArrowForwardIos,
  MdChatBubble,
} from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { IoCalendarNumberOutline, IoNotifications } from "react-icons/io5";
import { AiOutlineSend } from "react-icons/ai";

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

export function createHeartIcon(size: number, color?: string) {
  return <BsSuitHeartFill size={size} color={color} style={commonStyle} />;
}

export function createChatBubble(size: number, color?: string) {
  return <MdChatBubble size={size} color={color} style={commonStyle} />;
}

export function createNotification(size: number, color?: string) {
  return <IoNotifications size={size} color={color} style={commonStyle} />;
}

export function createSendIcon(size: number, color?: string) {
  return <AiOutlineSend size={size} color={color} style={commonStyle} />;
}

const commonStyle = { display: "inline-block", verticalAlign: "middle" };
