import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Layout from "../components/Layout";
import utilStyles from "../styles/utils.module.css";
import { getPostsData } from "../lib/post";

export async function getStaticProps() {
  const allPostData = getPostsData();
  console.log(allPostData);
  return {
    props: {
      allPostData,
    },
  };
}

export default function Home({ allPostData }) {
  return (
    <Layout>
      <section className={utilStyles.headingMd}>
        <p>フロントエンドエンジニアです。好きな言語はJavaScriptです。</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2>📝エンジニアのブログ</h2>
        <div className={styles.grid}>
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail01.jpg"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="/" className={utilStyles.boldText}>
              SSGとSSRの使い分けの場合はいつなのか？
            </Link>
            <br />
            <small className={utilStyles.lightText}>February 23, 2020</small>
          </article>
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail01.jpg"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="/" className={utilStyles.boldText}>
              SSGとSSRの使い分けの場合はいつなのか？
            </Link>
            <br />
            <small className={utilStyles.lightText}>February 23, 2020</small>
          </article>
          <article>
            <Link href="/">
              <img
                src="/images/thumbnail01.jpg"
                className={styles.thumbnailImage}
              />
            </Link>
            <Link href="/" className={utilStyles.boldText}>
              SSGとSSRの使い分けの場合はいつなのか？
            </Link>
            <br />
            <small className={utilStyles.lightText}>February 23, 2020</small>
          </article>
        </div>
      </section>
    </Layout>
  );
}
