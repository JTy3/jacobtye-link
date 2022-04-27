import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="row mt-3">
        <div className="col-12 col-sm-8">
          <section className={utilStyles.headingMd}>
            <h2 className={`${utilStyles.headingLg} mt-0`}>Overview</h2>
            <p>
              Hi! My name is Jacob and I am a Sydney based Software Engineer
              currently working in the travel and tourism industry.
            </p>
            <p>
              I am a passionate Software Engineer and an AWS Enthusiast. In my
              spare time I enjoy all things tech; from scalable web apps that
              take my interest, to tinkering with game and VR development.
            </p>
            <p>
              In my day job I maintain and enhance all sorts of applications and
              services these include projects from internal tools to customer
              facing applications; legacy code to modern TypeScript and
              microservices development.
            </p>
            <p>
              I enjoy navigating my way through a terminal and automating
              everything I can, from deployment pipelines to business process
              automations.
            </p>
            <p>
              When I am not at my computer I enjoy spending time at the beach,
              riding motorbikes and building Lego.
            </p>
          </section>
        </div>
        <div className="col-12 col-sm-4">
          <section className={`${utilStyles.headingMd}`}>
            <h2 className={`${utilStyles.headingLg} mt-0`}>Blog</h2>
            <ul className={utilStyles.list}>
              {allPostsData.map(({ id, date, title }) => (
                <li className={utilStyles.listItem} key={id}>
                  <Link href={`/posts/${id}`}>
                    <a>{title}</a>
                  </Link>
                  <br />
                  <small className={utilStyles.lightText}>
                    <Date dateString={date} />
                  </small>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </Layout>
  );
}
