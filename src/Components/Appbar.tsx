import Image from "next/image";
import React from "react";

const Appbar = () => {
  return (
    <div className="bg-black w-full py-5 px-10">
      <div className="flex items-center justify-between">
        <div className="flex-grow flex justify-center">
          <ul className="flex list-none space-x-5 text-white">
            <li>About</li>
            <li>Contact</li>
            <li>Profile</li>
          </ul>
        </div>
        <div className="flex items-center space-x-5">
          <div>
            <Image
              alt="profile"
              src={""}
              width={30}
              height={30}
              className="rounded-full ring-2 ring-offset-white ring-white"
            />
          </div>
          <button className="text-white">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Appbar;
