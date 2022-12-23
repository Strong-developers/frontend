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

export async function feedPostRequest(id: string, description: string) {
  const res = await customAxios.post(
    `/shelter/${id}`,
    {
      description: description,
    },
    {
      headers: {
        Authorization: `Bearer ${getItem()}`,
      },
    }
  );
  return res.data;
}

export async function feedUpdateRequest(
  id: string,
  postId: string,
  description: string
) {
  const res = await customAxios.put(
    `/shelter/${id}?postId=${postId}`,
    {
      description: description,
    },
    {
      headers: {
        Authorization: `Bearer ${getItem()}`,
      },
    }
  );
  return res.data;
}

export async function feedDeleteRequest(id: string, postId: string) {
  const res = await customAxios.delete(`/shelter/${id}?postId=${postId}`, {
    headers: {
      Authorization: `Bearer ${getItem()}`,
    },
  });
  return res.data;
}
