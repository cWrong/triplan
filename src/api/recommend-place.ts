import axios, { AxiosInstance } from "axios";
import { PatchStarRequest } from "@/api/recommend-place.types";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

export default class RecommendPlaceApi {
  private static RecommendPlaceClient: AxiosInstance = axios.create({
    baseURL: `${SERVER_URL}/api/recommend-place`,
  });

  static patchStar = (body: PatchStarRequest) => {
    return this.RecommendPlaceClient.patch<boolean>(`/star`, body);
  };
}
