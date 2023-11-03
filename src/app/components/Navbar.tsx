import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <Link href="/">
        <div className="logo">Logo</div>
      </Link>
      <Link href="/login">
        <div className="logo">Login</div>
      </Link>
      <Link href="/dashboard">
        <div className="logo">Dashboard</div>
      </Link>
      <Link href="/dashboard/users">
        <div className="logo">Users</div>
      </Link>
      <Link href="/profile">
        <div className="logo">Profile</div>
      </Link>
    </nav>
  );
};

export default Navbar;
