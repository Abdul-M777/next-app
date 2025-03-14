import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1 className="text-black">Hello World</h1>
      <Link className="text-black" href="/users">
        Users
      </Link>
      <ProductCard></ProductCard>
    </main>
  );
}
