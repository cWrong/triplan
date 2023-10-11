import Link from "next/link";

export default function Home() {
  return (
    <main className={"flex flex-col"}>
      <Link href={"/plan"} className={"text-h2"}>
        plan
      </Link>
      <Link href={"/test"} className={"text-h2"}>
        test
      </Link>
      <Link href={"/test-result"} className={"text-h2"}>
        test-result
      </Link>
    </main>
  );
}
