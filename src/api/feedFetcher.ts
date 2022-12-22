import customAxios from "../util/customAxios";

export async function feedListRequest(url: string) {
  const res = await customAxios.get(url);
  return res.data;
}
