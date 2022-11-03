import { useState, useCallback } from "react";
import { authRegisterRequest, authLoginRequest } from "../../api/authFetcher";
import { AuthFormType } from "../../types/auth/authType";

const useAuth = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegisterSubmit = async (data: AuthFormType) => {
    try {
      console.log(data.email);
      const res = await authRegisterRequest("/auth/register", {
        email: data.email,
        password: data.password,
        nickname: data.nickname,
        role: 1,
      });
    } catch (error) {
      throw new Error("request Error");
    }
  };

  const handleLoginSubmit = async (data: AuthFormType) => {
    try {
      const { result } = await authLoginRequest("/auth/login", {
        email: data.email,
        password: data.password,
      });
      console.log(result.token);
    } catch (error) {
      console.log(error);
      throw new Error("request Error");
    }
  };

  return { handleRegisterSubmit, handleLoginSubmit, errorMessage };
};

export default useAuth;
