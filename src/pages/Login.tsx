import React from "react";
import { useForm } from "react-hook-form";
import CommonBasePageComponent from "../components/hoc/CommonBasePageComponent";
import AuthLogin from "../components/auth/AuthLogin";
import { AuthFormType } from "../types/auth/authType";

const Login = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useForm<AuthFormType>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <CommonBasePageComponent>
      <AuthLogin register={register} errors={errors} />
    </CommonBasePageComponent>
  );
};

export default Login;
