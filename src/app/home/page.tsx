import PlaceCard from "@/components/common/PlaceCard";

export default function HomePage() {
  const numbers = Array.from({ length: 10 }, (_, index) => index + 1);

  return (
    <section className={"text-h1 bg-bg"}>
      {/*<PlaceCard placeId={1} />*/}
      {numbers.map((number) => (
        <PlaceCard placeId={number} key={number} />
      ))}
    </section>
  );
}
