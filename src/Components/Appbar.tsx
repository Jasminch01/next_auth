"use client";
import Image from "next/image";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

const Appbar = () => {
  const { data: session } = useSession();
  const handleLogin = () => {
    signIn();
  };
  const handleLogout = () => {
    signOut();
  };
  return (
    <div className="bg-black w-full py-5 px-10">
      <div className="flex items-center justify-between">
        <div className="flex-grow flex justify-center">
          <ul className="flex list-none space-x-5 text-white">
            <Link href={'/about'}>About</Link>
            <Link href={'/contact'}>Contact</Link>
            <Link href={'/profile'}>Profile</Link>
            <Link href={'/admin'}>Admin</Link>
          </ul>
        </div>
        <div className="flex items-center space-x-5">
          <div>
            <Image
              alt="profile"
              src={session?.user?.image}
              width={30}
              height={30}
              className="rounded-full ring-2 ring-offset-white ring-white"
            />
          </div>
          {!session?.user ? (
            <button className="text-white" onClick={() => handleLogin()}>
              Login
            </button>
          ) : (
            <button className="text-white" onClick={() => handleLogout()}>
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Appbar;
