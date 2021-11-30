import React from "react";

interface YoutubePlayerProps {
    title: string,
    videoId: string,
}

const YoutubePlayer = ({title, videoId }: YoutubePlayerProps) => {

return(
    <div className="auto-resizable-iframe">
        <div>
            <iframe
                title={title}
                frameBorder="0"
                allowFullScreen="true"
                src={`https://www.youtube.com/embed/${videoId}`}>
            </iframe>
        </div>
    </div>
)};

export default YoutubePlayer;
