import React from "react";

const Home  = () => {
    return (
        <div className="main">
            <h1>Hola Mundo <span>!!!</span></h1>
            <div>
                <img src="/static/platzi-logo.png" alt="Platzi" />
            </div>

            <style jsx>{`

                .main {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                h1 {
                    color: red;
                }

                img {
                    width: 100px;
                    height: auto;
                }
            `}</style>

            <style jsx global>{`
                body {
                    background-color: #fff;
                }
            `}</style>
        </div>
    )
}

export default Home