import customAxios from "../util/customAxios";
import { getItem } from "../storage/customStorage";

export async function feedListRequest(id: string, page: number) {
  const res = await customAxios.get(`/shelter/${id}?page=${page}`, {
    headers: {
      Authorization: `Bearer ${getItem()}`,
    },
  });
  const { result } = res.data;
  return result;
}
