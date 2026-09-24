import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import CyberSecurity from "../Utiilities/CyberSecurity";
import DemoButtons from "../Utiilities/DemoButtons";
import LMS_Slider from "../Utiilities/LMS_Slider";
import AssetLogoslider from "../Utiilities/AssetLogoslider";
import { Swiper, SwiperSlide } from "swiper/react";
import EmployeeDirectorylogoSlider from "../Utiilities/EmployeeDirectorylogoSlider";
import HelpdesklogoSlider from "../Utiilities/HelpdesklogoSlider";
function OverviewExpense365(props) {
    const videoUrl = "https://youtu.be/KTLztBbqNnM";
    const [isLightboxOpen, setLightboxOpen] = React.useState(false);
    const [selectedImageUrl, setSelectedImageUrl] = React.useState('');
    const [isVideoPlaying, setIsVideoPlaying] = React.useState(false);
    const closeLightbox = () => {
        setLightboxOpen(false);
    };
    const getEmbedUrl = (url) => {
        if (url.includes('youtube.com/watch?v=')) {
            return url.replace('watch?v=', 'embed/');
        } else if (url.includes('youtu.be/')) {
            const videoId = url.split('youtu.be/')[1];
            return `https://www.youtube.com/embed/${videoId}`;
        } else if (url.includes('vimeo.com/')) {
            const videoId = url.split('vimeo.com/')[1];
            return `https://player.vimeo.com/video/${videoId}`;
        } else {
            return url; // fallback for direct video links
        }
    };
    const handlePlayClick = () => {
        setIsVideoPlaying(true); // When play icon is clicked, play the video
    };
    const handleCloseVideo = () => {
        setIsVideoPlaying(false); // Close the video
    };
    return (
        <>
            <div style={{ background: "none" }} className="overviewsection ETOverViewSection" >
                <h2 className="HR_heading" style={{ marginBottom: "0vw", }}>Microsoft 365 Asset Management System with AI-Powered Asset Intelligence </h2>
                <p style={{ margin: "0" }}>Asset 365 AI helps organizations centralize asset tracking, automate asset workflows, and gain real-time visibility across their entire asset lifecycle. Built on Microsoft 365, Asset 365 AI enables teams to track ownership, inventory, assignments, and asset changes while working seamlessly across SharePoint, Microsoft Teams, and the Microsoft ecosystem.
                </p>


                {/* <div style={{ margin: "1vw 0vw", display: "flex", justifyContent: "center", marginBottom: "1vw" }}>
                    <DemoButtons LMS365="LMS365" demobtnText="Book a Live Demo" />
                </div> */}
                <div className="CLMoverviewSliderWrapper">

                    <Swiper>
                        {/*   modules={[Pagination, Autoplay]}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        className="CLMoverviewSlider"
                    >
                        {images.map((image, index) => ( */}
                        <SwiperSlide>
                            <div className="CLMoverviewSlide">
                                <img
                                    src="https://ik.imagekit.io/zn4au2jftpm5/Apps365/Teams/image%20(8)_Do7TgjeZV9.png?updatedAt=1725450644578"
                                    alt={`Asset Screenshot`}
                                    className="CLMoverviewImage"
                                />
                            </div>
                        </SwiperSlide>
                    </Swiper>

                    {!isVideoPlaying && (
                        <div
                            className="CLMoverviewPlayButtonWrapper"
                            onClick={() => setIsVideoPlaying(true)}
                        >
                            <button className="CLMoverviewPlayButton">
                                <div className="CLMoverviewPlayIcon"></div>
                            </button>
                        </div>
                    )}

                    {isVideoPlaying && (
                        <div
                            className="CLMVideoModalOverlay"
                            onClick={() => setIsVideoPlaying(false)}
                        >
                            <div
                                className="CLMVideoModal"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    className="CLMVideoModalClose"
                                    onClick={() => setIsVideoPlaying(false)}
                                >
                                    ×
                                </button>

                                <iframe
                                    src={`${getEmbedUrl(videoUrl)}?autoplay=1`}
                                    title="CLM Demo Video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="CLMVideoIframe"
                                />
                            </div>
                        </div>
                    )}
                </div>

            </div>

        </>
    );
}

export default OverviewExpense365;
