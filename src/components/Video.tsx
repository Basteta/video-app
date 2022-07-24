import React, {Fragment, useRef, useState, useEffect} from "react";
import {usePexelsVideoApi} from "../hooks/useApi";

import Loader from "./Loader";
import classes from './Video.module.scss';

interface VideoProps {
    query: string,
    videoTime: number;
    videoNumber: number;
}

const Video: React.FC<VideoProps> = props => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const {videos, error, loading} = usePexelsVideoApi(
        props.query
    );

    const videoRef = useRef<HTMLVideoElement>(null);

    const nextVideoHandler = () => {
        let durationTime = props.videoTime;

        if (videoRef.current!.currentTime >= durationTime) {
            changeVideo();
        }

        if (
            videoRef.current!.duration < durationTime
            && videoRef.current!.currentTime >= videoRef.current!.duration
        ) {
            changeVideo();
        }
    }

    const changeVideo = () => {
        let nextVideoIndex;

        if (currentIndex + 1 < props.videoNumber) {
            nextVideoIndex = (currentIndex + 1) % videos.length;
            setCurrentIndex(nextVideoIndex);
        } else if (
            currentIndex + 1 === props.videoNumber
            && props.videoNumber !== 1
        ) {
            nextVideoIndex = 0;
            setCurrentIndex(nextVideoIndex);
        } else if (props.videoNumber === 1) {
            videoRef.current!.pause();
            videoRef.current!.currentTime = 0;
            videoRef.current!.play();
        }
    }

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current!.play();
        }
    }, [currentIndex, videoRef])

    let content;

    if (loading) {
        content = <Loader/>;
    }

    if (error) {
        content=<p>Sorry... There was an error. Please try again later</p>
    }

    if (!loading && !error) {
        content = <p>Video not found. Please search again</p>;
    }

    if (!loading && !error && videos.length !== 0 ) {
        content = <Fragment>
            <video
                width="100%"
                controls id="video"
                autoPlay
                ref={videoRef}
                className={classes.video}
                onTimeUpdate={nextVideoHandler}
                poster={videos[currentIndex].imageUrl}
                src={videos[currentIndex].url}
            >

            </video>
            <span className={classes.author}>{videos[currentIndex].author.username}</span>
        </Fragment>;
    }

    return (
        <div className={classes.videoContainer}>
            {content}
        </div>
    )
}

export default Video;