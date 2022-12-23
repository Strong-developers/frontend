import { FormEvent, Dispatch, SetStateAction } from "react";

export interface AuthForm {
  email: string;
  nickname?: string;
  password: string;
  confirmPassword?: string;
  role?: number;
  name?: string;
  region?: string;
  phoneNumber?: string;
  description?: string;
  caution?: string;
}

export interface AuthFormProps {
  onRegisterSubmitEvent?: (e: FormEvent) => void;
  onLoginSubmitEvent?: (e: FormEvent) => void;
}

export interface AuthRegisterProps {
  selectedRole: number;
  setSelectedRole: Dispatch<SetStateAction<number>>;
  onRegisterSubmitEvent?: (e: FormEvent) => void;
}

export interface AuthRoleSelectorProps {
  selectedRole: number;
  setSelectedRole: Dispatch<SetStateAction<number>>;
  resetPosition: () => void;
}

export interface AuthRegisterButtonsProps {
  selectedRole: number;
  currentPosition: number;
  onNextButtonClick: () => void;
  onPrevButtonClick: () => void;
}

export interface AuthRegisterForms {
  [key: number]: JSX.Element;
}
