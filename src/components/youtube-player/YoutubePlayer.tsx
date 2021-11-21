import React from "react";

interface YoutubePlayerProps {
    videoId: string,
    width?: string,
    height?: string
}

const YoutubePlayer = ({ videoId, width, height }: YoutubePlayerProps) => {

return(
    <div>
        <iframe
            width={width}
            height={height}
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
        />
    </div>
)};

export default YoutubePlayer;
