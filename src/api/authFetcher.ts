import customAxios from "../util/customAxios";
import { AuthFormType } from "../types/auth/authType";

export async function authLoginRequest(url: string, data: AuthFormType) {
  const res = await customAxios.post(url, data);
  return res.data;
}

export async function authRegisterRequest(url: string, data: AuthFormType) {
  const res = await customAxios.post(url, data);
  return res.data;
}
