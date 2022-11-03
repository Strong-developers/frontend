import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/auth/useAuth";
import CommonBasePageComponent from "../components/hoc/CommonBasePageComponent";
import AuthRegister from "../components/auth/AuthRegister";
import { AuthFormType } from "../types/auth/authType";

const Register = () => {
  const {
    register,
    handleSubmit,
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
  const { handleRegisterSubmit } = useAuth();

  return (
    <CommonBasePageComponent>
      <AuthRegister
        onRegisterSubmitEvent={handleSubmit(handleRegisterSubmit)}
        register={register}
        errors={errors}
      />
    </CommonBasePageComponent>
  );
};

export default Register;
