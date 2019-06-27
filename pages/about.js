import React from "react";

const About = () => {
    return (
        <div className="main">
            <h1>Luis Salazar</h1>
            <h2>Frontend Developer</h2>
            <div className="main-icons">
                <img src="/static/platzi-logo.png" alt="Platzi" />
                <img src="/static/react.png" alt="React" />
                <img src="/static/next-logo.png" alt="Next" />
            </div>
            <p>
                Practica React.js con Next.js
            </p>

            <style jsx>{`

                .main {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    color: #fff;
                }

                h1 { 
                    color: #daedfd;
                }

                p {
                    color
                }

                .main-icons {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    margin: 20px 0 20px 0;
                }

                .main-icons img {
                    width: 100px;
                    height: auto;
                    margin-right: 10px;
                }

                .main-icons img:last-child {
                    margin-right: 0px;
                }

                
            `}</style>

            <style jsx global>{`
                body {
                    background-color: #323b4c;
                }
            `}</style>
        </div>
    )
}

export default About