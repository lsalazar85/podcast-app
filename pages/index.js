import React, { Component } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import ChannelGrid from "../components/ChannelGrid";
import "isomorphic-fetch";


class Home extends Component {

    static async getInitialProps() {
        let req = await fetch("https://api.audioboom.com/channels/recommended");
        let { body: channels } = await req.json()
        return { channels }
    }

    render() {
        const { channels } = this.props;

        return (
            <Layout title="Podcasts">
                <ChannelGrid channels={ channels } />
            </Layout>
        )
    }
}

export default Home