import React from 'react'
import classes from './VideoWrapper.module.css'

const VideoWrapper = props => {
    const { data } = props
    const dataParsed = JSON.parse(data)

    return (
        <div className={classes.videoWrapperBase}>
            <img src={dataParsed.snippet.thumbnails.high.url} width="100%" alt="" srcset=""/>
            <p className="mt-1 font-weight-bold mb-0">{dataParsed.snippet.title}</p>
            <p className="smaller mb-0">{dataParsed.snippet.channelTitle}</p>
            <p className="mb-0">
                {dataParsed.snippet.publishTime}
            </p>
        </div>
    )
}

export default VideoWrapper