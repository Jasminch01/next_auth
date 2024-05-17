"use client";

import React from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";

const profilePage = () => {
  const { data: session } = useSession();
  return (
    <div className="mt-5 flex justify-center">
      <div>
        <Image
          src={session?.user.image}
          alt="profile"
          height={200}
          width={200}
        />
        <div>
          <p>Name : {session?.user?.name}</p>
          <p>Role : {session?.user?.role}</p>
          <p>email : {session?.user?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default profilePage;
