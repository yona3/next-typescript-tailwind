import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { sayHello } from "src/modules";

import { Layout } from "../components/Layout";

const Index: NextPage = () => {
  useEffect(() => {
    sayHello("yona3");
  }, []);

  return (
    <Layout>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="This is my Next.js + TypeScript + Tailwind CSS starter template."
        />
      </Head>

      <div className="text-center">
        <p className="mt-12 text-xl text-blue-600">
          Next.js + TypeScript + Tailwind CSS{" "}
          <span role="img" aria-label="rocket">
            🚀
          </span>
        </p>
      </div>
    </Layout>
  );
};

export default Index;
