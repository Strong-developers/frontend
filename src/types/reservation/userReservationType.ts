import { ReactNode } from "react";

export interface ReservationComponents {
  [key: number]: ReactNode;
}

export interface UserReservationButtonsProps {
  start: number;
  end: number;
  currentPosition: number;
  onNextButtonClickEvent: () => void;
  onPrevButtonClickEvent: () => void;
}
