import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useAuth from "../hooks/auth/useAuth";
import CommonBasePageComponent from "../components/hoc/CommonBasePageComponent";
import AuthRegister from "../components/auth/AuthRegister";
import { AuthForm } from "../types/auth/authType";

const Register = () => {
  const {
    registerSchema,
    selectedRole,
    setSelectedRole,
    handleRegisterSubmit,
  } = useAuth();
  const methods = useForm<AuthForm>({
    mode: "onChange",
    defaultValues: {
      email: "",
      nickname: "",
      password: "",
      confirmPassword: "",
      name: "",
      region: "",
      phoneNumber: "",
      description: "",
      caution: "",
    },
    resolver: yupResolver(registerSchema),
  });

  return (
    <CommonBasePageComponent>
      <FormProvider {...methods}>
        <AuthRegister
          selectedRole={selectedRole}
          setSelectedRole={setSelectedRole}
          onRegisterSubmitEvent={methods.handleSubmit(handleRegisterSubmit)}
        />
      </FormProvider>
    </CommonBasePageComponent>
  );
};

export default Register;
