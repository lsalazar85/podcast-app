import React, { Component } from "react";
import Layout from "../components/Layout";
import PodcastsList from "../components/PodcastsList";

class Channel extends Component {

  static async getInitialProps({ query }) {
    let idChannel = query.id

    let [reqChannel, reqSeries, reqAudios] = await Promise.all([
      fetch(`https://api.audioboom.com/channels/${idChannel}`),
      fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`),
      fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`)
    ])

    let dataChannel = await reqChannel.json()
    let channel = dataChannel.body.channel

    let dataAudios = await reqAudios.json()
    let audioClips = dataAudios.body.audio_clips

    let dataSeries = await reqSeries.json()
    let series = dataSeries.body.channels

    return { channel, audioClips, series }
  }

  render() {
    const { channel, audioClips } = this.props

    return (
      <Layout title={channel.title}>
        <div className="banner" style={{ backgroundImage: `url(${channel.urls.banner_image.original})`}} />
        <h1>{ channel.title }</h1>
        <PodcastsList audioClips={ audioClips } />
        <style jsx>{`
          .banner {
            width: 100%;
            padding-bottom: 25%;
            background-position: 50% 50%;
            background-size: cover;
            background-color: #aaa;
          }
          .back-btn {
            display: flex;
            flex-direction: column;
            margin: 30px 0 30px 0;
            color: #000000;
          }
          .back-btn a:hover, a:focus{
            color: #000000;
          }
        `}</style>
    </Layout>
    )
    
  }
}

export default Channel