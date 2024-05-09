import React from "react";
import { Metadata } from "next";

export const metadata:Metadata = {
  title:"Testing Page"
  , description: "Component Testing Page"
}

function layout({ children }: React.PropsWithChildren) {
  return <>{children}</>;
}

export default layout;
