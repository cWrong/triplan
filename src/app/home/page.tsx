import PlaceCard from "@/components/common/PlaceCard";

export default function HomePage() {
  const numbers = Array.from({ length: 1000 }, (_, index) => index + 1);

  return (
    <section className={"text-h1 bg-bg"}>
      {numbers.map((number) => (
        <PlaceCard placeId={number} key={number} />
      ))}
    </section>
  );
}
