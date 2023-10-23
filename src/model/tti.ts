export type TTI = {
  id: number;
  name: string;
  description: string;
  traits: TTITrait;
  image: string;
};

export type TTITrait = {
  tourism: boolean;
  recreation: boolean;
  activity: boolean;
  pig: boolean;
};

export const TTITraitName = {
  tourism: "관광",
  recreation: "휴양",
  activity: "액티비티",
  pig: "맛집탐방",
};

export const ttiType = () => {
  return `tti`;
};
