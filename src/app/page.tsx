import Link from "next/link";

export default function Home() {
  return (
    <main className={"flex flex-col"}>
      <Link href={"/plan"} className={"text-h2"}>
        plan
      </Link>
      <Link href={"/survey"} className={"text-h2"}>
        survey
      </Link>
      <Link href={"/test-result"} className={"text-h2"}>
        test-result
      </Link>
      <Link href={"/home"} className={"text-h2"}>
        home
      </Link>
    </main>
  );
}
