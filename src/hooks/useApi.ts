import { useState, useEffect } from 'react';
import {Video} from "../models/video";
import {User} from "../models/user";

interface PexelsResponse {
    videos: [{
        id: number;
        image: string;
        user: {
            id: number;
            name: string;
        };
        video_files: [{
            link: string;
        }];
    }];
}

interface PexelsApiProps {
    videos: Video[];
    error: Error | undefined;
    loading: Boolean;
}

const PEXELS_API_URL = 'https://api.pexels.com/videos/';

//Custom hook for API calls to fetch data from server

export const usePexelsVideoApi = (query: string): PexelsApiProps => {
    const [videos, setVideos] = useState<Video[]>([]);
    const [error, setError] = useState<Error | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(false);

    let url = `${PEXELS_API_URL}search?query=${query}&orientation=landscape`

    const fetchData = async() => {
        try {
            setLoading(true);

    const apiResponse = await fetch(url, {
        headers: {
            Authorization: `${process.env.REACT_APP_PEXELS_AUTHORIZATION_TOKEN}`
        },
        referrerPolicy: 'same-origin'
    });
    const data: PexelsResponse = await apiResponse.json();

    const mappedVideos: Video[] = data.videos.map(video => {
        return new Video(
            video.id,
            video.image,
            video.video_files[0].link,
            new User(video.user.id, video.user.name)
        );
    });

    setVideos(mappedVideos);
    setLoading(false);
} catch (error) {
        setError(error as Error);
        setLoading(false);
    }
    }

    useEffect( () => {
        fetchData();
    }, [query]);

    return { videos, error, loading };
};