import React, { Component } from "react";
import "isomorphic-fetch";
;
class Home extends Component {

    static async getInitialProps() {
        let req = await fetch("https://api.audioboom.com/channels/recommended");
        let { body: channels } = await req.json()
        return { channels }
    }

    render() {
        const { channels } = this.props;

        return (
            <div className="main">
                <header>
                    Podcasts
                </header>
                <div className="channels">
                    {
                        channels.map((channel,index) => (
                            (
                                <div key={index} className="channel">
                                    <img src={channel.urls.logo_image.original} alt=""/>
                                    <h2>{channel.title}</h2>
                                </div>
                            )
                        ))
                    }
                </div>
    
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

                    .channels {
                        display: grid;
                        grid-gap: 15px;
                        padding: 15px;
                        grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
                    }

                    a.channel {
                        display: block;
                        margin-bottom: 0.5em;
                        color: #333;
                        text-decoration: none;
                    }

                    .channel img {
                        border-radius: 3px;
                        box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
                        width: 100%;
                    }

                    h2 {
                        padding: 5px;
                        font-size: 0.9em;
                        font-weight: 600;
                        margin: 0;
                        text-align: center;
                    }
                `}</style>
    
                <style jsx global>{`
                    body {
                        margin: 0;
                        font-family: system-ui;
                        background-color: #fff;
                        padding: 30px;
                    }
                `}</style>
            </div>
        )
    }
}

export default Home