import customAxios from "../util/customAxios";
import { AuthForm } from "../types/auth/authType";

export async function authLoginRequest(url: string, data: AuthForm) {
  const res = await customAxios.post(url, data);
  return res.data;
}

export async function authRegisterRequest(url: string, data: AuthForm) {
  const res = await customAxios.post(url, data);
  return res.data;
}
