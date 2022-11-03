import React from "react";
import { UseFormRegister, FieldErrorsImpl } from "react-hook-form";

export interface AuthFormType {
  email: string;
  nickname?: string;
  password: string;
  confirmPassword?: string;
  role?: number;
}

export interface AuthFormPropsType {
  register: UseFormRegister<AuthFormType>;
  errors: Partial<FieldErrorsImpl<AuthFormType>>;
  onRegisterSubmitEvent?: (e: React.FormEvent) => void;
  onLoginSubmitEvent?: (e: React.FormEvent) => void;
}
