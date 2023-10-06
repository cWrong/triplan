import Link from "next/link";

export default function Home() {
  return (
    <main className={"flex flex-col"}>
      <Link href={"/plan"}>plan</Link>
      <Link href={"/test"}>test</Link>
      <Link href={"/test-result"}>test-result</Link>
    </main>
  );
}
