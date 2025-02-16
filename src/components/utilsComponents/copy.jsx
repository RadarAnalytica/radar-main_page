import React, { useRef, useEffect } from "react";
import videoMp4 from "../../assets/video/fixed_video.mp4";
import videoWebm from "../../assets/video/WebmLow.webm";

const VideoComponent = ({ style }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // для попытки воспроизведения
        const attemptPlay = async () => {
            try {
                await video.play();
            } catch (err) {
                console.log('Автовоспроизведение не удалось, попробуем после взаимодействия');
            }
        };

        // воспроизвести при загрузке метаданных
        video.addEventListener('loadedmetadata', attemptPlay);
        
        // воспроизвести при взаимодействии с документом
        const playOnInteraction = () => {
            attemptPlay();
            document.removeEventListener('touchstart', playOnInteraction);
            document.removeEventListener('click', playOnInteraction);
        };

        document.addEventListener('touchstart', playOnInteraction);
        document.addEventListener('click', playOnInteraction);

        return () => {
            document.removeEventListener('touchstart', playOnInteraction);
            document.removeEventListener('click', playOnInteraction);
            video.removeEventListener('loadedmetadata', attemptPlay);
        };
    }, []);

    return (
        <div style={{ 
            width: "100%", 
            height: "100%", 
            ...style,
            position: 'relative',
            overflow: 'hidden'
        }}>
            <video
                ref={videoRef}
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block"
                }}
                poster={poster}
                playsInline
                autoPlay
                muted
                loop
                preload="auto"
                webkit-playsinline="true"
            >
                <source src={videoWebm} type="video/webm" />
                <source src={videoMp4} type="video/mp4" />
            </video>
        </div>
    );
};

export default VideoComponent;
