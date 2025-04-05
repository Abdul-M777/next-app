import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      <h1 className="text-black">
        Hello {session && <span>{session.user!.name}</span>}
      </h1>
      <Link className="text-black" href="/users">
        Users
      </Link>
      <ProductCard></ProductCard>
    </main>
  );
}
