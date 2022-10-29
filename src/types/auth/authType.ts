import { UseFormRegister, FieldErrorsImpl } from "react-hook-form";

export interface AuthFormType {
  email: string;
  nickname?: string;
  password: string;
  confirmPassword?: string;
}

export interface AuthFormPropsType {
  register: UseFormRegister<AuthFormType>;
  errors: Partial<FieldErrorsImpl<AuthFormType>>;
}
