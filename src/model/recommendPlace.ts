import { Place } from "@/model/place";
import { User } from "@/model/user";
import { ArrayMetadata, DocumentMetadata } from "@/model/sanity";

export type RecommendInfo = {
  place: Place;
  fitness: number;
  star: boolean;
};

export type RecommendInfoItem = RecommendInfo & ArrayMetadata;

export type RecommendPlace = {
  places: RecommendInfoItem[];
};

export type SanityRecommendInfo = RecommendPlace & DocumentMetadata;

export const recommendPlaceType = "recommendPlace";
