"use client";

import { useEffect } from "react";
import _ from "lodash";
import Layout from "@/components/layout";
import { useRouter } from "next/navigation";

export default function Home() {
  const Router = useRouter();

  useEffect(() => {
    Router.push("/projects");
  }, []);

  return (
    <Layout>
      <main className="p-5"></main>
    </Layout>
  );
}
