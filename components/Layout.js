import React from 'react';
import Link from "next/link";
import Head from "next/head";

const Layout = ({ children, title }) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>
            <header>
                <Link href="/"><a>Podcasts</a></Link>
            </header>
            <div className="main"> {children} </div>
            <style jsx>{`
                .main {
                    display: flex;
                    flex-direction: column;
                }
                header {
                    color: #fff;
                    background: #8756ca;
                    padding: 15px;
                    font-size: 20px;
                    font-weight: 700;
                    text-align: center;
                }
                header a {
                    color: #fff;
                    text-decoration: none;
                }
            `}</style>
            <style jsx global>{`
                body {
                    margin: 0;
                    font-family: system-ui;
                    background-color: #fff;
                }
            `}</style>
        </div>
    );
}

export default Layout;