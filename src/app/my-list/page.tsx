import React from "react";
import MyPlaceList from "@/components/page/my-list/MyPlaceList";
import MyPlanList from "@/components/page/my-list/MyPlanList";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function MyListPage() {
  const session = await getServerSession();
  if (!session) {
    redirect("/auth/signin");
  }

  return (
    <section className={"bg-bg"}>
      <div className={"py-[40px]"}>
        <p className={"px-[80px] py-[20px] text-sub2"}>추천 여행지 리스트</p>
        <MyPlaceList />
      </div>
      <div className={"py-[40px]"}>
        <p className={"px-[80px] py-[20px] text-sub2"}>내 여행 계획</p>
        <MyPlanList />
      </div>
    </section>
  );
}
