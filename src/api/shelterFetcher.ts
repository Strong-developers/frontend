// import customAxios from "../util/customAxios";

export async function getShelterRequest() {
  // For test
  const shelters = Array.from({ length: 40 })
    .fill(0)
    .map((_, idx) => {
      return {
        uid: (idx + 1).toString(),
        name: `Today's shelter ${idx + 1}`,
        region: "서울특별시",
      };
    });
  return shelters;
}
