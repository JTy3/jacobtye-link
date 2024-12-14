import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import LoginButton from "./login-btn";

const name = "Jacob Tye";
export const siteTitle = "Jacob Tye - Software Engineer";

export default function Layout ({ children, home }) {
  return (
    <div>
      <div className={`${styles.container} shadow-lg my-5`}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Hi! My name is Jacob and I am a Sydney based Software Engineer currently working in the travel and tourism industry."
          />
          <meta name="og:title" content={siteTitle} />
        </Head>
        <header className={`${styles.header} border-bottom`}>
          {home ? (
            <>
              <div>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={`${utilStyles.borderCircle} border shadow-sm`}
                  width={200}
                  height={200}
                  alt={name}
                />
                <h1 className={utilStyles.heading2Xl}>{name}</h1>
              </div>
            </>
          ) : (
            <>
              <Link href="/">
                <Link>
                  <Image
                    priority
                    src="/images/profile.jpg"
                    className={`${utilStyles.borderCircle} border shadow-sm`}
                    height={140}
                    width={140}
                    alt={name}
                  />
                </Link>
              </Link>
              <h2 className={utilStyles.headingLg}>
                <Link href="/">
                  <span className={utilStyles.colorInherit}>{name}</span>
                </Link>
              </h2>
            </>
          )}
          <nav className="navbar navbar-expand-lg">
            <div id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link className="nav-link" href="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/blog">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <main className="mt-5">{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              ← Back to home
            </Link>
          </div>
        )}
        <footer className="border-top text-center mt-5">
          <Link
            href="https://github.com/JTy3"
            className="bi bi-github text-dark mx-1"
            style={{ fontSize: "2em" }}
          ></Link>
          <Link
            href="https://au.linkedin.com/in/jacob-t-365814125"
            className="bi bi-linkedin text-primary mx-1"
            style={{ fontSize: "2em" }}
          ></Link>
        </footer>
      </div>
    </div>
  );
}
