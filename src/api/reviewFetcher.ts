import customAxios from "../util/customAxios";

export async function reviewListRequest(url: string) {
  const res = await customAxios.get(url);
  return res.data.result;
}
