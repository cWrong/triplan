import { NextRequest, NextResponse } from "next/server";
import RecommendPlaceSanity from "@/service/recommend-place/recommendPlace";
import { PatchStarRequest } from "@/api/recommend-place.types";

export async function PATCH(req: NextRequest) {
  const data = (await req.json()) as PatchStarRequest;
  const { docId, _key, status } = data;

  const res = await RecommendPlaceSanity.patchStar(docId, _key, status);

  if (res) return NextResponse.json(true, { status: 200 });
  else return NextResponse.json(false, { status: 500 });
}
