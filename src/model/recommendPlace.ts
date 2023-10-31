import { Place } from "@/model/place";
import { User } from "@/model/user";

export type RecommendPlace = {
  place: Place;
  fitness: number;
  star: boolean;
};

export type RecommendInfo = User & {
  places: RecommendPlace[];
};

export const recommendPlaceType = "recommendPlace";
