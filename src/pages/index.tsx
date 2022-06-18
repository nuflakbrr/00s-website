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
          {/* <marquee>
            Time to bring back the old school website brow
          </marquee> */}
        </div>
        <p>Hello, this is my website. You can get to know me through this website. These days the website interface design varies greatly, from minimal design to complex design. Because of the large number of website design choices that make me confused to use what kind of style, eventually I decided to go back to 2000s website design.</p>
        <p>The appearance of this website is also what I made when I first learned to make a web page using only HTML and also Notepad. But, because this is 2020 and there are lots of tools that make it easy for us to build a modern website, so I decided to build this website using Node, React/Next and Now; so that people don"t think that I"m standing by obsolescence.</p>
        <p>As I mentioned before, today we are facilitated by modern tools, such as Node, Tailwind, React, Vue, Gatsby, Webpack, and so on. Because of these tools, sometimes someone thinks creating a website today is complicated:  because we have to setup "this and that"; maybe it"s true. On the other hand, I just want to "prove" that making website is easy, "these tools" are literally tools. So, without these tools we can still create a website. Also, when we need these tools, use them. Simple isn"t it?</p>
        <p>The most important thing is that I am just an ordinary human whose every statement is potentially wrong - just like you.</p>
        <p>Regards,<br /><b>Nauval</b></p>
      </Main>
    </>
  );
};

export default Home;
