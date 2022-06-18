/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next';
import Head from 'next/head';

import Main from '../layouts/Main';

const Contact: NextPage = () => {
    return (
        <>
            <Main>
                <Head>
                    <title>Naufal Akbar Nugroho : Contact</title>
                </Head>

                <h1 className="blink">Contact</h1>

                <p>
                    Email me at <a href="mailto:naufalakbar378@gmail.com" className="link">naufalakbar378@gmail.com</a>
                </p>

                <p>
                    Or you can follow my social media account on <a href="https://github.com/nuflakbrr" target={"_blank"} rel="noreferrer" className="link">GitHub</a>, <a href="https://twitter.com/nuflakbrr" target={"_blank"} rel="noreferrer" className="link">Twitter</a> or <a href="https://instagram.com/kbrnugroho" target={"_blank"} rel="noreferrer" className="link">Instagram</a>.
                </p>
            </Main>
        </>
    );
};

export default Contact;