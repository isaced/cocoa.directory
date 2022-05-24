import { useState } from "react";
import type { NextPage, NextPageContext } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";

import { queryLibraries } from "./api/libraries/service";
import { Library, Query, ResponseData } from "../types";
import Search from "../components/Search";
import Libraries from "../components/Libraries";
import Footer from "../components/Footer";
import urlWithQuery from "../util/urlWithQuery";
import getApiUrl from "../util/getApiUrl";

interface Props {
  data: ResponseData;
  query: Query;
}

const Home: NextPage<Props> = (props: Props) => {
  const router = useRouter();
  const { data, query } = props;

  return (
    <div className="flex-1 w-full mr-auto">
      <Head>
        <title>Cocoa Directory</title>
        <meta name="description" content="A searchable and filterable directory of iOS/OC/Swift libraries." />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="">
        <header className="flex bg-current justify-center items-center py-4">
          <div className="w-full max-w-6xl">
            <Link href="/">
              <a>
                <h1 className="text-white text-3xl mt-6">Cocoa Directory</h1>
              </a>
            </Link>
            <Search query={router.query} total={data && data.total} />
          </div>
        </header>
        <Libraries libraries={data && data.libraries} />
        <Footer />
      </main>
    </div>
  );
};

Home.getInitialProps = async (ctx: NextPageContext) => {
  const url = getApiUrl(urlWithQuery("/libraries", ctx.query), ctx);
  const response = await fetch(url);
  const result = await response.json();

  return {
    data: result,
    query: ctx.query,
  };
};

export default Home;
