/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import Main from '../layouts/Main';
import ImageMe from '../public/icon-512x512.png';

const Profile: NextPage = () => {
    return (
        <>
            <Main>
                <Head>
                    <title>Naufal Akbar Nugroho : Profile</title>
                </Head>

                <h1 className="blink">
                    My Profile
                </h1>

                <Image src={ImageMe} alt="Images" width={150} height={150} />

                <h2>
                    Junior Frontend Developer | Vocational High School Students
                </h2>

                <p>
                    I love UI/UX and I also like writing a series of code to create websites. Or maybe you can call it a Website Developer. But the difference with Website Developer, I prefer to make a website on the Frontend.
                </p>

                <p>
                    My name is Naufal Akbar Nugroho. Or you can call me Akbar. I was born on July 15, 2004 in Malang City, East Java Province, Indonesia. I am a student of SMK Telkom Malang batch 29. SMK Telkom Malang is a technology school. Since I entered SMK Telkom Malang, I have become very interested in UI/UX and Web Development.
                </p>

                <p>
                    At SMK Telkom Malang, I can do many things, such as character education, discipline, and many other things. In addition, I also studied Graphic Design, several programming languages, Web Design, and Web Development. I am very grateful to be part of the big family of SMK Telkom Malang, because I have come to understand the world of technology. For now, I'm studying Java, HTML, CSS, Vanilla JavaScript, Node.js, React.js, Next.js, and many more.
                </p>
            </Main>
        </>
    );
};

export default Profile;