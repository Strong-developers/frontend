import customAxios from "../util/customAxios";

export async function getCategoryRequest(url: string) {
  const res = await customAxios.get(url);
  return res.data;
}
