import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import GameHouseImage from '../public/gamehouse.png';

type layoutProps = {
    children: React.ReactNode;
}

const Main = (props: layoutProps) => {
    const year = new Date().getFullYear();

    return (
        <>
            <Head>
                <meta name="google-site-verification" content="IoqwXa0jgdLrvXiqTt2gVyPCpMd80szFRn1cLEp8Ul4" />
                <link rel="icon" href="/favicon-org.ico" />
            </Head>
            <table width={800} border={4} cellPadding={20} className="border-4">
                <thead>
                    <tr>
                        <th colSpan={2}>
                            <h1>Naufal Akbar Nugroho</h1>
                            <h4>Welcome to my website</h4>
                        </th>
                    </tr>
                    <tr>
                        <th colSpan={2}>
                            <Link href="/"><a>Home</a></Link>&nbsp;&nbsp;|&nbsp;&nbsp;
                            <Link href="/profile"><a>Profile</a></Link>&nbsp;&nbsp;|&nbsp;&nbsp;
                            <Link href="/projects"><a>Projects</a></Link>&nbsp;&nbsp;|&nbsp;&nbsp;
                            <Link href="/contact"><a>Contact</a></Link>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td valign="top">
                            {props.children}
                        </td>
                        <td width={250} valign="top">
                            <Image src={GameHouseImage} width="100" height="80" alt="gamehouse img" />
                            <p>Game House on Windows 7 is my favorite publisher game in my life.</p>
                            <Link href="/profile"><a>See my profile</a></Link>
                            <br />
                            <br />
                            <hr />
                            <h4>Get in touch</h4>
                            <p>You can follow me on several of these platforms:</p>
                            <ul>
                                <li>
                                    <a href="https://github.com/nuflakbrr">GitHub</a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/nuflakbrr">Twiiter</a>
                                </li>
                                <li>
                                    <a href="https://instagram.com/kbrnugroho">Instagram</a>
                                </li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={2} align="center">
                            <p>&copy; {year} <br /><br /></p>
                            <small>
                                Design by <a href="https://github.com/nauvalazhar" target={"_blank"} rel="noreferrer" className="author">Nauval</a>
                            </small>
                        </td>
                    </tr>
                </tfoot>
            </table>
            <style jsx global>{`
            .author{
                color: darkred;
            }
			table {
				background-color: #ffffff;
				border-color: #000000;
				margin: 0 auto;
				margin-top: 50px;
				margin-bottom: 50px;
				border-collapse: collapse;
			}
            // marquee
            .marquee{
                width: 100%;
                background-color: red;
                color: white;
                text-transform: uppercase;
                white-space: nowrap;
                overflow: hidden;
            }
            .marquee-content{
                display: inline-block;
                animation: scrolling 5s linear infinite;
            }
            @keyframes scrolling {
                100% { transform: translate(100%, 0); }
            }
			// blink polyfill
			.blink {
			  -webkit-animation: 1s linear infinite condemned_blink_effect; // for Safari 4.0 - 8.0
			  animation: 1s linear infinite condemned_blink_effect;
			}
			@-webkit-keyframes condemned_blink_effect { // for Safari 4.0 - 8.0
			  0% {
			    visibility: hidden;
			  }
			  50% {
			    visibility: hidden;
			  }
			  100% {
			    visibility: visible;
			  }
			}
			@keyframes condemned_blink_effect {
			  0% {
			    visibility: hidden;
			  }
			  50% {
			    visibility: hidden;
			  }
			  100% {
			    visibility: visible;
			  }
			}
		`}
            </style>
        </>
    );
};

export default Main;