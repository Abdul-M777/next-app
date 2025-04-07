"use client";

import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import img from "@/public/images/ChatGPT Image Apr 6, 2025, 12_56_00 PM.png";
import { useState } from "react";
import dynamic from "next/dynamic";
import _ from "lodash";

// const HeavyComponent = dynamic(() => import("./components/HeavyComponent"), {
//   ssr: false,
//   loading: () => <p>Loading...</p>,
// });

export default function Home() {
  // const session =  getServerSession(authOptions);
  const [isVisible, setVisible] = useState(false);

  return (
    <main className="relative h-screen">
      {/* <Image
        src="https://bit.ly/react-cover"
        alt="Me"
        fill
        className="object-cover"
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        quality={100}
        priority
      /> */}
      <h1>Hello World</h1>
      <button
        onClick={() => {
          const users = [{ name: "c" }, { name: "b" }, { name: "a" }];
          const sortedArray = _.orderBy(users, ["name"], ["asc"]);
          console.log(sortedArray);
        }}
      >
        Show
      </button>
      {/* {isVisible && <HeavyComponent />} */}
    </main>
  );
}

// export async function generateMetadata() {
//   const product = await fetch("");
//   return {
//     title: "Home",
//     description: "Home page",
//     icons: {
//       icon: "/images/favicon.ico",
//     },
//   };
// }
