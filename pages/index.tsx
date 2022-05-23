import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { queryLibraries } from "./api/libraries/service";

const Home: NextPage = (props: any) => {
  console.log("props:", props);

  return (
    <div className={styles.container}>
      <Head>
        <title>Cocoa Directory</title>
        <meta name="description" content="A searchable and filterable directory of iOS/OC/Swift libraries." />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1>Cocoa Directory</h1>
        {props.data.libraries.map((library: any, idx: number) => {
          return (
            <div key={idx}>
              <h2>{library.github.name}</h2>
              <p>{library.github.description}</p>
            </div>
          );
        })}
      </main>

      <footer className={styles.footer}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Powered by Vercel
        </a>
      </footer>
    </div>
  );
};

export async function getServerSideProps() {
  return {
    props: { data: queryLibraries() }, // will be passed to the page component as props
  };
}

export default Home;
