import { useState } from "react";
import type { NextPage, NextPageContext } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { queryLibraries } from "./api/libraries/service";
import { Library, Query, ResponseData } from "../types";
import Search from "../components/Search";
import Libraries from "../components/Libraries";
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
    <div className={styles.container}>
      <Head>
        <title>Cocoa Directory</title>
        <meta name="description" content="A searchable and filterable directory of iOS/OC/Swift libraries." />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1>Cocoa Directory</h1>
        <Search query={router.query} total={data && data.total} />
        <Libraries libraries={data && data.libraries} />
      </main>

      <footer className={styles.footer}>
        <div>
          Missing a library? Add it to the{" "}
          <a href="https://github.com/isaced/cocoa.directory#how-do-i-add-a-library">directory</a>.
        </div>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Powered by Vercel
        </a>
      </footer>
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
