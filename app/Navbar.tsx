import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex bg-gray-200 p-5 gap-5">
      <Link href={"/"}>Logo</Link>
      <Link href={"/users"}>Users</Link>
      <Link href={"/admin"}>Admin</Link>
    </div>
  );
};

export default Navbar;
