"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const { status, data: session } = useSession();

  return (
    <div className="flex bg-slate-200 p-5 space-x-3">
      <Link className="mr-5" href="/">
        Next.js
      </Link>
      <Link className="mr-5" href="/users">
        Users
      </Link>
      {status === "loading" && <div>Loading...</div>}
      {status === "authenticated" && (
        <div>
          {session.user?.name}{" "}
          <Link href={"/api/auth/signout"} className="ml-3">
            Sign Out
          </Link>
        </div>
      )}
      {status === "unauthenticated" && (
        <Link className="mr-5" href="/api/auth/signin">
          Sign In
        </Link>
      )}
    </div>
  );
};

export default NavBar;
