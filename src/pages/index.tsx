/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next';
import Head from 'next/head';

import Main from '../layouts/Main';

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

        <p>Hello, welcome to my retro website. The reason why I made this website is because I miss the look of the website in the 2000s even though I was born in 2004, but I still had time to feel the look of the website around the 2000s hehehe.</p>

        <p>I thank you very much for taking the time to visit this website. A little story that when I created this website I had a lot of trouble finding references for how to make a website look in the 2000s. I say many thanks to <a href="https://github.com/nauvalazhar" target={"_blank"} rel="noreferrer" className="link">Naufal Azhar</a> who created the layout for this website.</p>

        <p>Cheers,<br /><b>Naufal Akbar Nugroho</b></p>
      </Main>
    </>
  );
};

export default Home;
