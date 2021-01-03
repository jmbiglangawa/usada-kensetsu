import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import LoadingScreen from '../LoadingScreen'
import classes from './Vlog.module.css'
import SubsectionHeader from '../credits/components/SubsectionHeader'
import socketIOClient from "socket.io-client";
import { getPekoraMinecraftVideoList, getPekoraAllVideoList } from '../../services/youtube.service';
import VideoWrapper from "./components/VideoWrapper";

import { sampleAllVideoList } from './sample/SampleAllVideoList';
import { sampleMinecraftVideoList } from './sample/SampleMinecraftVideoList';

const Vlog = () => {
    let [minecraftVideoList, setMinecraftVideoList] = useState()
    let [otherVideoList, setOtherVideoList] = useState()

    useEffect(() => {
        (async () => {
            await getPekoraMinecraftVideoList()
                .then(response => {
                    if (response && response.VideoList) {
                        setMinecraftVideoList(response.VideoList.map((data, index) => <VideoWrapper data={JSON.stringify(data)} key={index} />));
                    } else {
                        setMinecraftVideoList(sampleMinecraftVideoList.items.map((data, index) => <VideoWrapper data={JSON.stringify(data)} key={index} />));
                    }
                })
        })();

        (async () => {
            await getPekoraAllVideoList()
                .then(response => {
                    if (response && response.VideoList) {
                        setOtherVideoList(response.VideoList.map((data, index) => <VideoWrapper data={JSON.stringify(data)} key={index} />));
                    } else {
                        setOtherVideoList(sampleAllVideoList.items.map((data, index) => <VideoWrapper data={JSON.stringify(data)} key={index} />));
                    }
                })
        })();

        const socket = socketIOClient(process.env.PUBLIC_URL);

        socket.on("updatePekoraMinecraftVideoList", response => {
            if (response && response.VideoList) {
                setMinecraftVideoList(response.VideoList.map((data, index) => <VideoWrapper data={JSON.stringify(data)} key={index} />))
            }
        });

        socket.on("updatePekoraAllVideoList", response => {
            if (response && response.VideoList) {
                setOtherVideoList(response.VideoList.map((data, index) => <VideoWrapper data={JSON.stringify(data)} key={index} />))
            }
        });

        //Disconnect from socket when component is unmount
        return () => {
            socket.disconnect();
        }

    }, [])

    return (
        <div className="vlog-wrapper">
            <Helmet>
                <title>Vlog - Usada Constructions🥕</title>
                <meta property="og:title" content={"Vlog - Usada Constructions🥕"} />
                <meta property="twitter:title" content={"Vlog - Usada Constructions🥕"} />
            </Helmet>

            <div className={classes['vlog-header']}>
                <div className="ph-title">Vlog</div>
            </div>

            <SubsectionHeader
                title={"Minecraft Video"}
                subtitle={"{{ Minecraft video description if necessary }}"}
            />

            {minecraftVideoList ?
                (
                    <div className={classes['vlog-grid']}>
                        {minecraftVideoList}
                    </div>
                )
                :
                <LoadingScreen />
            }

            <SubsectionHeader
                title={"Other Video"}
                subtitle={"{{ Other video description if necessary }}"}
            />


            {otherVideoList ?
                (
                    <div className={classes['vlog-grid']}>
                        {otherVideoList}
                    </div>
                )
                :
                <LoadingScreen />
            }


            <SubsectionHeader
                title={
                    <a href="https://www.youtube.com/channel/UC1DCedRgGHBdm81E1llLhOQ/videos" className="text-decoration-none" rel="noreferrer" target="_blank">Click here to view the full list of Usada Pekora's Vlogs</a>
                }
            />
        </div>
    )
}

export default Vlog