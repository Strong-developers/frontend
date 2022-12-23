import { useForm, FormProvider } from "react-hook-form";
import useAuth from "../hooks/auth/useAuth";
import { yupResolver } from "@hookform/resolvers/yup";
import CommonBasePageComponent from "../components/hoc/CommonBasePageComponent";
import AuthLogin from "../components/auth/AuthLogin";
import { AuthForm } from "../types/auth/authType";

const Login = () => {
  const { loginSchema, handleLoginSubmit } = useAuth();
  const methods = useForm<AuthForm>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });

  return (
    <CommonBasePageComponent>
      <FormProvider {...methods}>
        <AuthLogin
          onLoginSubmitEvent={methods.handleSubmit(handleLoginSubmit)}
        />
      </FormProvider>
    </CommonBasePageComponent>
  );
};

export default Login;
