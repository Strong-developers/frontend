import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { authRegisterRequest, authLoginRequest } from "../../api/authFetcher";
import { AuthForm } from "../../types/auth/authType";
import { setItem } from "../../storage/customStorage";

const useAuth = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedRole, setSelectedRole] = useState(1);
  const navigate = useNavigate();

  const loginSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup
      .string()
      .min(8)
      .max(15)
      .matches(/^.(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/)
      .required(),
  });

  const registerSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup
      .string()
      .min(8)
      .max(15)
      .matches(/^.(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/)
      .required(),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
    nickname: yup.string().min(4).required(),
    name: yup.string().when([], {
      is: () => selectedRole === 2,
      then: yup.string().required(),
    }),
    region: yup.string().when([], {
      is: () => selectedRole === 2,
      then: yup.string().required(),
    }),
    phoneNumber: yup.string().when([], {
      is: () => selectedRole === 2,
      then: yup.string().required(),
    }),
    description: yup.string().when([], {
      is: () => selectedRole === 2,
      then: yup.string().required(),
    }),
    caution: yup.string().when([], {
      is: () => selectedRole === 2,
      then: yup.string().required(),
    }),
  });

  const handleRegisterSubmit = async (data: AuthForm) => {
    try {
      if (selectedRole === 1) {
        const { email, password, nickname } = data;
        const res = await authRegisterRequest("/auth/register/normaluser", {
          email,
          password,
          nickname,
          role: selectedRole,
        });
        if (res.success) navigate("/login", { replace: true });
      } else {
        const {
          email,
          password,
          nickname,
          name,
          region,
          phoneNumber,
          description,
          caution,
        } = data;
        const res = await authRegisterRequest("/auth/register/shelter", {
          email,
          password,
          nickname,
          role: selectedRole,
          name,
          region,
          phoneNumber,
          description,
          caution,
        });
        if (res.success) navigate("/login", { replace: true });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLoginSubmit = async (data: AuthForm) => {
    try {
      const res = await authLoginRequest("/auth/login", {
        email: data.email,
        password: data.password,
      });
      if (res.success) {
        const {
          result: { token },
        } = res;
        setItem(token);
        navigate("/", { replace: true });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    loginSchema,
    registerSchema,
    errorMessage,
    selectedRole,
    setSelectedRole,
    handleRegisterSubmit,
    handleLoginSubmit,
  };
};

export default useAuth;
