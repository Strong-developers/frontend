import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/auth/useAuth";
import CommonBasePageComponent from "../components/hoc/CommonBasePageComponent";
import AuthLogin from "../components/auth/AuthLogin";
import { AuthFormType } from "../types/auth/authType";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<AuthFormType>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { handleLoginSubmit } = useAuth();

  return (
    <CommonBasePageComponent>
      <AuthLogin
        register={register}
        errors={errors}
        onLoginSubmitEvent={handleSubmit(handleLoginSubmit)}
      />
    </CommonBasePageComponent>
  );
};

export default Login;
