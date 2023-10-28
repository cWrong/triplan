import { Place } from "@/model/place";
import { User } from "@/model/user";

export type RecommendInfo = {
  place: Place;
  fitness: number;
  star: boolean;
};

export type RecommendPlace = User & {
  places: RecommendInfo[];
};

export const recommendPlaceType = "recommendPlace";
