import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps () {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home ({ allPostsData }) {
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
              currently working at an Insurtech Startup <Link href={`butterinsurance.com.au`}>Butter Insurance</Link>.
            </p>
            <p>
              I am a passionate Full Stack Engineer and love to watch others grow. I enjoy all things tech; and dabble in side projects 
              from scalable web apps that take my interest, to tinkering with game and VR development. Usually these projects lead nowhere;
              but I am getting better at documenting the engineering process on here!
            </p>
            <p>
              In my day job I lead technical decision making as well as build and deliver our full tech stack and product offering.
              I love a challenge and have welcomed the new year with a change in scenery joining the startup world.
              I love the pace of it and rapidly building solutions in the matter of days and weeks.
            </p>
            <p>
              I love collaborative working with others to build a something together and I like a team that pushes and challenges me, 
              but I also love mentoring and helping others become the best version of themselves.
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
                   {title}
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
