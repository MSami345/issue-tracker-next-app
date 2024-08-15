import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-40 flex-col gap-2 items-center justify-between p-24">
      <div>Next App</div>
      {/* <Link href={"/products"}>Products Page</Link>
      <Link href={"/Users"}>Users Page</Link> */}
    </main>
  );
}
