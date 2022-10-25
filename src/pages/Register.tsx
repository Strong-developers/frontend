import React from "react";
import { useForm } from "react-hook-form";
import CommonBasePageComponent from "../components/hoc/CommonBasePageComponent";
import AuthRegister from "../components/auth/AuthRegister";
import { AuthFormType } from "../types/auth/authType";

const Register = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useForm<AuthFormType>({
    mode: "onChange",
    defaultValues: {
      email: "",
      nickname: "",
      password: "",
      confirmPassword: "",
    },
  });

  return (
    <CommonBasePageComponent>
      <AuthRegister register={register} errors={errors} />
    </CommonBasePageComponent>
  );
};

export default Register;
