import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import CyberSecurity from "../Utiilities/CyberSecurity";
function OverviewCommonET(props) {
  const videoUrl = "https://youtu.be/AcJ9d1S6Ong";
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
      <div style={{background:"none" }} className="overviewsection ETOverViewSection" >
        <h2 className="HR_heading" style={{marginBottom:"0",marginBottom:"0"}}>{props.MainHeading || "Experience the Perfect Blend of AI Smarts and Human Care with Help Desk 365"}</h2>
        <p style={{margin:"0"}}>{props.MainDescription || "Get the best of AI smart and human touch—deliver happiness right out of the box. Our SharePoint ticketing system gets you going fast with simplified workflows that let your employees glide through tasks effortlessly. As well as you can use our Help desk software easily within Microsoft 365 apps like Teams, Outlook, and SharePoint. "}</p>
    <div className="availcard2" style={{ margin: "2vw 0vw 3vw 0vw" }}>
      <div className="cd1">
        <div
          className="c1"
          style={{
            background: "#fcfcfc",
            border: "1px solid #fff",
          }}
        >
          <div className="icon1 ET365-Icon1">
            <img
              src="https://www.apps365.com/wp-content/uploads/2025/01/Multilevel20Sub-Service_7gk_dgWAW.png"
              alt="Description of Image"
              className="supportimage ET365-supportimage"
            />
          </div>
          <div className="txt1">
            <h3 className="Swift ET-Swift" style={{ color: "rgb(35, 35, 206)" }}>
              Easy Expense Logging - Anytime Anywhere
            </h3>
            <p className="easypera">
              Snap receipts, add notes, and submit expenses on the go—from desktop or mobile.
            </p>
          </div>
        </div>

        <div
          className="c2"
          style={{
            background: "#fcfcfc",
            border: "1px solid #fff",
          }}
        >
          <div className="icon2 ET365-Icon1">
            <img
              src="https://www.apps365.com/wp-content/uploads/2025/01/Ticket20Splitting20and20Merging_bjHjXP8m7.png"
              alt="Description of Image"
              className="supportimage ET365-supportimage"
            />
          </div>
          <div className="txt2">
            <h3 className="Swift ET-Swift" style={{ color: "rgb(35, 35, 206)" }}>
              Manage Budgets - Not Spreadsheets
            </h3>
            <p className="easypera">
              Automate expense tracking and stay on top of budgets without manual data entry or Excel chaos.
            </p>
          </div>
        </div>
      </div>

      <div className="cd2">
        <div
          className="c3"
          style={{
           background: "#fcfcfc",
            border: "1px solid #fff",
          }}
        >
          <div className="icon3 ET365-Icon1">
            <img
              src="https://ik.imagekit.io/zn4au2jftpm5/hr365/PM%20/Feature%20PM/Summary%20Terms%20and%20Conditions_BI85YYh3a.png?updatedAt=1738602768134"
              alt="Description of Image"
              className="supportimage ET365-supportimage"
            />
          </div>
          <div className="txt3">
            <h3 className="Swift ET-Swift" style={{ color: "rgb(35, 35, 206)" }}>
              Real-Time Visibility = Better Decisions
            </h3>
            <p className="easypera">
             View each dollar in real time. Get spending insights and manage costs before they spiral.
            </p>
          </div>
        </div>

        <div
          className="c4"
          style={{
            background: "#fcfcfc",
            border: "1px solid #fff",
          }}
        >
          <div className="icon4 ET365-Icon1">
            <img
              src="https://ik.imagekit.io/zn4au2jftpm5/hr365/PM%20/Feature%20PM/Enhanced%20Accountability_YVozx0uY1.png?updatedAt=1738601978507"
              alt="Description of Image"
              className="supportimage ET365-supportimage"
            />
          </div>
          <div className="txt4">
            <h3 className="Swift ET-Swift" style={{ color: "rgb(35, 35, 206)" }}>
              Built for Trust - Backed by Microsoft 365
            </h3>
            <p className="easypera">
              Seamlessly integrated with your existing Microsoft 365 setup. Enterprise-grade security without the complexity.
            </p>
          </div>
        </div>
</div></div>

        <div style={{position:"relative"}}>
          <img
            alt={props.MainImageAlt || "ET365"}
            src={props.MainImageSrc || "https://ik.imagekit.io/zn4au2jftpm5/Apps365/Teams/image%20(9)_Uz9SZfkEec.png?updatedAt=1725450644322"}

          />
          <div id="Features"></div>
          <div className='videoplysectio ET365-videoplysectio'>
            {videoUrl && !isVideoPlaying && (
              <div
                className='videoplayicon'
                onClick={handlePlayClick} // Only trigger video play when clicked
              >
                {/* <FontAwesomeIcon icon={faPlayCircle} className='videoicon' /> */}
                <button class="play-button">
                  <div class="play-icon"></div>
                </button>
              </div>
            )}
            {isVideoPlaying && videoUrl && (
              <div className="video-overlay" onClick={handleCloseVideo}>
                <div className="video-overlay-container" onClick={(e) => e.stopPropagation()}>
                  <div className="video-close-btn" onClick={handleCloseVideo}>
                    <FontAwesomeIcon icon={faClose} className="close-icon" />
                  </div>
                  <iframe
                    className="videoiframe"
                    src={getEmbedUrl(videoUrl)}
                    title="Embedded Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}

          </div>
             
                       
            
        </div>

      </div>

    </>
  );
}

export default OverviewCommonET;
