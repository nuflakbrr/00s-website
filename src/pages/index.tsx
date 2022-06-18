/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Head from "next/head";

import Main from "../layouts/Main";

const Home: NextPage = () => {
  return (
    <>
      <Main>
        <Head>
          <title>Naufal Akbar Nugroho</title>
        </Head>
        <h1 className="blink">
          Hello world!
        </h1>
        <div className="marquee">
          <div className="marquee-content">
            <h4 className="marquee-item">
              Time to bring back the old school website brow
            </h4>
          </div>
        </div>
        <p>hello</p>
        <p>Regards,<br /><b>Naufal Akbar Nugroho</b></p>
      </Main>
    </>
  );
};

export default Home;
