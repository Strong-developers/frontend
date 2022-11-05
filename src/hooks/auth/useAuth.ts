import { useState } from "react";
import { authRegisterRequest, authLoginRequest } from "../../api/authFetcher";
import { AuthFormType } from "../../types/auth/authType";
import { setItem } from "../../storage/customStorage";

const useAuth = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegisterSubmit = async (data: AuthFormType) => {
    try {
      const { result } = await authRegisterRequest("/auth/register", {
        email: data.email,
        password: data.password,
        nickname: data.nickname,
        role: 1,
      });
      if (result.id) window.location.replace("/login");
    } catch (error) {
      throw new Error("This is register request Error");
    }
  };

  const handleLoginSubmit = async (data: AuthFormType) => {
    try {
      const { result } = await authLoginRequest("/auth/login", {
        email: data.email,
        password: data.password,
      });
      if (result.token) {
        setItem(result.token);
        window.location.replace("/");
      }
    } catch (error) {
      throw new Error("This is login request Error");
    }
  };

  return { handleRegisterSubmit, handleLoginSubmit, errorMessage };
};

export default useAuth;
