"use client";
import React from "react";
import { usePathname } from "next/navigation"; // an hook to get the navigation path so that we can conditionally render layout

const layout = ({ children }: any) => {
  const path = usePathname();
  const decodeurl = decodeURI(path);
  const status = decodeurl.includes("Leanne Graham");
  console.log(status);

  return (
    <div>
      {!status && <h1>this is common student layout</h1>}
      {children}
    </div>
  );
};

export default layout;
