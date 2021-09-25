import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";
import Image from "next/image";
import styles from "../../public/styles/about.module.css";
// import Willamy from "../assets/willamy.png";
// import Willamy from "../assets/Willamy.png";

// documentation https://github.com/vercel/next.js/tree/canary/examples/image-component

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/about"} />
      <OpenGraphMeta url={"/about"} />
      <TwitterCardMeta url={"/about"} />
      <div className="container">
        <div>
          <h1>About</h1>
          <span className="handle">@nextjs-netlify-blog</span>
          <p>
            I'm a full stack web developer looking to move into the web3 space -
            I see massive potential in trustless networks, both to do
            interesting work, and solve real world coordination problems.
          </p>

          <Image
            priority
            // src="/images/will.jpg"
            className={styles.willamyimg}
            src="/images/willamy.png"
            height={300}
            width={550}
            alt={"name"}
          />
          {/* <h1 className={utilStyles.heading2Xl}>{name}</h1> */}

          <SocialList />
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1 auto;
          padding: 0 1.5rem;
        }
        h1 {
          font-size: 2.5rem;
          margin: 0;
          font-weight: 500;
        }
        h2 {
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 1.25;
        }
        .fancy {
          color: #15847d;
        }
        .handle {
          display: inline-block;
          margin-top: 0.275em;
          color: #9b9b9b;
          letter-spacing: 0.05em;
        }

        @media (min-width: 769px) {
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2.25rem;
          }
        }
      `}</style>
    </Layout>
  );
}
